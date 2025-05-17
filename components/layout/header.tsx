"use client"

import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { MainNavigation } from "@/components/organisms/main-navigation"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-center items-center p-4 md:p-6 bg-black/80 backdrop-blur-sm transition-all duration-300",
        scrolled && "shadow-md shadow-pink-500/5 bg-black/90"
      )}
    >
      <MainNavigation />
    </header>
  )
} 