"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Project } from "@/lib/types"

interface ProjectCardProps extends Project {
  className?: string
}

export function ProjectCard({ 
  title, 
  description, 
  technologies, 
  href, 
  callToAction, 
  image, 
  className 
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      className={cn(
        "relative group overflow-hidden rounded-lg border border-gray-800 bg-black p-6 h-full flex flex-col justify-between",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <h3 className="text-2xl font-bold text-gray-200 mb-3">{title}</h3>
        <div className="mb-4">
          {/* Simplified class application for description */}
          <p className={`text-gray-400 transition-all duration-300 ${isExpanded ? "" : "line-clamp-3"}`}>
            {description}
          </p>
          {description.length > 150 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-pink-400 hover:text-pink-300 text-sm mt-1 flex items-center relative z-10"
            >
              {isExpanded ? "Show less" : "Show more"}
              <ChevronDown className={cn("ml-1 h-3 w-3 transition-transform", isExpanded ? "rotate-180" : "")} />
            </button>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.slice(0, isExpanded ? technologies.length : 6).map((tech, index) => (
            <span key={index} className="text-xs px-2 py-1 rounded-full border border-gray-800 text-gray-400">
              {tech}
            </span>
          ))}
          {!isExpanded && technologies.length > 6 && (
            <span className="text-xs px-2 py-1 rounded-full border border-gray-800 text-gray-400">
              +{technologies.length - 6} more
            </span>
          )}
        </div>

        {href && callToAction && (
          // Isolated link with stopPropagation to prevent interference
          <div onClick={(e) => e.stopPropagation()} className="relative z-10">
            <Link
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center text-sm text-pink-400 hover:text-pink-300 transition-colors"
            >
              {callToAction} <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>
        )}
      </div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />
    </motion.div>
  )
}
