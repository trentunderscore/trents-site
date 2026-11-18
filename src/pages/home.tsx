
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import RecentActivity from '../components/RecentActivity'
import { useTheme } from '../hooks/useTheme'
import fblaPhoto from '../assets/images/fbla.png'
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
    FaMoneyBill,
    FaFileAlt,
} from 'react-icons/fa'

import { LuCakeSlice } from 'react-icons/lu'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import Footer from '../components/Footer'


export default function Home() {

    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        // If currently dark (or system-dark), toggle to light; otherwise dark
        const isDark = document.documentElement.classList.contains('dark')
        setTheme(isDark ? 'light' : 'dark')
    }

    return <>
        <div className="min-h-screen bg-background-50 text-text-900 transition-colors duration-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-6">
                {/* Navigation / Header */}
                <header className="flex items-center justify-between pb-2 border-b border-secondary-200/60">
                    <div className="flex items-center gap-4">
                        <Link to="/" className="font-bold text-xl tracking-tight text-text-900 hover:text-primary-600 transition">
                            Trent Calvin
                        </Link>
                        <nav className="flex items-center gap-2 text-sm">
                            <span className="px-3 py-1 rounded-lg bg-primary-100 text-primary-800 font-semibold border border-primary-200">
                                Overview
                            </span>
                            <Link
                                to="/hireme"
                                className="px-3 py-1 rounded-lg text-text-600 hover:text-text-900 hover:bg-background-200 transition"
                            >
                                Hire Me
                            </Link>
                        </nav>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 border border-primary-200">
                            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                            Summer 2027 Availability
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
                    </div>
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
                                <a
                                    href="https://www.mst.edu/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-text-900 font-semibold hover:underline"
                                >
                                    Missouri S&T
                                </a>
                            </p>

                            <p>
                                I've been programming in{' '}
                                <span className="text-text-900 font-semibold">C# & .NET</span> for over six years.
                                My interests center on{' '}
                                <span className="text-text-900 font-semibold">reverse engineering and low-level systems</span>
                                , understanding machine execution, memory structures, and runtime internals from the ground up.
                            </p>

                            <p>
                                In addition to systems programming, I build full-stack web applications with{' '}
                                <span className="text-text-900 font-semibold">TypeScript, React, and Python</span>, and
                                have delivered custom digital solutions for{' '}

                                <a
                                    href="https://www.barnbabyart.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-text-900 font-semibold hover:underline"
                                >
                                    local small businesses
                                </a>
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
                            <a href="mailto:me@trents.site"
                                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-medium bg-background-200/70 hover:bg-background-300/80 text-text-900 transition"
                            >
                                <FaEnvelope size={14} />
                                <span>Email</span>
                            </a>
                            <a
                                href="https://trents.site/resume"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-semibold bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white dark:text-neutral-950 shadow-sm transition"
                            >
                                <FaFileAlt size={14} />
                                <span>Resume</span>
                            </a>
                        </div>
                    </Card>

                    {/* 3. Competitions & Recognition Card */}
                    <Card title="Competitions & Recognition" className="md:col-span-2">
                        <ul className="divide-y divide-secondary-200/60 text-sm">
                            <li className="py-2.5 flex items-center justify-between gap-4 first:pt-0">
                                <div className="flex items-center gap-3">
                                    <span className="p-2 rounded-lg bg-primary-100 text-primary-700 border border-primary-200">
                                        <FaTrophy size={16} />
                                    </span>
                                    <div>
                                        <strong className="text-text-900 font-semibold block">10th Place Nationally</strong>
                                        <span className="text-xs text-text-500">FBLA Introduction to Computer Networking</span>
                                    </div>
                                </div>
                                <span className="text-xs font-mono px-2 py-0.5 rounded bg-background-200 text-text-600 border border-secondary-200/50">
                                    2024
                                </span>
                            </li>

                            <li className="py-2.5 flex items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <span className="p-2 rounded-lg bg-primary-100 text-primary-700 border border-primary-200">
                                        <FaMedal size={16} />
                                    </span>
                                    <div>
                                        <strong className="text-text-900 font-semibold block">2nd in Missouri State</strong>
                                        <span className="text-xs text-text-500">FBLA Introduction to Computer Networking</span>
                                    </div>
                                </div>
                                <span className="text-xs font-mono px-2 py-0.5 rounded bg-background-200 text-text-600 border border-secondary-200/50">
                                    2024
                                </span>
                            </li>

                            <li className="py-2.5 flex items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <span className="p-2 rounded-lg bg-primary-100 text-primary-700 border border-primary-200">
                                        <FaMedal size={16} />
                                    </span>
                                    <div>
                                        <strong className="text-text-900 font-semibold block">3rd in Missouri State</strong>
                                        <span className="text-xs text-text-500">SkillsUSA Computer Networking</span>
                                    </div>
                                </div>
                                <span className="text-xs font-mono px-2 py-0.5 rounded bg-background-200 text-text-600 border border-secondary-200/50">
                                    2025
                                </span>
                            </li>

                            <li className="py-2.5 flex items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <span className="p-2 rounded-lg bg-primary-100 text-primary-700 border border-primary-200">
                                        <FaTrophy size={16} />
                                    </span>
                                    <div>
                                        <strong className="text-text-900 font-semibold block">5th in Missouri State & National Qualifier</strong>
                                        <span className="text-xs text-text-500">FBLA Coding & Programming</span>
                                    </div>
                                </div>
                                <span className="text-xs font-mono px-2 py-0.5 rounded bg-background-200 text-text-600 border border-secondary-200/50">
                                    2025
                                </span>
                            </li>

                            <li className="py-2.5 flex items-center justify-between gap-4 last:pb-0">
                                <div className="flex items-center gap-3">
                                    <span className="p-2 rounded-lg bg-primary-100 text-primary-700 border border-primary-200">
                                        <FaAward size={16} />
                                    </span>
                                    <div>
                                        <strong className="text-text-900 font-semibold block">2x Dedication & Dependability Awards</strong>
                                        <span className="text-xs text-text-500">YMCA Workplace Recognition</span>
                                    </div>
                                </div>
                                <span className="text-xs font-mono px-2 py-0.5 rounded bg-background-200 text-text-600 border border-secondary-200/50">
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
                                    {['C#', '.NET', 'TypeScript', 'React', 'Python', 'C++', 'MongoDB', 'PocketBase'].map((skill) => (
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
                                    {['Cybersecurity', 'Git / GitHub', 'Docker', 'Visual Studio', 'JetBrains IDEs', 'x64dbg', 'IDA Pro', 'REST APIs', 'Postman'].map((skill) => (
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

                    {/* 6. Client Work & Web Development */}
                    <Card title="Client Work & Web Development" className="md:col-span-1 flex flex-col justify-between">
                        <div className="space-y-3 text-sm text-text-600">
                            <p>
                                I work with local small businesses to establish and improve their digital presence, selecting practical, accessible, and maintainable solutions that fit their needs and budgets.
                            </p>
                            <div className="p-3 rounded-lg bg-background-200/50 border border-secondary-200/60 text-xs">
                                <span className="font-semibold text-text-900 block mb-1">Practical Web Solutions</span>
                                Affordable, straightforward websites designed for clear customer access and easy client maintenance.
                            </div>
                        </div>

                        <a
                            href="mailto:me@trents.site?subject=Website%20Project%20Inquiry"
                            className="mt-4 w-full py-2 px-3 text-center rounded-lg bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white dark:text-neutral-950 text-sm font-semibold transition block shadow-sm"
                        >
                            Discuss a Project &rarr;
                        </a>
                    </Card>

                    {/* 7. Projects Card */}
                    <Card
                        title="Selected Projects"
                        className="md:col-span-3"
                    >
                        <p className="text-sm text-text-600 mb-3">
                            A selection of recent projects spanning competitive programming, systems reverse engineering, and web development.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <div className="bg-background-200/50 p-3.5 rounded-lg border border-secondary-200/60 flex flex-col justify-between">
                                <div>
                                    <div className="text-primary-600 font-semibold flex items-center gap-2 mb-1">
                                        <FaMoneyBill />
                                        <a href="https://github.com/FBLACOMPBG2024/SmartSpend" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                            SmartSpend
                                        </a>
                                        <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-primary-100 text-primary-800 border border-primary-200 ml-auto">
                                            2025 Qualifier
                                        </span>
                                    </div>
                                    <p className="text-text-500 text-xs leading-relaxed">
                                        Personal finance and budgeting app that earned 5th place at 2025 Missouri State FBLA and qualified for Nationals.
                                    </p>
                                </div>
                                <span className="text-[11px] text-text-400 mt-2 block font-mono">C# • FBLA Coding</span>
                            </div>

                            <div className="bg-background-200/50 p-3.5 rounded-lg border border-secondary-200/60 flex flex-col justify-between">
                                <div>
                                    <div className="text-primary-600 font-semibold flex items-center gap-2 mb-1">
                                        <FaMagnifyingGlass />
                                        <a href="https://github.com/trentunderscore/BinOcular" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                            BinOcular
                                        </a>
                                    </div>
                                    <p className="text-text-500 text-xs leading-relaxed">
                                        Automated static binary analysis and firmware triage workbench for reverse engineering workflows.
                                    </p>
                                </div>
                                <span className="text-[11px] text-text-400 mt-2 block font-mono">C# • ASP.NET • React • SQLite</span>
                            </div>

                            <div className="bg-background-200/50 p-3.5 rounded-lg border border-secondary-200/60 flex flex-col justify-between">
                                <div>
                                    <div className="text-primary-600 font-semibold flex items-center gap-2 mb-1">
                                        <LuCakeSlice className="text-accent-500" />
                                        <a href="https://www.theaccidentalcheesecakecompany.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                            Client Websites
                                        </a>
                                    </div>
                                    <p className="text-text-500 text-xs leading-relaxed">
                                        Client sites including The Accidental Cheesecake Company and Barn Baby Art, built for accessible maintenance.
                                    </p>
                                </div>
                                <Link to="/hireme" className="text-[11px] text-primary-600 font-semibold mt-2 hover:underline block">
                                    View on Hire Me page &rarr;
                                </Link>
                            </div>
                        </div>
                    </Card>
                </main>
            </div>
            <Footer />
        </div>
    </>
}