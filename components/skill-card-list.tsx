"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight, Play } from "lucide-react"
import { useVideoAutoplay } from "@/hooks/useVideoAutoplay"

interface SkillCardListProps {
  videoSrc: string
  title: string
  hook: string
  description: string
  index: number
  onExpand?: () => void
}

export function SkillCardList({ videoSrc, title, hook, description, index, onExpand }: SkillCardListProps) {
  const [isHovered, setIsHovered] = useState(false)

  const { videoRef, containerRef, isPlaying } = useVideoAutoplay({
    threshold: 0.3,
    resetOnExit: true,
    preload: "metadata",
  })

  return (
    <motion.div
      ref={containerRef}
      className="relative group overflow-hidden rounded-2xl border border-gray-800/50 bg-black/40 backdrop-blur-sm mb-4 cursor-pointer"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onExpand}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div className="flex items-center p-4">
        {/* Video Thumbnail - Fixed Aspect Ratio */}
        <div className="relative w-20 h-20 bg-gray-900/50 rounded-xl overflow-hidden flex-shrink-0 mr-4">
          <video
            ref={videoRef}
            src={videoSrc}
            className="w-full h-full object-cover"
            style={{
              aspectRatio: "1/1",
              objectFit: "cover",
              objectPosition: "center center",
            }}
            playsInline
            loop
            muted
            autoPlay
            preload="metadata"
          />

          {/* Play indicator overlay */}
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Play className="w-6 h-6 text-white/80" fill="currentColor" />
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 pr-2">
          <h3 className="text-lg font-bold text-gray-200 leading-tight mb-1 truncate">{title}</h3>
          <p className="text-sm text-pink-400 font-medium mb-2 line-clamp-1">{hook}</p>
          <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">{description}</p>
        </div>

        {/* Arrow indicator */}
        <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-pink-400 transition-colors flex-shrink-0" />
      </div>

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        animate={{ opacity: isHovered ? 1 : 0 }}
      />
    </motion.div>
  )
}
