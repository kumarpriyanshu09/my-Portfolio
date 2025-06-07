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
            className="relative w-full max-w-lg bg-black backdrop-blur-md rounded-3xl border border-gray-800/50 overflow-hidden max-h-[90vh] shadow-2xl"
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

            {/* Video Section - Seamless Black Background */}
            <div className="relative w-full bg-black" style={{ aspectRatio: "16/9" }}>
              <div className="absolute inset-0 bg-black flex items-center justify-center overflow-hidden rounded-t-3xl">
                <video
                  ref={videoRef}
                  src={videoSrc}
                  className="w-full h-full object-cover"
                  playsInline
                  loop
                  muted
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  style={{
                    objectPosition: "center",
                    backgroundColor: "black",
                  }}
                />

                {/* Play/Pause Overlay */}
                <button
                  onClick={togglePlayPause}
                  className="absolute inset-0 flex items-center justify-center bg-transparent opacity-0 hover:opacity-100 transition-opacity"
                >
                  <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-white/90" fill="currentColor" />
                    ) : (
                      <Play className="w-8 h-8 text-white/90 ml-1" fill="currentColor" />
                    )}
                  </div>
                </button>
              </div>
            </div>

            {/* Content - Scrollable */}
            <div className="p-6 max-h-60 overflow-y-auto">
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
