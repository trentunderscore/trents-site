import { useEffect, useState } from 'react'
import Card from './Card'
import { FaCodeBranch, FaStar, FaGitAlt, FaBookOpen } from 'react-icons/fa'

interface GitHubEvent {
  id: string
  type: string
  repo: {
    name: string
  }
  payload: {
    action?: string
    ref_type?: string
    ref?: string
    commits?: Array<{
      sha: string
      message: string
    }>
  }
  created_at: string
}

interface RecentActivityProps {
  username?: string
  className?: string
  limit?: number
}

function timeAgo(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  if (seconds < 60) return 'just now'
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  if (days < 30) return `${days}d ago`
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

function getCachedEvents(username: string): GitHubEvent[] | null {
  try {
    const cached = sessionStorage.getItem(`gh_events_${username}`)
    if (!cached) return null
    const { data, timestamp } = JSON.parse(cached)
    if (Date.now() - timestamp < 5 * 60 * 1000) {
      return data
    }
    sessionStorage.removeItem(`gh_events_${username}`)
  } catch {
    // Ignore cache read errors
  }
  return null
}

export default function RecentActivity({
  username = 'trentunderscore',
  className = '',
  limit = 4,
}: RecentActivityProps) {
  const [events, setEvents] = useState<GitHubEvent[]>(() => getCachedEvents(username) ?? [])
  const [loading, setLoading] = useState<boolean>(() => getCachedEvents(username) === null)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (getCachedEvents(username)) return

    fetch(`https://api.github.com/users/${username}/events/public?per_page=10`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch')
        return res.json()
      })
      .then((data: GitHubEvent[]) => {
        const relevantEvents = data.filter((e) =>
          ['PushEvent', 'CreateEvent', 'WatchEvent', 'ForkEvent', 'PullRequestEvent'].includes(e.type)
        )
        setEvents(relevantEvents)
        sessionStorage.setItem(
          `gh_events_${username}`,
          JSON.stringify({ data: relevantEvents, timestamp: Date.now() })
        )
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [username])

  const renderEventDescription = (event: GitHubEvent) => {
    const repoShortName = event.repo.name.replace(`${username}/`, '')

    switch (event.type) {
      case 'PushEvent': {
        const commitMsg = event.payload.commits?.[0]?.message?.split('\n')[0]
        return (
          <>
            <span>Pushed to </span>
            <span className="font-medium text-text-900">{repoShortName}</span>
            {commitMsg && (
              <p className="text-xs text-text-500 mt-0.5 truncate font-mono">
                "{commitMsg}"
              </p>
            )}
          </>
        )
      }
      case 'CreateEvent': {
        const type = event.payload.ref_type || 'branch'
        return (
          <>
            <span>Created {type} in </span>
            <span className="font-medium text-text-900">{repoShortName}</span>
          </>
        )
      }
      case 'WatchEvent':
        return (
          <>
            <span>Starred </span>
            <span className="font-medium text-text-900">{event.repo.name}</span>
          </>
        )
      case 'PullRequestEvent':
        return (
          <>
            <span>{event.payload.action === 'closed' ? 'Merged' : 'Opened'} PR in </span>
            <span className="font-medium text-text-900">{repoShortName}</span>
          </>
        )
      default:
        return (
          <>
            <span>Activity in </span>
            <span className="font-medium text-text-900">{repoShortName}</span>
          </>
        )
    }
  }

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'PushEvent':
        return <FaGitAlt className="text-primary-500 mt-1 shrink-0" />
      case 'WatchEvent':
        return <FaStar className="text-accent-500 mt-1 shrink-0" />
      case 'CreateEvent':
        return <FaBookOpen className="text-secondary-500 mt-1 shrink-0" />
      default:
        return <FaCodeBranch className="text-text-400 mt-1 shrink-0" />
    }
  }

  return (
    <Card title="What I've Been Up To" className={className}>
      {loading ? (
        <div className="space-y-3 animate-pulse pt-1">
          {[...Array(limit)].map((_, i) => (
            <div key={i} className="h-9 bg-background-200/50 rounded-lg" />
          ))}
        </div>
      ) : error || events.length === 0 ? (
        <div className="text-sm text-text-500 py-2">
          <p>Check out my latest code and contributions directly on GitHub:</p>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-primary-500 font-medium hover:underline mt-2"
          >
            github.com/{username} &rarr;
          </a>
        </div>
      ) : (
        <div className="space-y-3 pt-1">
          {events.slice(0, limit).map((event) => (
            <a
              key={event.id}
              href={`https://github.com/${event.repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 p-2 -mx-2 rounded-lg hover:bg-background-200/40 transition group"
            >
              {getEventIcon(event.type)}
              <div className="flex-1 min-w-0 text-sm">
                <div className="text-text-600 group-hover:text-text-900 transition leading-snug">
                  {renderEventDescription(event)}
                </div>
              </div>
              <span className="text-xs text-text-400 whitespace-nowrap shrink-0 mt-0.5">
                {timeAgo(event.created_at)}
              </span>
            </a>
          ))}

          <div className="pt-1 text-right">
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-text-500 hover:text-primary-500 transition font-medium"
            >
              View all on GitHub &rarr;
            </a>
          </div>
        </div>
      )}
    </Card>
  )
}
