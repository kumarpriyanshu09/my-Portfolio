"use client"

import Image from "next/image"
import { ExternalLink, Award } from "lucide-react"
import { motion } from "framer-motion"

interface CertificateCardListProps {
  name: string
  organization: string
  badgeImage: string
  pdfLink: string
  index: number
}

export function CertificateCardList({ name, organization, badgeImage, pdfLink, index }: CertificateCardListProps) {
  return (
    <motion.div
      className="relative group overflow-hidden rounded-2xl border border-gray-800/50 bg-black/40 backdrop-blur-sm mb-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center p-4">
        {/* Certificate Badge */}
        <div className="relative w-16 h-16 bg-white rounded-xl shadow-lg overflow-hidden flex items-center justify-center flex-shrink-0 mr-4">
          <Image
            src={badgeImage || "/placeholder.svg"}
            alt={`${name} badge`}
            width={48}
            height={48}
            className="object-contain p-1"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 pointer-events-none"></div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-gray-200 leading-tight mb-1 line-clamp-1">{name}</h3>
          <div className="flex items-center text-sm text-gray-400 mb-3">
            <Award className="w-4 h-4 mr-1 opacity-60 flex-shrink-0" />
            <span className="truncate">{organization}</span>
          </div>

          {/* View Certificate Link */}
          <a
            href={pdfLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-pink-400 hover:text-pink-300 transition-colors group-hover:text-pink-300"
          >
            <span>View Certificate</span>
            <ExternalLink className="ml-2 h-4 w-4 flex-shrink-0" />
          </a>
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
    </motion.div>
  )
}
