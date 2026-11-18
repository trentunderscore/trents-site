import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Footer from '../components/Footer'
import { useTheme } from '../hooks/useTheme'
import automotiveImg from '../assets/images/mustang.png'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
  FaSun,
  FaMoon,
  FaCode,
  FaNetworkWired,
  FaLaptopCode,
  FaTrophy,
  FaMedal,
  FaWrench,
  FaGraduationCap,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaMoneyBill,
} from 'react-icons/fa'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { LuCakeSlice } from 'react-icons/lu'

export default function HireMe() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains('dark')
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <div className="min-h-screen bg-background-50 text-text-900 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
        {/* Navigation / Header */}
        <header className="flex items-center justify-between pb-4 border-b border-secondary-200">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="font-bold text-xl tracking-tight text-text-900 hover:text-primary-600 transition"
            >
              Trent Calvin
            </Link>

            <nav className="flex items-center gap-2 text-sm">
              <Link
                to="/"
                className="px-3 py-1 rounded-lg text-text-600 hover:text-text-900 hover:bg-background-200 transition"
              >
                Overview
              </Link>
              <span className="px-3 py-1 rounded-lg bg-primary-100 text-primary-800 font-semibold border border-primary-200">
                Hire Me
              </span>
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

        {/* 01: Introduction & Availability Hero Card */}
        <section>
          <Card className="p-8 sm:p-10 border-primary-200/80 bg-gradient-to-br from-background-100 to-background-200/50">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary-100 text-primary-800 border border-primary-200">
                <FaCalendarAlt size={12} className="text-primary-600" />
                May – August 2027
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-900">
                Let's work together.
              </h1>

              <div className="space-y-3 text-text-600 text-base sm:text-lg leading-relaxed">
                <p>
                  I'm Trent, a software developer and Information Science & Technology student at{' '}
                  <span className="font-semibold text-text-900">Missouri S&T</span>. I enjoy building software,
                  exploring how systems work, and taking on technical challenges that push me to learn something new.
                </p>

                <p>
                  My experience spans software development, IT infrastructure, networking, and independent projects.
                  I've also worked with small businesses to develop practical solutions that fit their needs, budgets,
                  and ability to maintain them.
                </p>

                <p>
                  I'm always interested in opportunities to apply what I've learned, contribute to meaningful projects,
                  and continue growing as a developer.
                </p>
              </div>

              {/* Status Callout Box */}
              <div className="mt-6 p-4 rounded-xl bg-background-200 border border-secondary-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-600 block mb-0.5">
                    Currently Seeking
                  </span>
                  <p className="text-sm font-semibold text-text-900">
                    Summer 2027 internships and full-time opportunities (May through August 2027)
                  </p>
                </div>

                <div className="flex items-center gap-2.5 shrink-0">
                  <a
                    href="mailto:me@trents.site?subject=Summer%202027%20Opportunity"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white dark:text-neutral-950 font-semibold text-sm transition shadow-sm"
                  >
                    <FaEnvelope size={14} />
                    <span>Contact Me</span>
                  </a>
                  <a
                    href="https://trents.site/resume"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-background-100 hover:bg-background-200 text-text-900 font-medium text-sm border border-secondary-200 transition shadow-sm"
                  >
                    <FaFileAlt size={14} className="text-primary-600" />
                    <span>Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* 02: What I Bring */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-text-400">02</span>
            <h2 className="text-2xl font-bold tracking-tight text-text-900">What I Bring</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-700 border border-primary-200 flex items-center justify-center">
                  <FaCode size={20} />
                </div>
                <h3 className="text-lg font-bold text-text-900">Software Development</h3>
                <p className="text-sm text-text-600 leading-relaxed">
                  I've been programming in C# and .NET for over six years, with additional experience in C++, TypeScript, JavaScript, and Python. I enjoy working across the stack, from application architecture and backend development to frontend interfaces and database integration.
                </p>
              </div>
              <p className="text-xs text-text-500 pt-4 mt-4 border-t border-secondary-200 font-medium">
                Focus on reverse engineering, low-level systems, and deep runtime behavior.
              </p>
            </Card>

            <Card className="flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-700 border border-primary-200 flex items-center justify-center">
                  <FaNetworkWired size={20} />
                </div>
                <h3 className="text-lg font-bold text-text-900">IT & Infrastructure</h3>
                <p className="text-sm text-text-600 leading-relaxed">
                  My experience working in a technology department has given me practical exposure to network installations, troubleshooting, computer deployments, and maintaining business technology.
                </p>
              </div>
              <p className="text-xs text-text-500 pt-4 mt-4 border-t border-secondary-200 font-medium">
                Autonomous problem research and reliable solutions in mission-critical environments.
              </p>
            </Card>

            <Card className="flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-700 border border-primary-200 flex items-center justify-center">
                  <FaLaptopCode size={20} />
                </div>
                <h3 className="text-lg font-bold text-text-900">Independent Development</h3>
                <p className="text-sm text-text-600 leading-relaxed">
                  Some of my most valuable experience has come from building things independently. I've worked with unfamiliar frameworks, integrated different technologies, and developed projects for competitions and personal use.
                </p>
              </div>
              <p className="text-xs text-text-500 pt-4 mt-4 border-t border-secondary-200 font-medium">
                Rapid self-directed learning and turning conceptual ideas into working software.
              </p>
            </Card>
          </div>
        </section>

        {/* 03: Selected Projects */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-text-400">03</span>
            <h2 className="text-2xl font-bold tracking-tight text-text-900">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* SmartSpend */}
            <Card className="flex flex-col justify-between border-primary-200 relative overflow-hidden">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-primary-600 font-bold text-lg">
                    <FaMoneyBill />
                    <h3>SmartSpend</h3>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-primary-100 text-primary-800 border border-primary-200">
                    National Qualifier 2025
                  </span>
                </div>

                <p className="text-xs font-semibold text-text-500 uppercase tracking-wider">
                  Personal Finance & Budgeting Application • FBLA Coding & Programming
                </p>

                <p className="text-sm text-text-600 leading-relaxed">
                  SmartSpend was developed as my entry for FBLA's Coding & Programming competition. The project focuses on personal finance management, providing users with tools to organize their finances and manage their budgets.
                </p>

                <p className="text-sm text-text-600 leading-relaxed">
                  The project earned <strong className="text-text-900">5th place at the Missouri FBLA State Leadership Conference in 2025</strong>, qualifying me to compete at the national level. It represents my ability to take an idea, develop it into a functional application, and present the result in a competitive environment.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-secondary-200 flex items-center justify-between">
                <span className="text-xs text-text-500 font-medium">C# • Desktop Architecture</span>
                <a
                  href="https://github.com/FBLACOMPBG2024/SmartSpend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 hover:underline"
                >
                  <FaGithub size={14} />
                  <span>View Source Code &rarr;</span>
                </a>
              </div>
            </Card>

            {/* BinOcular */}
            <Card className="flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-text-900 font-bold text-lg">
                    <FaMagnifyingGlass className="text-primary-600" />
                    <h3>BinOcular</h3>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-background-200 text-text-700 border border-secondary-200">
                    Systems & Analysis
                  </span>
                </div>

                <p className="text-xs font-semibold text-text-500 uppercase tracking-wider">
                  Automated Static Binary Analysis & Firmware Triage Workbench
                </p>

                <p className="text-sm text-text-600 leading-relaxed">
                  BinOcular is an independent project focused on simplifying binary inspection and organizing static analysis workflows. Built with C#, ASP.NET Core, React, and SQLite, the project has challenged me to work across backend development, frontend integration, database design, and external tool integration.
                </p>

                <p className="text-sm text-text-600 leading-relaxed">
                  A significant part of developing BinOcular has been learning unfamiliar technologies and understanding how different parts of an application communicate, using experimentation, documentation, and debugging.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-secondary-200 flex items-center justify-between">
                <span className="text-xs text-text-500 font-medium">C# • ASP.NET Core • React • SQLite</span>
                <a
                  href="https://github.com/trentunderscore/BinOcular"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 hover:underline"
                >
                  <FaGithub size={14} />
                  <span>View Source Code &rarr;</span>
                </a>
              </div>
            </Card>
          </div>
        </section>

        {/* 04: Client Work & Small Business Websites */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-text-400">04</span>
            <h2 className="text-2xl font-bold tracking-tight text-text-900">Client Work & Small Business Websites</h2>
          </div>

          <Card className="space-y-6">
            <div className="max-w-3xl space-y-2 text-sm sm:text-base text-text-600 leading-relaxed">
              <p>
                Not every problem needs a complicated custom-built application. Sometimes the best solution is something affordable, accessible, and easy for the client to maintain.
              </p>
              <p>
                I've worked with small businesses to establish and improve their online presence, selecting website solutions that fit their requirements rather than introducing unnecessary complexity or ongoing maintenance burdens.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <a
                href="https://www.theaccidentalcheesecakecompany.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-background-200/60 hover:bg-background-200 border border-secondary-200 transition group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-text-900 flex items-center gap-2">
                      <LuCakeSlice className="text-primary-600" />
                      The Accidental Cheesecake Company
                    </span>
                    <FaExternalLinkAlt size={12} className="text-text-400 group-hover:text-primary-600 transition" />
                  </div>
                  <p className="text-xs text-text-600 leading-relaxed">
                    A small business website designed to establish an online presence and make business information accessible to customers.
                  </p>
                </div>
                <span className="text-xs text-primary-600 font-semibold mt-3 block">
                  theaccidentalcheesecakecompany.com &rarr;
                </span>
              </a>

              <a
                href="https://www.barnbabyart.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-background-200/60 hover:bg-background-200 border border-secondary-200 transition group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-text-900">
                      Barn Baby Art
                    </span>
                    <FaExternalLinkAlt size={12} className="text-text-400 group-hover:text-primary-600 transition" />
                  </div>
                  <p className="text-xs text-text-600 leading-relaxed">
                    A website built around the business's needs, with an emphasis on accessibility and straightforward content management.
                  </p>
                </div>
                <span className="text-xs text-primary-600 font-semibold mt-3 block">
                  barnbabyart.com &rarr;
                </span>
              </a>
            </div>

            <div className="pt-4 border-t border-secondary-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-text-600">
                If you run a small business or organization and need an affordable, maintainable website, I'd be glad to discuss it.
              </p>
              <a
                href="mailto:me@trents.site?subject=Website%20Project%20Inquiry"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white dark:text-neutral-950 text-xs sm:text-sm font-semibold transition shrink-0 shadow-sm"
              >
                <FaEnvelope size={12} />
                <span>Discuss a website project</span>
              </a>
            </div>
          </Card>
        </section>

        {/* 05: Professional Experience */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-text-400">05</span>
            <h2 className="text-2xl font-bold tracking-tight text-text-900">Professional Experience</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-600">
                    BGR1 • Technology Department
                  </span>
                  <h3 className="text-lg font-bold text-text-900 mt-0.5">Summer Help / IT Technician</h3>
                </div>
                <span className="text-xs font-mono px-2 py-1 rounded bg-background-200 text-text-600 border border-secondary-200/50">
                  May 2024 – Aug 2026
                </span>
              </div>

              <p className="text-sm text-text-600 leading-relaxed">
                Worked within the technology department supporting business IT operations and infrastructure. Responsibilities included:
              </p>

              <ul className="text-xs sm:text-sm text-text-600 space-y-1.5 list-disc list-inside">
                <li>Network installations and troubleshooting</li>
                <li>Computer deployments, maintenance, and hardware repairs</li>
                <li>Diagnosing hardware and software problems across departments</li>
                <li>Supporting technology infrastructure across business systems</li>
                <li>Independently researching and resolving unfamiliar technical issues</li>
              </ul>

              <p className="text-xs text-text-500 pt-3 border-t border-secondary-200 leading-relaxed">
                Although officially classified as summer help, my responsibilities grew considerably. During my final two years, I handled a substantial amount of operational work independently.
              </p>
            </Card>

            <Card className="space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-600">
                      Twin Pike Family YMCA
                    </span>
                    <h3 className="text-lg font-bold text-text-900 mt-0.5">Property & Wellness</h3>
                  </div>
                  <span className="text-xs font-mono px-2 py-1 rounded bg-background-200 text-text-600 border border-secondary-200/50">
                    Nov 2023 – Present
                  </span>
                </div>

                <p className="text-sm text-text-600 leading-relaxed">
                  Responsible for property and facility-related operations while supporting the organization's day-to-day community activities.
                </p>

                {/* Cohesive Green Spotlight Award Callout */}
                <div className="p-3.5 rounded-xl bg-primary-100/90 border border-primary-200 text-xs">
                  <span className="font-bold flex items-center gap-1.5 mb-1 text-primary-800">
                    <FaTrophy className="text-primary-600" />
                    2024 Spotlight Award Recipient
                  </span>
                  <p className="text-primary-800/85 leading-relaxed">
                    Recognized for high dedication, dependability, and consistent operational support.
                  </p>
                </div>
              </div>

              <p className="text-xs text-text-500 pt-3 border-t border-secondary-200">
                Demonstrated reliability, team communication, and accountability over years of active work.
              </p>
            </Card>
          </div>
        </section>

        {/* 06: Education & Recognition */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-text-400">06</span>
            <h2 className="text-2xl font-bold tracking-tight text-text-900">Education & Recognition</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-1 space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-text-400 flex items-center gap-1.5 mb-2">
                  <FaGraduationCap className="text-primary-600" /> Education
                </span>
                <h3 className="text-base font-bold text-text-900">
                  Missouri University of Science and Technology
                </h3>
                <p className="text-xs text-text-600 mt-1">
                  B.S. Information Science & Technology
                </p>
                <p className="text-xs text-text-500 mt-1">
                  Pursuing degree focused on computing, systems, and information technology.
                </p>
              </div>

              <div className="pt-3 border-t border-secondary-200">
                <h4 className="text-sm font-semibold text-text-900">
                  Pike-Lincoln Technical Center
                </h4>
                <p className="text-xs text-text-500 mt-1 leading-relaxed">
                  Foundational technical coursework in computer networking, programming, and automotive mechanics.
                </p>
              </div>
            </Card>

            <Card className="md:col-span-2 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-text-400 flex items-center gap-1.5 mb-2">
                <FaTrophy className="text-primary-600" /> Competitions & Accolades
              </span>

              <ul className="divide-y divide-secondary-200 text-sm">
                <li className="py-2.5 flex items-center justify-between gap-4 first:pt-0">
                  <div className="flex items-center gap-2.5">
                    <span className="p-1.5 rounded-lg bg-primary-100 text-primary-700 border border-primary-200">
                      <FaTrophy size={14} />
                    </span>
                    <div>
                      <strong className="text-text-900 font-semibold block">5th Place & National Qualifier</strong>
                      <span className="text-xs text-text-500">Missouri FBLA Coding & Programming</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-background-200 text-text-600 border border-secondary-200/50">2025</span>
                </li>

                <li className="py-2.5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <span className="p-1.5 rounded-lg bg-primary-100 text-primary-700 border border-primary-200">
                      <FaTrophy size={14} />
                    </span>
                    <div>
                      <strong className="text-text-900 font-semibold block">10th Place Nationally</strong>
                      <span className="text-xs text-text-500">FBLA Introduction to Computer Networking</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-background-200 text-text-600 border border-secondary-200/50">2024</span>
                </li>

                <li className="py-2.5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <span className="p-1.5 rounded-lg bg-primary-100 text-primary-700 border border-primary-200">
                      <FaMedal size={14} />
                    </span>
                    <div>
                      <strong className="text-text-900 font-semibold block">2nd Place Missouri State</strong>
                      <span className="text-xs text-text-500">FBLA Introduction to Computer Networking</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-background-200 text-text-600 border border-secondary-200/50">2024</span>
                </li>

                <li className="py-2.5 flex items-center justify-between gap-4 last:pb-0">
                  <div className="flex items-center gap-2.5">
                    <span className="p-1.5 rounded-lg bg-primary-100 text-primary-700 border border-primary-200">
                      <FaMedal size={14} />
                    </span>
                    <div>
                      <strong className="text-text-900 font-semibold block">3rd Place Missouri State</strong>
                      <span className="text-xs text-text-500">SkillsUSA Computer Networking</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-background-200 text-text-600 border border-secondary-200/50">2025</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* 07: Outside of Software (Automotive) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-text-400">07</span>
            <h2 className="text-2xl font-bold tracking-tight text-text-900">Outside of Software</h2>
          </div>

          <Card className="overflow-hidden p-0">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              {/* Text column */}
              <div className="p-6 sm:p-8 md:col-span-7 flex flex-col justify-between space-y-4">
                <div className="space-y-3 text-sm sm:text-base text-text-600 leading-relaxed">
                  <div className="flex items-center gap-2 text-text-900 font-bold text-lg mb-1">
                    <FaWrench className="text-primary-600" />
                    <h3>Automotive & Mechanical Systems</h3>
                  </div>

                  <p>
                    Technology isn't the only thing I enjoy learning about. I'm also interested in automotive mechanics, electrical systems, and understanding how complicated mechanical systems operate.
                  </p>

                  <p>
                    I've spent considerable time working on my own vehicles, including rebuilding an engine and diagnosing complex mechanical and electrical problems.
                  </p>

                  <p>
                    I enjoy taking things apart, understanding how they work, and learning how to fix them. That same hands-on curiosity is what initially drew me toward software development and systems engineering.
                  </p>
                </div>

                <div className="pt-4 border-t border-secondary-200 flex items-center gap-3 text-xs text-text-500 font-medium">
                  <span>Engine Rebuild</span>
                  <span>•</span>
                  <span>Electrical Diagnostics</span>
                  <span>•</span>
                  <span>Mechanical Troubleshooting</span>
                </div>
              </div>

              {/* Photo Spot Column */}
              <div className="md:col-span-5 relative min-h-[280px] sm:min-h-[320px] bg-background-200 border-t md:border-t-0 md:border-l border-secondary-200 overflow-hidden group">
                <img
                  src={automotiveImg}
                  alt="Engine rebuild and automotive mechanical work"
                  className="absolute inset-0 w-full h-full object-cover transition duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white text-xs">
                  <span className="font-semibold block">Hands-on Engine Rebuild</span>
                  <span className="text-white/80 text-[11px]">Personal mechanical & diagnostics project</span>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* 08: Contact & Let's Talk */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-text-400">08</span>
            <h2 className="text-2xl font-bold tracking-tight text-text-900">Let's Talk</h2>
          </div>

          <Card className="p-8 sm:p-10 border-primary-200 text-center max-w-3xl mx-auto space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-text-900">
                Ready to contribute to your team.
              </h3>
              <p className="text-sm sm:text-base text-text-600 leading-relaxed max-w-2xl mx-auto">
                I'm currently looking for opportunities to contribute to a technical team during{' '}
                <strong className="text-text-900">May through August 2027</strong> in software development, software engineering, IT infrastructure, or systems-related roles. I am also open to discussing custom website projects for small businesses and organizations.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="mailto:me@trents.site"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white dark:text-neutral-950 font-semibold text-sm transition shadow-sm"
              >
                <FaEnvelope size={14} />
                <span>Email me@trents.site</span>
              </a>

              <a
                href="https://github.com/trentunderscore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-background-100 hover:bg-background-200 text-text-900 font-semibold text-sm border border-secondary-200 transition shadow-sm"
              >
                <FaGithub size={16} />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/trentoncalvin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-background-100 hover:bg-background-200 text-text-900 font-semibold text-sm border border-secondary-200 transition shadow-sm"
              >
                <FaLinkedin className="text-[#0a66c2]" size={16} />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://trents.site/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-background-100 hover:bg-background-200 text-text-900 font-semibold text-sm border border-secondary-200 transition shadow-sm"
              >
                <FaFileAlt size={14} className="text-primary-600" />
                <span>Resume</span>
              </a>
            </div>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  )
}
