"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface CertificateCardProps {
  name: string
  organization: string
  date: string
  logo: string
  badgeImage?: string
  credlyBadgeId?: string
}

export function CertificateCard({ name, organization, date, logo, badgeImage, credlyBadgeId }: CertificateCardProps) {
  return (
    <motion.div
      className="bg-black border border-gray-800 rounded-lg p-5 hover:border-gray-700 transition-colors relative group overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex flex-col items-center">
        {/* Badge Image */}
        <div className="mb-4 w-32 h-32 flex items-center justify-center">
          {credlyBadgeId ? (
            <div
              data-iframe-width="120"
              data-iframe-height="120"
              data-share-badge-id={credlyBadgeId}
              data-share-badge-host="https://www.credly.com"
            ></div>
          ) : badgeImage ? (
            <Image
              src={badgeImage || "/placeholder.svg"}
              alt={`${name} badge`}
              width={120}
              height={120}
              className="object-contain"
            />
          ) : (
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-900 flex items-center justify-center">
              <Image
                src={logo || "/placeholder.svg"}
                alt={organization}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
          )}
        </div>

        {/* Certificate Info */}
        <h3 className="text-base font-bold text-gray-200 text-center">{name}</h3>
        <p className="text-sm text-gray-400 text-center mt-1">{organization}</p>
        <p className="text-xs text-gray-500 text-center mt-1">Issued {date}</p>
      </div>

      {/* Gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
    </motion.div>
  )
}
