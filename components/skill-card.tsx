"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { CharacterIcon } from "./character-icon"

interface SkillCardProps {
  character?: "finn" | "lumpy" | "rick" | "simpson"
  videoSrc?: string
  title: string
  hook: string
  description: string
  index: number
}

export function SkillCard({ character, videoSrc, title, hook, description, index }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(error => console.error("Video play failed:", error));
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <motion.div
      className="relative group overflow-hidden rounded-2xl border border-gray-800 bg-[#1e1e1e] p-6 h-full flex flex-col shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -5,
        transition: { duration: 0.3 },
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mb-4 h-16 w-16">
        {videoSrc ? (
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            playsInline
            className="w-full h-full object-cover rounded"
          />
        ) : character ? (
          <CharacterIcon character={character} size={64} />
        ) : null}
      </div>
      <h3 className="text-xl font-medium text-gray-200 mb-3">{title}</h3>
      <p className="text-base font-bold text-gray-200 mb-3">{hook}</p>
      <p className="text-sm text-gray-400 leading-relaxed">{description}</p>

      {/* Gradient overlay on hover - similar to project cards */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />
    </motion.div>
  )
}
