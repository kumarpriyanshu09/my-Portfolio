"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useVideoAutoplay } from "@/hooks/useVideoAutoplay"

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
  const { videoRef, containerRef } = useVideoAutoplay({
    threshold: 0.1,
    resetOnExit: false,
    preload: "auto",
  })

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-x-4 top-20 bottom-20 bg-black/90 backdrop-blur-md border border-gray-800/50 rounded-2xl z-50 overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-900/80 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Content */}
            <div className="h-full flex flex-col">
              {/* Video */}
              <div ref={containerRef} className="relative h-48 bg-gray-900 overflow-hidden">
                <video
                  ref={videoRef}
                  src={videoSrc}
                  className="w-full h-full object-cover"
                  playsInline
                  loop
                  muted
                  autoPlay
                  controls
                />
              </div>

              {/* Details */}
              <div className="flex-1 p-6 overflow-y-auto">
                <h2 className="text-2xl font-bold text-gray-200 mb-2">{title}</h2>
                <p className="text-lg text-pink-400 font-medium mb-4">{hook}</p>
                <p className="text-gray-400 leading-relaxed">{description}</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
