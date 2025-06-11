import { Brain, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

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

export default function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/noora-ekramy",
      title: "GitHub",
      hoverColor: "hover:text-purple-400"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/nora-ekramy-89b2681b4",
      title: "LinkedIn",
      hoverColor: "hover:text-blue-400"
    },
    {
      icon: KaggleIcon,
      href: "https://www.kaggle.com/noraekramy",
      title: "Kaggle",
      hoverColor: "hover:text-cyan-400"
    },
    {
      icon: Mail,
      href: "mailto:nora@youtiva.com",
      title: "Email",
      hoverColor: "hover:text-indigo-400"
    }
  ]

  return (
    <footer className="bg-slate-950 text-white py-20 border-t border-slate-800 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-600">
                <Brain className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Nora Ekramy
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              AI & Machine Learning Engineer | CTO at Youtive. Experienced in AI-driven solutions, optimizing models and developing innovative AI systems.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? undefined : "_blank"}
                  rel={social.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                  className={`text-gray-400 ${social.hoverColor} transition-all duration-300 hover:scale-125 hover:-translate-y-1`}
                  title={social.title}
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>

          {[
            { 
              title: "Quick Links", 
              links: [
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Publications", href: "#publications" },
                { name: "Experience", href: "#experience" }
              ]
            },
            { 
              title: "Resources", 
              links: [
                { name: "Blog", href: "#blog" },
                { name: "GitHub", href: "https://github.com/noora-ekramy" },
                { name: "Kaggle", href: "https://www.kaggle.com/noraekramy" },
                { name: "ResearchGate", href: "https://www.researchgate.net/profile/Nora-Ekramy" },
                { name: "LinkedIn", href: "https://www.linkedin.com/in/nora-ekramy-89b2681b4" }
              ]
            },
            { 
              title: "Contact", 
              links: [
                { name: "Email Me", href: "mailto:nora@youtiva.com" },
                { name: "LinkedIn", href: "https://www.linkedin.com/in/nora-ekramy-89b2681b4" },
                { name: "GitHub", href: "https://github.com/noora-ekramy" },
                { name: "ResearchGate", href: "https://www.researchgate.net/profile/Nora-Ekramy" },
                { name: "Kaggle", href: "https://www.kaggle.com/noraekramy" }
              ]
            },
          ].map((section, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              <div className="space-y-3">
                {section.links.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    target={link.href.startsWith('http') ? "_blank" : undefined}
                    rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Nora Ekramy. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link 
              href="mailto:nora@youtiva.com" 
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Contact
            </Link>
            <Link 
              href="https://www.linkedin.com/in/nora-ekramy-89b2681b4" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 