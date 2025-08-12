"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import type { Project } from "@/lib/types"

interface ProjectCardMobileProps extends Project {
  index: number
}

export function ProjectCardMobile({
  title,
  description,
  technologies,
  href,
  callToAction,
  index,
}: ProjectCardMobileProps) {
  const isExternal = href?.startsWith("http")
  const displayTechs = technologies.slice(0, 3)
  const remainingCount = technologies.length - 3

  return (
    <motion.div
      className="relative group overflow-hidden rounded-xl border border-gray-800/50 bg-black/40 backdrop-blur-sm p-4 h-40"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="h-full flex flex-col justify-between">
        {/* Header */}
        <div>
          <h3 className="text-sm font-bold text-gray-200 leading-tight mb-2 line-clamp-2">{title}</h3>
          <p className="text-xs text-gray-400 line-clamp-2 mb-3">{description}</p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1 mb-3">
          {displayTechs.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="text-xs px-1.5 py-0.5 rounded bg-gray-800/50 text-gray-400 border border-gray-700/50"
            >
              {tech}
            </span>
          ))}
          {remainingCount > 0 && (
            <span className="text-xs px-1.5 py-0.5 rounded bg-gray-800/50 text-gray-400 border border-gray-700/50">
              +{remainingCount}
            </span>
          )}
        </div>

        {/* Action */}
        {href && callToAction && (
          <Link
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="inline-flex items-center text-xs text-pink-400 hover:text-pink-300 transition-colors"
          >
            <span className="truncate">{callToAction}</span>
            {isExternal ? (
              <ExternalLink className="ml-1 h-3 w-3 flex-shrink-0" />
            ) : (
              <ArrowRight className="ml-1 h-3 w-3 flex-shrink-0" />
            )}
          </Link>
        )}
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-active:opacity-100 transition-opacity duration-200 pointer-events-none rounded-xl" />
    </motion.div>
  )
}
