import './App.css'
import Card from './components/Card'
import RecentActivity from './components/RecentActivity'
import { useTheme } from './hooks/useTheme'
import fblaPhoto from './assets/images/fbla.png'
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaMapMarkerAlt,
  FaTrophy,
  FaMedal,
  FaAward,
  FaEnvelope,
  FaSun,
  FaMoon,
  FaCode,
  FaShieldAlt,
  FaNetworkWired,
} from 'react-icons/fa'

const CURRENT_YEAR = new Date().getFullYear()

function App() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    // If currently dark (or system-dark), toggle to light; otherwise dark
    const isDark = document.documentElement.classList.contains('dark')
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <div className="min-h-screen bg-background-50 text-text-900 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-6">
        {/* Navigation / Header */}
        <header className="flex items-center justify-between pb-2 border-b border-secondary-200/60">
          <div className="flex items-center gap-3">
            <span className="font-bold text-xl tracking-tight text-text-900">
              Trent Calvin
            </span>
            <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium bg-secondary-100 text-secondary-800 border border-secondary-200">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              Available for internships & freelance
            </div>
          </div>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2.5 rounded-xl bg-background-100 hover:bg-background-200 text-text-700 hover:text-text-900 border border-secondary-200 transition"
          >
            {theme === 'dark' ? (
              <FaSun className="text-accent-500" size={18} />
            ) : (
              <FaMoon className="text-secondary-700" size={18} />
            )}
          </button>
        </header>

        {/* Main Bento Grid */}
        <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. Photo Card */}
          <div className="md:col-span-1 rounded-xl overflow-hidden border border-secondary-200 shadow-sm dark:shadow-none relative group bg-background-100 flex flex-col justify-end min-h-[340px]">
            <img
              src={fblaPhoto}
              alt="Trent Calvin at FBLA National Leadership Conference"
              className="absolute inset-0 w-full h-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
            <div className="relative p-5 text-white">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-primary-500 text-white mb-1.5">
                Missouri S&T • IST
              </span>
              <h2 className="text-lg font-bold text-white">Trent Calvin</h2>
              <p className="text-xs text-white/80 flex items-center gap-1.5 mt-0.5">
                <FaTrophy className="text-accent-400" />
                FBLA National Finalist
              </p>
            </div>
          </div>

          {/* 2. Hero Bio Card */}
          <Card title="Hey, I'm Trent" className="md:col-span-2 flex flex-col justify-between">
            <div className="space-y-3.5 text-text-600 leading-relaxed text-sm sm:text-base">
              <p>
                I’m a software developer based in{' '}
                <a
                  href="https://www.google.com/maps/place/Rolla,+MO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-text-900 font-semibold hover:underline whitespace-nowrap"
                >
                  <FaMapMarkerAlt className="text-primary-500" />
                  <span>Rolla, Missouri</span>
                </a>
                , pursuing Information Science & Technology at{' '}
                <span className="text-text-900 font-semibold">Missouri S&T</span>.
              </p>

              <p>
                I've been programming in{' '}
                <span className="text-text-900 font-semibold">C# & .NET</span> for over six years.
                My interests center on{' '}
                <span className="text-text-900 font-semibold">reverse engineering and low-level systems</span>
                —understanding machine execution, memory structures, and runtime internals from the ground up.
              </p>

              <p>
                In addition to systems programming, I build full-stack web applications with{' '}
                <span className="text-text-900 font-semibold">TypeScript, React, and Python</span>, and
                have delivered custom digital solutions for local small businesses.
              </p>
            </div>

            {/* Social & Contact Buttons */}
            <div className="pt-5 border-t border-secondary-200/60 mt-4 flex flex-wrap gap-2.5">
              <a
                href="https://github.com/trentunderscore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-medium bg-background-200/70 hover:bg-background-300/80 text-text-900 transition"
              >
                <FaGithub size={16} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/trentoncalvin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-medium bg-background-200/70 hover:bg-background-300/80 text-text-900 transition"
              >
                <FaLinkedin className="text-[#0a66c2]" size={16} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.youtube.com/@trentunderscore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-medium bg-background-200/70 hover:bg-background-300/80 text-text-900 transition"
              >
                <FaYoutube className="text-[#ff0000]" size={16} />
                <span>YouTube</span>
              </a>
              <a
                href="mailto:me@trents.site"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-medium bg-primary-500 hover:bg-primary-600 text-primary-50 transition ml-auto"
              >
                <FaEnvelope size={14} />
                <span>Get in Touch</span>
              </a>
            </div>
          </Card>

          {/* 3. Competitions & Recognition Card */}
          <Card title="Competitions & Recognition" className="md:col-span-2">
            <ul className="divide-y divide-secondary-200/60 text-sm">
              <li className="py-2.5 flex items-center justify-between gap-4 first:pt-0">
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-accent-100 text-accent-700">
                    <FaTrophy size={16} />
                  </span>
                  <div>
                    <strong className="text-text-900 font-semibold block">10th Place Nationally</strong>
                    <span className="text-xs text-text-500">FBLA Introduction to Computer Networking</span>
                  </div>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-background-200 text-text-600">
                  2024
                </span>
              </li>

              <li className="py-2.5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-primary-100 text-primary-700">
                    <FaMedal size={16} />
                  </span>
                  <div>
                    <strong className="text-text-900 font-semibold block">2nd in Missouri State</strong>
                    <span className="text-xs text-text-500">FBLA Introduction to Computer Networking</span>
                  </div>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-background-200 text-text-600">
                  2024
                </span>
              </li>

              <li className="py-2.5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-secondary-100 text-secondary-700">
                    <FaMedal size={16} />
                  </span>
                  <div>
                    <strong className="text-text-900 font-semibold block">3rd in Missouri State</strong>
                    <span className="text-xs text-text-500">SkillsUSA Computer Networking</span>
                  </div>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-background-200 text-text-600">
                  2025
                </span>
              </li>

              <li className="py-2.5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-primary-100 text-primary-700">
                    <FaTrophy size={16} />
                  </span>
                  <div>
                    <strong className="text-text-900 font-semibold block">5th in Missouri State & National Qualifier</strong>
                    <span className="text-xs text-text-500">FBLA Coding & Programming</span>
                  </div>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-background-200 text-text-600">
                  2025
                </span>
              </li>

              <li className="py-2.5 flex items-center justify-between gap-4 last:pb-0">
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-accent-100 text-accent-700">
                    <FaAward size={16} />
                  </span>
                  <div>
                    <strong className="text-text-900 font-semibold block">2x Dedication & Dependability Awards</strong>
                    <span className="text-xs text-text-500">YMCA Workplace Recognition</span>
                  </div>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-background-200 text-text-600">
                  Workplace
                </span>
              </li>
            </ul>
          </Card>

          {/* 4. Tech Stack & Core Competencies */}
          <Card title="Skills & Specialties" className="md:col-span-1 flex flex-col justify-between">
            <div className="space-y-4 text-sm">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-text-400 flex items-center gap-1.5 mb-2">
                  <FaCode className="text-primary-500" /> Languages & Frameworks
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['C#', '.NET', 'TypeScript', 'React', 'Python', 'C++', 'SQL'].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs rounded-md bg-background-200/70 text-text-800 font-medium border border-secondary-200/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-text-400 flex items-center gap-1.5 mb-2">
                  <FaNetworkWired className="text-secondary-600" /> Networking & Systems
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Computer Networking',
                    'Reverse Engineering',
                    'Machine Code',
                    'Systems Architecture',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs rounded-md bg-secondary-100/70 text-secondary-800 font-medium border border-secondary-200/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-text-400 flex items-center gap-1.5 mb-2">
                  <FaShieldAlt className="text-accent-600" /> Cybersecurity & Tools
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Cybersecurity', 'Git / GitHub', 'Vite', 'PostCSS'].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs rounded-md bg-accent-100/70 text-accent-800 font-medium border border-accent-200/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-secondary-200/60 text-xs text-text-500">
              6+ years programming experience
            </div>
          </Card>

          {/* 5. What I've Been Up To (GitHub Activity) */}
          <RecentActivity className="md:col-span-2" limit={4} />

          {/* 6. Client Work & Impact Card */}
          <Card title="Freelance & Projects" className="md:col-span-1 flex flex-col justify-between">
            <div className="space-y-3 text-sm text-text-600">
              <p>
                I build and deploy production web applications and tools for local businesses and organizations to strengthen their online presence and optimize daily operations.
              </p>
              <div className="p-3 rounded-lg bg-background-200/50 border border-secondary-200/60 text-xs">
                <span className="font-semibold text-text-900 block mb-1">Client Solutions</span>
                Custom full-stack web development, SEO, and responsive digital tools tailored to small business needs.
              </div>
            </div>

            <a
                href="mailto:me@trents.site"
              className="mt-4 w-full py-2 px-3 text-center rounded-lg bg-primary-500 hover:bg-primary-600 text-primary-50 text-sm font-medium transition block"
            >
              Discuss a Project &rarr;
            </a>
          </Card>
        </main>

        {/* Minimal Footer */}
        <footer className="pt-8 pb-4 text-center text-xs text-text-400 border-t border-secondary-200/60">
          <p>© {CURRENT_YEAR} Trenton Calvin • Rolla, Missouri • Built with React & Tailwind CSS</p>
        </footer>
      </div>
    </div>
  )
}

export default App
