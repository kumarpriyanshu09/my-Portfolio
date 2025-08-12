"use client"

import { useState, useEffect, useCallback } from "react"
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

  // Optimized scroll handler with debouncing
  const handleScroll = useCallback(() => {
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

    if (currentSection !== activeSection) {
      setActiveSection(currentSection)
    }
  }, [scrolled, activeSection])

  // Debounced scroll handler
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null

    const debouncedHandleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = setTimeout(handleScroll, 16) // ~60fps
    }

    window.addEventListener("scroll", debouncedHandleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [handleScroll])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleEscape)
      return () => document.removeEventListener("keydown", handleEscape)
    }
  }, [mobileMenuOpen])

  return (
    <>
      <div className="w-full max-w-7xl flex justify-between items-center">
        <NavLink href="/" className="text-gray-200 font-bold text-xl">
          PK
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
          className="md:hidden text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-md p-1"
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
              backgroundColor: "rgb(0, 0, 0)",
              opacity: 1,
              transform: "translateZ(0)",
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
          >
            {/* Header */}
            <div
              className="sticky top-0 flex justify-between items-center p-6 border-b border-gray-800"
              style={{
                backgroundColor: "rgb(0, 0, 0)",
                opacity: 1,
                transform: "translateZ(0)",
              }}
            >
              <NavLink href="/" className="text-gray-200 font-bold text-xl" id="mobile-menu-title">
                PK
              </NavLink>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-md p-1"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col px-6 py-8" role="navigation">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  isActive={activeSection === item.href.slice(1)}
                  className="text-[32px] font-medium text-gray-300 hover:text-white py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-md"
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
