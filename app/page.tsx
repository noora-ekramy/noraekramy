"use client"

import { useState, useEffect } from "react"
import Header from "@/components/sections/Header"
import HeroSection from "@/components/sections/HeroSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import PublicationsSection from "@/components/sections/PublicationsSection"
import ExperienceSection from "@/components/sections/ExperienceSection"
import ClientReviewsSection from "@/components/sections/ClientReviewsSection"
import BlogSection from "@/components/sections/BlogSection"
import ContactSection from "@/components/sections/ContactSection"
import Footer from "@/components/sections/Footer"
import BackgroundElements from "@/components/BackgroundElements"

export default function AIEngineerPortfolio() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 overflow-x-hidden">
      <BackgroundElements />
      <Header />
      <main className="relative">
        <HeroSection />
        <ProjectsSection />
        <PublicationsSection />
        <ExperienceSection />
        <ClientReviewsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
