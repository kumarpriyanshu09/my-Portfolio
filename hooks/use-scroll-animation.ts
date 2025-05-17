"use client"

import { useEffect, useState, RefObject } from "react"

interface ScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
}

export function useScrollAnimation<T extends HTMLElement>(
  ref: RefObject<T>,
  options: ScrollAnimationOptions = {}
): boolean {
  const [isVisible, setIsVisible] = useState(false)
  const { threshold = 0.1, rootMargin = "0px" } = options

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    const currentRef = ref.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [ref, threshold, rootMargin, isVisible])

  return isVisible
} 