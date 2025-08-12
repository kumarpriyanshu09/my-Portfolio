"use client"

import type React from "react"
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
  const [videoError, setVideoError] = useState(false)
  const [userInteracted, setUserInteracted] = useState(false)

  const { videoRef, containerRef, isPlaying, playVideo } = useVideoAutoplay({
    threshold: 0.5,
    resetOnExit: true,
    preload: "metadata", // Changed from "auto" for better performance
  })

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleError = () => {
      console.warn(`Video failed to load: ${videoSrc}`)
      setVideoError(true)
    }

    const handleLoadedData = () => {
      setVideoError(false)
    }

    video.addEventListener("error", handleError)
    video.addEventListener("loadeddata", handleLoadedData)

    return () => {
      video.removeEventListener("error", handleError)
      video.removeEventListener("loadeddata", handleLoadedData)
    }
  }, [videoSrc])

  const handleInteraction = () => {
    if (videoRef.current && !videoError) {
      setUserInteracted(true)
      if (!isPlaying) {
        videoRef.current.currentTime = 0
        videoRef.current.play().catch((error) => {
          console.warn("Video playback failed:", error)
          setVideoError(true)
        })
      }
    }
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (userInteracted) {
      handleInteraction()
    }
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      handleInteraction()
    }
  }

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        "relative group overflow-hidden border border-gray-800/50 bg-black/40 backdrop-blur-sm",
        "flex flex-col rounded-xl",
        "md:flex-row md:rounded-2xl",
        "lg:hover:border-gray-700/70 transition-all duration-500",
        "focus-within:ring-2 focus-within:ring-pink-500/50",
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
      tabIndex={0}
      onKeyDown={handleKeyDown}
      role="button"
      aria-label={`${title} skill demonstration`}
    >
      {/* Video Container */}
      <div
        className={cn(
          "relative bg-gray-900/50 overflow-hidden",
          "w-full h-48 rounded-t-xl",
          "sm:h-56",
          "md:w-2/5 md:h-auto md:aspect-square md:rounded-l-2xl md:rounded-tr-none",
          "lg:w-1/3",
        )}
      >
        {!videoError ? (
          <video
            ref={videoRef}
            src={videoSrc}
            className={cn("w-full h-full object-cover transition-transform duration-700", "group-hover:scale-110")}
            title={`${title} demonstration video`}
            playsInline={true}
            loop={false}
            muted={true}
            preload="metadata"
            poster="/assets/ui/video-placeholder.svg"
            aria-label={`Video demonstration of ${title}`}
            controls={userInteracted} // Show controls after user interaction
          >
            <track kind="captions" srcLang="en" label="English" />
            Sorry, your browser does not support embedded videos.
          </video>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-400">
            <div className="text-center">
              <div className="text-2xl mb-2">📹</div>
              <div className="text-sm">Video unavailable</div>
            </div>
          </div>
        )}

        {/* Video overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content Container */}
      <div
        className={cn(
          "flex-1 flex flex-col justify-between relative",
          "p-5 space-y-3",
          "sm:p-6 sm:space-y-4",
          "md:p-7 md:space-y-5",
          "lg:p-8 lg:space-y-6",
        )}
      >
        <div className="space-y-3 md:space-y-4">
          {/* Title */}
          <h3
            className={cn(
              "font-bold text-gray-100 leading-tight tracking-tight",
              "text-xl",
              "sm:text-2xl",
              "md:text-2xl lg:text-3xl",
            )}
          >
            {title}
          </h3>

          {/* Hook */}
          <p
            className={cn(
              "text-pink-400 font-medium leading-relaxed",
              "text-sm",
              "sm:text-base",
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
              "text-sm",
              "sm:text-sm",
              "md:text-sm lg:text-base",
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
