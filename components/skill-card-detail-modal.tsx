"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Play, Pause } from "lucide-react"
import { useState, useRef, useEffect } from "react"

interface SkillCardDetailModalProps {
  isOpen: boolean
  onClose: () => void
  videoSrc: string
  title: string
  hook: string
  description: string
}

export function SkillCardDetailModal({
  isOpen,
  onClose,
  videoSrc,
  title,
  hook,
  description,
}: SkillCardDetailModalProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
      setIsPlaying(true)
    }
  }, [isOpen])

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-md bg-black/90 backdrop-blur-md rounded-3xl border border-gray-800/50 overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Section */}
            <div className="relative aspect-video bg-gray-900 overflow-hidden">
              <video
                ref={videoRef}
                src={videoSrc}
                className="w-full h-full object-cover"
                playsInline
                loop
                muted
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Play/Pause Overlay */}
              <button
                onClick={togglePlayPause}
                className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity"
              >
                {isPlaying ? (
                  <Pause className="w-12 h-12 text-white/80" fill="currentColor" />
                ) : (
                  <Play className="w-12 h-12 text-white/80" fill="currentColor" />
                )}
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-200 mb-2">{title}</h3>
              <p className="text-lg text-pink-400 font-medium mb-4">{hook}</p>
              <p className="text-gray-400 leading-relaxed">{description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
