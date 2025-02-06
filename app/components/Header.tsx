import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg fixed top-0 left-0 right-0 z-10">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-6 overflow-x-auto">
          <li>
            <Link href="#experience" className="text-gray-200 hover:text-white transition-colors whitespace-nowrap">
              Experience
            </Link>
          </li>
          <li>
            <Link href="#education" className="text-gray-200 hover:text-white transition-colors whitespace-nowrap">
              Education
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-gray-200 hover:text-white transition-colors whitespace-nowrap">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#skills" className="text-gray-200 hover:text-white transition-colors whitespace-nowrap">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#certifications" className="text-gray-200 hover:text-white transition-colors whitespace-nowrap">
              Certifications
            </Link>
          </li>
          <li>
            <Link href="#achievements" className="text-gray-200 hover:text-white transition-colors whitespace-nowrap">
              Achievements
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-gray-200 hover:text-white transition-colors whitespace-nowrap">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

