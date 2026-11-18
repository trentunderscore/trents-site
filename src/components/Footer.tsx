const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
    return <>
        <footer className="pt-8 pb-4 text-center text-xs text-text-400 border-t border-secondary-200/60">
            <p>© {CURRENT_YEAR} Trenton Calvin • Rolla, Missouri • Built with React & Tailwind CSS</p>
        </footer>
    </>
}