"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ExternalLink, Folder, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import type { Project } from "@/lib/types"

interface ProjectCardListProps extends Project {
  index: number
}

export function ProjectCardList({ title, description, technologies, href, callToAction, index }: ProjectCardListProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const isExternal = href?.startsWith("http")

  // For collapsed state: show only first 3 technologies
  const visibleTechs = technologies.slice(0, 3)
  const remainingCount = technologies.length - 3

  // Truncate description to 2 lines (approximately 100 characters)
  const truncatedDescription = description.length > 100 ? description.substring(0, 100) + "..." : description

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
      animate={{ height: "auto" }}
    >
      <div className="flex items-start p-4">
        {/* Project Icon */}
        <div className="relative w-12 h-12 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mr-4 border border-pink-500/20">
          <Folder className="w-6 h-6 text-pink-400" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Title */}
          <h3 className="text-base font-bold text-gray-200 leading-tight mb-2 line-clamp-1">{title}</h3>

          {/* Description */}
          <p className="text-sm text-gray-400 mb-3 leading-relaxed">
            {isExpanded ? description : truncatedDescription}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {(isExpanded ? technologies : visibleTechs).map((tech, techIndex) => (
              <span
                key={techIndex}
                className="text-xs px-2 py-1 rounded-md bg-gray-800/50 text-gray-400 border border-gray-700/50"
              >
                {tech}
              </span>
            ))}
            {!isExpanded && remainingCount > 0 && (
              <span className="text-xs px-2 py-1 rounded-md bg-gray-800/50 text-gray-400 border border-gray-700/50">
                +{remainingCount} more
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            {/* Main Action Link */}
            {href && callToAction && (
              <Link
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="inline-flex items-center text-sm text-pink-400 hover:text-pink-300 transition-colors group-hover:text-pink-300"
              >
                <span className="truncate">{callToAction}</span>
                {isExternal ? (
                  <ExternalLink className="ml-2 h-4 w-4 flex-shrink-0" />
                ) : (
                  <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                )}
              </Link>
            )}

            {/* Expand/Collapse Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center text-sm text-gray-500 hover:text-gray-300 transition-colors ml-4"
            >
              <span>{isExpanded ? "Less" : "More"}</span>
              {isExpanded ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
    </motion.div>
  )
}
