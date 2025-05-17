"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin } from "lucide-react"
import { EmailModal } from "./email-modal"

interface SocialLinksProps {
  linkedinUrl: string
  githubUrl: string
  email: string
}

export function SocialLinks({ linkedinUrl, githubUrl, email }: SocialLinksProps) {
  return (
    <div className="flex justify-center items-center gap-16 sm:gap-20 md:gap-24">
      <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
        <Link
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center space-y-3 text-gray-400 hover:text-white transition-colors"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="h-7 w-7 md:h-8 md:w-8" />
          <span className="text-base">LinkedIn</span>
        </Link>
      </motion.div>

      <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
        <Link
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center space-y-3 text-gray-400 hover:text-white transition-colors"
          aria-label="GitHub Profile"
        >
          <Github className="h-7 w-7 md:h-8 md:w-8" />
          <span className="text-base">GitHub</span>
        </Link>
      </motion.div>

      <EmailModal email={email} />
    </div>
  )
}
