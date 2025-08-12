"use client"

import { cn } from "@/lib/utils"
import { useRef, useState, useEffect } from "react"

interface SpotlightProps {
  className?: string
  fill?: string
}

export function Spotlight({ className, fill = "rgba(120, 119, 198, 0.15)" }: SpotlightProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: MouseEvent) => {
    if (!divRef.current) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  useEffect(() => {
    const div = divRef.current
    if (!div) return

    div.addEventListener("mousemove", handleMouseMove)
    div.addEventListener("mouseenter", handleMouseEnter)
    div.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      div.removeEventListener("mousemove", handleMouseMove)
      div.removeEventListener("mouseenter", handleMouseEnter)
      div.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div ref={divRef} className={cn("fixed inset-0 pointer-events-none", className)}>
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${fill}, transparent 40%)`,
        }}
      />
    </div>
  )
}
