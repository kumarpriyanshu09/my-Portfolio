"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface CertificateCardProps {
  name: string
  organization: string
  // date: string; // Keeping it optional for now as per user's simplified request
  badgeImage: string // This will be for aws-logo.png, jira-logo.png
  pdfLink: string // Link to the actual PDF certificate
  className?: string
}

export function CertificateCard({
  name,
  organization,
  badgeImage,
  pdfLink,
  className,
}: CertificateCardProps) {
  return (
    <motion.div
      className={cn(
        "relative group overflow-hidden rounded-lg border border-gray-800 bg-black p-6 h-full flex flex-col items-center text-center justify-between w-full max-w-md",
        className
      )}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Badge Image */}
      <div className="mb-5 w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center p-2 bg-muted/30 rounded-lg shadow-inner overflow-hidden">
        <Image
          src={badgeImage}
          alt={`${name} badge`}
          width={100}
          height={100}
          className="object-contain"
        />
      </div>

      {/* Certificate Info */}
      <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1">{name}</h3>
      <p className="text-sm text-muted-foreground mb-4">{organization}</p>

      {/* Link to PDF */}
      <a
        href={pdfLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
      >
        View Certificate
        <ExternalLink className="w-4 h-4" />
      </a>

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  )
}
