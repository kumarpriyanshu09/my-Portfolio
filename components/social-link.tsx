"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import type { ReactNode } from "react"

interface SocialLinkProps {
  href: string
  icon: ReactNode
  label: string
}

export function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center space-y-2 text-gray-400 hover:text-white transition-colors"
      >
        <span className="text-lg">{icon}</span>
        <span className="text-sm">{label}</span>
      </Link>
    </motion.div>
  )
}
