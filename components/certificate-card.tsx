"use client"

import Image from "next/image"
import { ExternalLink, Award } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface CertificateCardProps {
  name: string
  organization: string
  badgeImage: string
  pdfLink: string
  className?: string
}

export function CertificateCard({ name, organization, badgeImage, pdfLink, className }: CertificateCardProps) {
  return (
    <motion.div
      className={cn(
        "relative group overflow-hidden rounded-2xl border border-gray-800/50 bg-black/40 backdrop-blur-sm p-4 sm:p-6 h-full flex flex-col justify-between hover:border-pink-500/30 transition-all duration-300",
        className,
      )}
      whileHover={{ y: -3, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Mobile-Optimized Badge */}
      <div className="flex items-center justify-center mb-4">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl shadow-lg overflow-hidden flex items-center justify-center">
          <Image
            src={badgeImage || "/placeholder.svg"}
            alt={`${name} badge`}
            width={80}
            height={80}
            className="object-contain p-2"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 pointer-events-none"></div>
        </div>
      </div>

      {/* Certificate Info - Compact */}
      <div className="text-center mb-4 flex-1">
        <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 leading-tight">{name}</h3>
        <div className="flex items-center justify-center text-sm text-muted-foreground mb-3">
          <Award className="w-4 h-4 mr-1 opacity-60" />
          <span>{organization}</span>
        </div>
      </div>

      {/* CTA Button - Mobile Optimized */}
      <a
        href={pdfLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:ring-offset-2 focus:ring-offset-black group-hover:shadow-lg group-hover:shadow-pink-500/25"
      >
        <span>View Certificate</span>
        <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
      </a>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
    </motion.div>
  )
}
