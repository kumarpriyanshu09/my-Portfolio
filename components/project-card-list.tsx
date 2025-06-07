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

  // Truncate description to exactly 2 lines (approximately 80 characters)
  const truncatedDescription = description.length > 80 ? description.substring(0, 80) + "..." : description

  return (
    <motion.div
      className="relative group overflow-hidden rounded-2xl border border-gray-800/50 bg-black/40 backdrop-blur-sm mb-3"
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
      <div className="p-4">
        <div className="flex items-start">
          {/* Project Icon */}
          <div className="relative w-10 h-10 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mr-3 border border-pink-500/20">
            <Folder className="w-5 h-5 text-pink-400" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Title - Single line */}
            <h3 className="text-base font-bold text-gray-200 leading-tight mb-2 truncate">{title}</h3>

            {/* Description - Exactly 2 lines */}
            <p
              className="text-sm text-gray-400 mb-3 leading-relaxed"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: isExpanded ? "none" : 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {isExpanded ? description : truncatedDescription}
            </p>

            {/* Technologies - Single line when collapsed */}
            <div
              className="flex flex-wrap gap-1.5 mb-3"
              style={{
                maxHeight: isExpanded ? "none" : "28px",
                overflow: "hidden",
              }}
            >
              {(isExpanded ? technologies : visibleTechs).map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-xs px-2 py-1 rounded-md bg-gray-800/50 text-gray-400 border border-gray-700/50 whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
              {!isExpanded && remainingCount > 0 && (
                <span className="text-xs px-2 py-1 rounded-md bg-gray-800/50 text-pink-400 border border-pink-500/30 whitespace-nowrap">
                  +{remainingCount} more
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between">
              {/* Read Story Link */}
              {href && callToAction && (
                <Link
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center text-sm text-pink-400 hover:text-pink-300 transition-colors font-medium"
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
                onClick={(e) => {
                  e.preventDefault()
                  setIsExpanded(!isExpanded)
                }}
                className="inline-flex items-center text-sm text-gray-500 hover:text-gray-300 transition-colors ml-4 py-1 px-2 rounded-md hover:bg-gray-800/30"
              >
                <span className="text-xs">{isExpanded ? "Less" : "More"}</span>
                {isExpanded ? <ChevronUp className="ml-1 h-3 w-3" /> : <ChevronDown className="ml-1 h-3 w-3" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
    </motion.div>
  )
}
