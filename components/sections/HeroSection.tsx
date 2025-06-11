"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Zap,
  Database,
  Cpu,
  Network,
  Download,
} from "lucide-react"

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
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/50 via-indigo-950/30 to-blue-950/50"></div>

      <div className="container px-4 md:px-6 relative z-10 mx-auto">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center justify-center max-w-7xl mx-auto">
          <div className="space-y-10 animate-fade-in-up text-center lg:text-left">
            <div className="space-y-6">
              <Badge
                variant="secondary"
                className="w-fit mx-auto lg:mx-0 bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2 text-sm font-medium hover:bg-purple-500/30 transition-colors cursor-default"
              >
                <Zap className="w-4 h-4 mr-2" />
                AI Engineer & Researcher
              </Badge>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                <span className="text-white">Building the</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                  Future with AI
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 max-w-[600px] leading-relaxed mx-auto lg:mx-0">
                Passionate AI engineer specializing in machine learning, deep learning, and cutting-edge AI
                research. Transforming complex problems into intelligent solutions that make a real-world impact.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link href="#projects">
                <Button
                  size="lg"
                  className="text-lg px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                >
                  <span className="flex items-center">
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Button>
              </Link>

              <Link href="/files/Nora-Ekramy-Mohammed-FlowCV-Resume-20250517.pdf" download="Nora-Ekramy-Resume.pdf">
                <Button
                  size="lg"
                  className="text-lg px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 border-2 border-slate-500/50 hover:border-slate-400/70 text-white shadow-xl shadow-slate-500/20 hover:shadow-slate-500/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                >
                  <span className="flex items-center">
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </span>
                </Button>
              </Link>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4">
              {[
                { icon: Github, href: "https://github.com/noora-ekramy", color: "hover:text-purple-400", title: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/nora-ekramy-89b2681b4", color: "hover:text-blue-400", title: "LinkedIn" },
                { icon: KaggleIcon, href: "https://www.kaggle.com/noraekramy", color: "hover:text-cyan-400", title: "Kaggle" },
                { icon: Mail, href: "mailto:nora@youtiva.com", color: "hover:text-indigo-400", title: "Email" },
              ].map(({ icon: Icon, href, color, title }, index) => (
                <Link
                  key={index}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : "_blank"}
                  rel={href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                  className={`text-gray-400 ${color} transition-all duration-300 hover:scale-125 hover:-translate-y-1`}
                  title={title}
                >
                  <Icon className="h-7 w-7" />
                </Link>
              ))}
            </div>
          </div>

          {/* Revolutionary Photo Integration */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Enhanced dynamic background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 to-blue-500/40 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-indigo-600/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-purple-600/20 rounded-full blur-xl animate-pulse delay-500"></div>

              {/* Enhanced orbital rings */}
              <div className="absolute inset-0 rounded-full border border-purple-500/30 animate-spin-slow"></div>
              <div className="absolute inset-4 rounded-full border border-blue-500/30 animate-spin-slow-reverse"></div>
              <div className="absolute inset-8 rounded-full border border-cyan-500/20 animate-spin-slow delay-1000"></div>

              {/* Main photo container with enhanced integration */}
              <div className="relative z-20 transform hover:scale-105 transition-transform duration-700 group">
                {/* Multi-layered seamless gradient integration */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/25 via-blue-500/15 to-cyan-500/25 rounded-3xl mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-transparent to-violet-500/20 rounded-3xl mix-blend-soft-light"></div>

                {/* Enhanced glow effect behind image */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-blue-400/30 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500"></div>

                <Image
                  src="/images/profile-enhanced.png"
                  alt="Nora Ekramy - AI Engineer"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover relative z-10 filter contrast-115 brightness-110 saturate-110 drop-shadow-2xl"
                  priority
                />

                {/* Subtle color enhancement overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-blue-500/10 rounded-3xl z-20 pointer-events-none"></div>
              </div>

              {/* Enhanced interactive floating elements */}
              <div className="absolute -top-10 -right-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 bg-gradient-to-br from-purple-500/50 to-purple-600/50 rounded-3xl flex items-center justify-center backdrop-blur-md border border-purple-400/60 shadow-2xl shadow-purple-500/40 hover:scale-110 hover:rotate-12 transition-all duration-500 cursor-pointer group">
                <Brain className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16 text-purple-100 group-hover:text-white transition-colors" />
                <div className="absolute inset-0 bg-purple-400/30 rounded-3xl animate-ping"></div>
              </div>

              <div className="absolute -bottom-10 -left-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 bg-gradient-to-br from-blue-500/50 to-blue-600/50 rounded-3xl flex items-center justify-center backdrop-blur-md border border-blue-400/60 shadow-2xl shadow-blue-500/40 hover:scale-110 hover:rotate-12 transition-all duration-500 cursor-pointer group">
                <Cpu className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16 text-blue-100 group-hover:text-white transition-colors" />
                <div className="absolute inset-0 bg-blue-400/30 rounded-3xl animate-ping delay-500"></div>
              </div>

              <div className="absolute top-1/2 -right-14 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 bg-gradient-to-br from-cyan-500/40 to-cyan-600/40 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-cyan-400/50 shadow-xl shadow-cyan-500/30 hover:scale-110 hover:rotate-6 transition-all duration-500 cursor-pointer">
                <Network className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 text-cyan-200" />
              </div>

              <div className="absolute top-1/4 -left-14 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 bg-gradient-to-br from-indigo-500/40 to-indigo-600/40 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-indigo-400/50 shadow-xl shadow-indigo-500/30 hover:scale-110 hover:rotate-6 transition-all duration-500 cursor-pointer">
                <Database className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 text-indigo-200" />
              </div>

              <div className="absolute bottom-1/4 -right-8 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 bg-gradient-to-br from-violet-500/30 to-violet-600/30 rounded-xl flex items-center justify-center backdrop-blur-sm border border-violet-400/40 shadow-lg shadow-violet-500/20 hover:scale-110 transition-all duration-500 cursor-pointer">
                <Zap className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-9 xl:w-9 text-violet-200" />
              </div>

              {/* Enhanced animated particles */}
              <div className="absolute top-1/4 right-1/4 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-purple-400 rounded-full animate-bounce delay-300 shadow-lg shadow-purple-400/50"></div>
              <div className="absolute bottom-1/4 left-1/3 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 bg-blue-400 rounded-full animate-bounce delay-700 shadow-lg shadow-blue-400/50"></div>
              <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-cyan-400 rounded-full animate-bounce delay-1000 shadow-lg shadow-cyan-400/50"></div>
              <div className="absolute top-1/3 left-1/4 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-indigo-400 rounded-full animate-bounce delay-1300 shadow-lg shadow-indigo-400/50"></div>

              {/* Connecting energy lines */}
              <div className="absolute top-1/3 right-0 w-32 h-px bg-gradient-to-r from-purple-400/60 to-transparent animate-pulse"></div>
              <div className="absolute bottom-1/3 left-0 w-32 h-px bg-gradient-to-l from-blue-400/60 to-transparent animate-pulse delay-500"></div>
              <div className="absolute top-2/3 right-1/4 w-20 h-px bg-gradient-to-r from-cyan-400/40 to-transparent rotate-45 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/60" />
      </div>
    </section>
  )
} 