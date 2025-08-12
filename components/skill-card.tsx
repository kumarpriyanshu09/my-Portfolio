"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useVideoAutoplay } from "@/hooks/useVideoAutoplay"

interface SkillCardProps {
  videoSrc: string
  title: string
  hook: string
  description: string
  index: number
}

export function SkillCard({ videoSrc, title, hook, description, index }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const { videoRef, containerRef, isPlaying, playVideo } = useVideoAutoplay({
    threshold: 0.5,
    resetOnExit: true,
    preload: "auto",
  })

  useEffect(() => {
    const preloadVideo = () => {
      if (videoRef.current) {
        videoRef.current.load()
      }
    }

    preloadVideo()
  }, [])

  const handleInteraction = () => {
    if (videoRef.current) {
      if (!isPlaying) {
        videoRef.current.currentTime = 0
        videoRef.current.play().catch((error) => {
          console.log("Playback failed:", error)
        })
      }
    }
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    handleInteraction()
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleTouchStart = () => {
    setIsHovered(true)
    handleInteraction()
  }

  const handleTouchEnd = () => {
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        "relative group overflow-hidden border border-gray-800/50 bg-black/40 backdrop-blur-sm",
        // Mobile: Vertical layout with refined spacing
        "flex flex-col rounded-xl",
        // Tablet: Maintain vertical but with better proportions
        "md:flex-row md:rounded-2xl",
        // Desktop: Horizontal layout with enhanced styling
        "lg:hover:border-gray-700/70 transition-all duration-500",
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.4, ease: "easeOut" },
      }}
    >
      {/* Video Container */}
      <div
        className={cn(
          "relative bg-gray-900/50 overflow-hidden",
          // Mobile: Full width, moderate height
          "w-full h-48 rounded-t-xl",
          // Tablet: Maintain full width but increase height
          "sm:h-56",
          // Desktop: Left side, square aspect
          "md:w-2/5 md:h-auto md:aspect-square md:rounded-l-2xl md:rounded-tr-none",
          // Large desktop: Enhanced proportions
          "lg:w-1/3",
        )}
      >
        <video
          ref={videoRef}
          src={videoSrc}
          className={cn("w-full h-full object-cover transition-transform duration-700", "group-hover:scale-110")}
          tabIndex={0}
          title="Skill video"
          playsInline={true}
          loop={false}
          muted={true}
          autoPlay={true}
          preload="auto"
          poster="/assets/ui/video-placeholder.svg"
          aria-label="Skill demonstration video"
        >
          Sorry, your browser does not support embedded videos.
        </video>

        {/* Video overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content Container */}
      <div
        className={cn(
          "flex-1 flex flex-col justify-between relative",
          // Mobile: Generous padding, optimized for touch
          "p-5 space-y-3",
          // Tablet: Increased padding and spacing
          "sm:p-6 sm:space-y-4",
          // Desktop: Refined spacing and alignment
          "md:p-7 md:space-y-5",
          // Large desktop: Enhanced spacing
          "lg:p-8 lg:space-y-6",
        )}
      >
        <div className="space-y-3 md:space-y-4">
          {/* Title */}
          <h3
            className={cn(
              "font-bold text-gray-100 leading-tight tracking-tight",
              // Mobile: Readable size
              "text-xl",
              // Tablet: Slightly larger
              "sm:text-2xl",
              // Desktop: Prominent sizing
              "md:text-2xl lg:text-3xl",
            )}
          >
            {title}
          </h3>

          {/* Hook */}
          <p
            className={cn(
              "text-pink-400 font-medium leading-relaxed",
              // Mobile: Comfortable reading size
              "text-sm",
              // Tablet: Enhanced readability
              "sm:text-base",
              // Desktop: Refined sizing
              "md:text-base lg:text-lg",
            )}
          >
            {hook}
          </p>
        </div>

        {/* Description */}
        <div className="flex-1 flex items-start">
          <p
            className={cn(
              "text-gray-400 leading-relaxed transition-colors duration-300",
              "group-hover:text-gray-300",
              // Mobile: Optimized for small screens
              "text-sm",
              // Tablet: Better readability
              "sm:text-sm",
              // Desktop: Refined typography
              "md:text-sm lg:text-base",
              // Enhanced line height for better readability
              "leading-6 md:leading-7",
            )}
          >
            {description}
          </p>
        </div>

        {/* Subtle accent line */}
        <motion.div
          className="h-px bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
        />
      </div>

      {/* Enhanced hover overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />

      {/* Subtle border glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl md:rounded-2xl border border-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />
    </motion.div>
  )
}
