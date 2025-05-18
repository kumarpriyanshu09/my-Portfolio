"use client"

import Link from "next/link"
import { SectionLayout } from "@/components/templates/section-layout"
import { Linkedin, Github, Mail } from "lucide-react"
import { motion } from "framer-motion"

const CONTACTS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kumarpriyanshu09/",
    icon: Linkedin,
    aria: "Visit my LinkedIn profile"
  },
  {
    label: "GitHub",
    href: "https://github.com/kumarpriyanshu09",
    icon: Github,
    aria: "Visit my GitHub profile"
  }
]

export function GetInTouchSection() {
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.open("mailto:kumarpriyanshu09@gmail.com?subject=Let's%20Connect", "_blank")
  }

  return (
    <SectionLayout id="contact">
      <div className="relative z-20 max-w-3xl mx-auto px-4 py-20">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 text-gray-200 tracking-tighter">
          Get in Touch
        </h2>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-lg text-gray-400 mb-8">
            I'm always open to connecting! Reach out via:
          </p>
          <div className="flex justify-center gap-16 mt-12">
            {CONTACTS.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={contact.aria}
                className="group flex flex-col items-center gap-3"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 group-hover:text-white transition-colors"
                >
                  <contact.icon className="w-16 h-16" />
                </motion.div>
                <span className="text-gray-400 group-hover:text-white transition-colors text-sm font-medium">
                  {contact.label}
                </span>
              </a>
            ))}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEmailClick}
              aria-label="Send me an email"
              className="group flex flex-col items-center gap-3 bg-transparent border-none p-0"
            >
              <div className="text-gray-400 group-hover:text-white transition-colors">
                <Mail className="w-16 h-16" />
              </div>
              <span className="text-gray-400 group-hover:text-white transition-colors text-sm font-medium">
                Email
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
} 