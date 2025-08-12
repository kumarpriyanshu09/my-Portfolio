"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface BadgeProps {
  name?: string
  role?: string
  badgeNumber?: string
}

export function VercelBadge({ name = "PRIYANSHU KUMAR", role = "Developer", badgeNumber = "2025" }: BadgeProps) {
  const [isHovered, setIsHovered] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height

      // Redraw on resize
      drawBadge()
    }

    // Initial resize
    resizeCanvas()

    // Add resize listener
    window.addEventListener("resize", resizeCanvas)

    // Draw the badge
    function drawBadge() {
      if (!ctx || !canvas) return

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(255, 20, 147, 0.2)")
      gradient.addColorStop(1, "rgba(128, 17, 0, 0.2)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Grid pattern
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
      ctx.lineWidth = 1

      const gridSize = 20
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Particles
      const particleCount = 50
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = Math.random() * 4 + 1

        ctx.fillStyle = "rgba(255, 255, 255, 0.2)"
        ctx.fillRect(x, y, size, size)
      }
    }

    // Animation loop
    let animationId: number

    function animate() {
      drawBadge()
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <motion.div
      className="relative rounded-xl overflow-hidden border border-gray-800 bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="relative z-10 flex items-center justify-center w-full h-full"></div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10"
        animate={{
          opacity: isHovered ? 0.8 : 0.3,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}
