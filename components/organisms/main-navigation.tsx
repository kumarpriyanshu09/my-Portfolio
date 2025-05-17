"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { NavLink } from "@/components/atoms/nav-link"

const navItems = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#about", label: "About" },
  { href: "#contact-links", label: "Contact" },
]

export function MainNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("")
  const [scrolled, setScrolled] = useState(false)

  // Handle scrolling for header styling
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }

      // Determine active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1)) // Remove the # from href
      
      let currentSection = ""
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Add some offset to make sure we trigger slightly before reaching the section
          if (rect.top <= 150) {
            currentSection = section
          }
        }
      }
      
      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  return (
    <>
      <div className="w-full max-w-7xl flex justify-between items-center">
        <NavLink href="/" className="text-gray-200 font-bold text-xl">PK</NavLink>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm">
          {navItems.map((item) => (
            <NavLink 
              key={item.href}
              href={item.href}
              isActive={activeSection === item.href.slice(1)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-black/95 md:hidden">
          <nav className="flex flex-col items-center pt-10 space-y-6 text-lg">
            {navItems.map((item) => (
              <NavLink 
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                isActive={activeSection === item.href.slice(1)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </>
  )
} 