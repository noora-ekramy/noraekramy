"use client"

import { Button } from "@/components/ui/button"
import { Brain, ArrowRight, Menu, X, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// Custom Kaggle icon component since it's not in lucide-react
const KaggleIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.336"/>
  </svg>
)

// Custom ResearchGate icon component
const ResearchGateIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.586 0H4.414A4.414 4.414 0 0 0 0 4.414v15.172A4.414 4.414 0 0 0 4.414 24h15.172A4.414 4.414 0 0 0 24 19.586V4.414A4.414 4.414 0 0 0 19.586 0zM8 19a1 1 0 0 1-2 0v-5.5a1 1 0 0 1 2 0zm-.5-7.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9.5 7.5a1 1 0 0 1-2 0v-2.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5V19a1 1 0 0 1-2 0v-2.5c0-2.48 2.02-4.5 4.5-4.5s4.5 2.02 4.5 4.5z"/>
  </svg>
)

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/60">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6 mx-auto">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 group-hover:scale-110 transition-transform">
              <Brain className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" />
            </div>
          </div>
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Nora Ekramy
            </span>
            <p className="text-xs text-gray-400">AI Engineer & Researcher</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["About", "Projects", "Publications", "Experience", "Blog"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Enhanced CTA Button and Social Links */}
        <div className="flex items-center space-x-4">
          {/* Social Links - Desktop Only */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="https://github.com/noora-ekramy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-125"
              title="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/nora-ekramy-89b2681b4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125"
              title="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.kaggle.com/noraekramy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-125"
              title="Kaggle"
            >
              <KaggleIcon className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:nora@youtiva.com"
              className="text-gray-400 hover:text-indigo-400 transition-all duration-300 hover:scale-125"
              title="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>

          <Link href="mailto:nora@youtiva.com">
            <Button className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105">
              <span className="relative z-10 flex items-center">
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </Link>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl">
          <nav className="container px-4 py-4 space-y-3 mx-auto">
            {["About", "Projects", "Publications", "Experience", "Blog"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            
            {/* Mobile Social Links */}
            <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
              <Link
                href="https://github.com/noora-ekramy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-all duration-300"
                title="GitHub"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/nora-ekramy-89b2681b4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300"
                title="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.kaggle.com/noraekramy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300"
                title="Kaggle"
              >
                <KaggleIcon className="h-6 w-6" />
              </Link>
              <Link
                href="mailto:nora@youtiva.com"
                className="text-gray-400 hover:text-indigo-400 transition-all duration-300"
                title="Email"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
} 