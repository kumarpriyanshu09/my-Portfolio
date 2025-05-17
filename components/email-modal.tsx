"use client"

import { useState } from "react"
import { Mail, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

interface EmailModalProps {
  email: string
}

export function EmailModal({ email }: EmailModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`
  }

  return (
    <>
      <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
        <button
          onClick={openModal}
          className="flex flex-col items-center space-y-3 text-gray-400 hover:text-white transition-colors"
          aria-label="Open email contact modal"
        >
          <Mail className="h-7 w-7 md:h-8 md:w-8" />
          <span className="text-base">Email</span>
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              onClick={closeModal}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[calc(100%-2rem)] max-w-md"
            >
              <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-xl p-5 md:p-6">
                <div className="flex justify-between items-center mb-5">
                  <h3 className="text-xl font-semibold text-gray-200">Contact Email</h3>
                  <button onClick={closeModal} className="text-gray-400 hover:text-white p-1" aria-label="Close modal">
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="text-center mb-6">
                  <p className="text-gray-400 mb-3">Feel free to reach out via email:</p>
                  <button
                    onClick={handleEmailClick}
                    className="text-pink-400 hover:text-pink-300 font-medium text-lg transition-colors break-all px-2 py-1"
                  >
                    {email}
                  </button>
                </div>
                <div className="flex justify-end">
                  <Button variant="outline" onClick={closeModal}>
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
