interface CardProps {
  title?: string
  children: React.ReactNode
  className?: string
}

export default function Card({ title, children, className }: CardProps) {
  return (
    <div className={`bg-background-100 p-6 rounded-xl border border-secondary-200 shadow-sm dark:shadow-none ${className ?? ''}`}>
      {title && <h2 className="text-text-900 font-bold text-xl">{title}</h2>}
      <div className={`text-text-600 ${title ? 'mt-3' : ''}`}>{children}</div>
    </div>
  )
}