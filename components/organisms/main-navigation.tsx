"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { NavLink } from "@/components/atoms/nav-link"
import ReactDOM from "react-dom"

const navItems = [
  { href: "#about", label: "About" },
  { href: "#what-can-i-do", label: "What Can I Do" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
]

export function MainNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("")
  const [scrolled, setScrolled] = useState(false)

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  // Handle scrolling for header styling
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }

      // Determine active section based on scroll position
      const sections = navItems.map((item) => item.href.slice(1))

      let currentSection = ""
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
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
        <NavLink href="/" className="text-gray-200 font-bold text-xl hover:text-white transition-colors">
          Priyanshu Kumar
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} isActive={activeSection === item.href.slice(1)}>
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

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen &&
        typeof window !== "undefined" &&
        ReactDOM.createPortal(
          <div
            className="fixed inset-0 z-[9999] md:hidden"
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundColor: "rgb(0, 0, 0)", // Pure black
              opacity: 1, // Force full opacity
              transform: "translateZ(0)", // Promote to own compositing layer
            }}
          >
            {/* Header */}
            <div
              className="sticky top-0 flex justify-between items-center p-6 border-b border-gray-800"
              style={{
                backgroundColor: "rgb(0, 0, 0)", // Pure black for header
                opacity: 1, // Force full opacity for header
                transform: "translateZ(0)", // Promote to own compositing layer
              }}
            >
              <NavLink href="/" className="text-gray-200 font-bold text-xl">
                Priyanshu Kumar
              </NavLink>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col px-6 py-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  isActive={activeSection === item.href.slice(1)}
                  className="text-[32px] font-medium text-gray-300 hover:text-white py-3 transition-colors"
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>,
          document.body,
        )}
    </>
  )
}
