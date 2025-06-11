import { Button } from "@/components/ui/button"
import { Mail, Calendar } from "lucide-react"
import Link from "next/link"

export default function ContactSection() {
  return (
    <section className="py-32 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30"></div>
      <div className="container px-4 md:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Let's Build the Future Together
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Interested in collaboration, research opportunities, or discussing AI innovations? I'd love to connect
            and explore how we can work together to create something amazing.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="mailto:nora@youtiva.com">
              <Button
                size="lg"
                className="text-lg px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                <span className="flex items-center">
                  Get In Touch
                  <Mail className="ml-2 h-5 w-5" />
                </span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/nora-ekramy-89b2681b4" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="text-lg px-10 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 border-2 border-cyan-500/50 hover:border-cyan-400/70 text-white shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                <span className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 