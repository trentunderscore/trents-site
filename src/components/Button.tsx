interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="mt-4 px-4 py-2 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white dark:text-neutral-950 font-semibold rounded-lg shadow-sm transition"
    >
      {children}
    </button>
  )
}
