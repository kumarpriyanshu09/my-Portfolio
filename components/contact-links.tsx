"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin } from "lucide-react"
import { AnimatedText } from "@/components/animated-text"

export function ContactLinks() {
  return (
    <section id="contact-links" className="py-20 px-4 md:px-10 max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-200 tracking-tighter mb-10">
        <AnimatedText text="Get In Touch" />
      </h2>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10">
        <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
          <Link
            href="mailto:priyanshu.k09@icloud.com"
            className="flex items-center gap-3 text-lg text-gray-400 hover:text-pink-400 transition-colors"
            aria-label="Send email to priyanshu.k09@icloud.com"
          >
            <Mail className="h-7 w-7" />
            <span>Email Me</span>
          </Link>
        </motion.div>
        
        <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
          <Link
            href="https://www.linkedin.com/in/kumarpriyanshu09/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg text-gray-400 hover:text-blue-400 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-7 w-7" />
            <span>LinkedIn</span>
          </Link>
        </motion.div>
        
        <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
          <Link
            href="https://github.com/kumarpriyanshu09"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg text-gray-400 hover:text-gray-200 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="h-7 w-7" />
            <span>GitHub</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 