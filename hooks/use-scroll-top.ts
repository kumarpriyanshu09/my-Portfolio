"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function useScrollTop() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant" as ScrollBehavior, // Using "instant" instead of "smooth" for initial load
    })
  }, [pathname])
}
