interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className="mt-4 px-4 py-2 bg-primary-500 text-primary-50 rounded-lg hover:bg-primary-600 transition">
      {children}
    </button>
  )
}