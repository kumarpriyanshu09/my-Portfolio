"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

interface AWSCertificateProps {
  name: string
  organization: string
  date: string
  badgeId: string
}

export function AWSCertificate({ name, organization, date, badgeId }: AWSCertificateProps) {
  const [isHovered, setIsHovered] = useState(false)
  const badgeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load Credly script
    const script = document.createElement("script")
    script.src = "//cdn.credly.com/assets/utilities/embed.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl border border-gray-800 bg-[#1e1e1e] p-6 flex flex-col items-center max-w-sm mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* AWS Badge */}
      <div className="mb-6 w-full h-48 relative rounded-lg overflow-hidden bg-black/40 flex items-center justify-center">
        <div
          ref={badgeRef}
          data-iframe-width="240"
          data-iframe-height="180"
          data-share-badge-id={badgeId}
          data-share-badge-host="https://www.credly.com"
          className="w-full h-full flex items-center justify-center"
        ></div>
      </div>

      {/* Certificate Info */}
      <h3 className="text-xl font-bold text-gray-200 text-center mb-2">{name}</h3>
      <p className="text-gray-400 text-center mb-1">{organization}</p>
      <p className="text-gray-500 text-sm text-center mb-3">Issued {date}</p>

      {/* View Certificate Link */}
      <Link
        href={`https://www.credly.com/badges/${badgeId}/public_url`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 text-pink-400 hover:text-pink-300 text-sm flex items-center"
      >
        Verify Certificate <ExternalLink className="ml-1 h-3 w-3" />
      </Link>

      {/* Gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />
    </motion.div>
  )
}
