"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

interface PDFCertificateProps {
  name: string
  organization: string
  date: string
  score?: string
  completionId?: string
  thumbnailSrc: string
  pdfSrc?: string
}

export function PDFCertificate({
  name,
  organization,
  date,
  score,
  completionId,
  thumbnailSrc,
  pdfSrc,
}: PDFCertificateProps) {
  const [isHovered, setIsHovered] = useState(false)

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
      {/* Certificate Thumbnail */}
      <div className="mb-6 w-full h-48 relative rounded-lg overflow-hidden bg-black/40 flex items-center justify-center">
        <Image
          src={thumbnailSrc || "/placeholder.svg"}
          alt={`${name} certificate`}
          width={240}
          height={180}
          className="object-contain max-h-full"
        />
      </div>

      {/* Certificate Info */}
      <h3 className="text-xl font-bold text-gray-200 text-center mb-2">{name}</h3>
      <p className="text-gray-400 text-center mb-1">{organization}</p>
      <p className="text-gray-500 text-sm text-center mb-3">Issued {date}</p>

      {score && (
        <p className="text-gray-400 text-sm text-center mb-1">
          Score: <span className="text-pink-400">{score}</span>
        </p>
      )}

      {completionId && <p className="text-gray-500 text-xs text-center mb-3">Completion ID: {completionId}</p>}

      {/* View Certificate Link */}
      {pdfSrc && (
        <Link
          href={pdfSrc}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-pink-400 hover:text-pink-300 text-sm flex items-center"
        >
          View Certificate <ExternalLink className="ml-1 h-3 w-3" />
        </Link>
      )}

      {/* Gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />
    </motion.div>
  )
}
