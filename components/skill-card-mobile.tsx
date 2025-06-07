"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useVideoAutoplay } from "@/hooks/useVideoAutoplay"

interface SkillCardMobileProps {
  videoSrc: string
  title: string
  hook: string
  description: string
  index: number
  onExpand?: () => void
}

export function SkillCardMobile({ videoSrc, title, hook, description, index, onExpand }: SkillCardMobileProps) {
  const [isHovered, setIsHovered] = useState(false)

  const { videoRef, containerRef, isPlaying } = useVideoAutoplay({
    threshold: 0.3,
    resetOnExit: true,
    preload: "metadata",
  })

  return (
    <motion.div
      ref={containerRef}
      className="relative group overflow-hidden rounded-xl border border-gray-800/50 bg-black/40 backdrop-blur-sm h-44 cursor-pointer"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onExpand}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      {/* Compact Video Container */}
      <div className="relative w-full h-20 bg-gray-900/50 overflow-hidden">
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-full h-full object-cover object-center"
          playsInline
          loop
          muted
          autoPlay
          preload="metadata"
          style={{
            aspectRatio: "16/9",
            objectPosition: "center center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Compact Content */}
      <div className="p-3 h-24 flex flex-col justify-between">
        <div>
          <h3 className="text-sm font-bold text-gray-200 leading-tight mb-1 line-clamp-1">{title}</h3>
          <p className="text-xs text-pink-400 font-medium line-clamp-1">{hook}</p>
        </div>

        {/* Tap indicator */}
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-500">Tap for details</div>
          <div className="w-1 h-1 bg-pink-500 rounded-full opacity-60" />
        </div>
      </div>

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-active:opacity-100 transition-opacity duration-200"
        animate={{ opacity: isHovered ? 1 : 0 }}
      />
    </motion.div>
  )
}
