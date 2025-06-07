"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { ChevronDown, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { ReactNode } from "react"

interface TimelineItemProps {
  date: string
  title: string
  company: string
  location?: string
  description: string
  metrics?: ReactNode
  leadership?: string
  achievements: string[]
  isLeft?: boolean
  skills?: string[]
}

export function TimelineItem({
  date,
  title,
  company,
  location,
  description,
  metrics,
  leadership,
  achievements,
  isLeft = false,
  skills = [],
}: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="relative w-full">
      {/* Mobile-First Compact Design */}
      <motion.div
        className="relative bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-4 sm:p-6 mb-6 group hover:border-pink-500/30 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -2 }}
      >
        {/* Header - Optimized for Mobile */}
        <div className="flex flex-col space-y-2 mb-3">
          <div className="flex items-start justify-between">
            <h3 className="text-lg sm:text-xl font-bold text-gray-200 leading-tight pr-2">{title}</h3>
            <div className="flex items-center text-xs text-gray-500 bg-gray-900/50 px-2 py-1 rounded-full whitespace-nowrap">
              <Calendar className="w-3 h-3 mr-1" />
              {date}
            </div>
          </div>

          <div className="flex items-center text-gray-400 text-sm">
            <span className="font-medium">{company}</span>
            {location && (
              <>
                <MapPin className="w-3 h-3 mx-2 opacity-60" />
                <span className="text-xs">{location}</span>
              </>
            )}
          </div>
        </div>

        {/* Compact Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-3">{description}</p>

        {/* Metrics - Mobile Optimized */}
        {metrics && (
          <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-lg p-3 mb-3 border border-pink-500/20">
            <div className="text-sm text-gray-300">
              <span className="text-xs text-gray-500 uppercase tracking-wide">Impact:</span>
              <div className="mt-1">{metrics}</div>
            </div>
          </div>
        )}

        {/* Leadership - Compact */}
        {leadership && (
          <div className="text-sm text-gray-400 mb-3 italic border-l-2 border-pink-500/30 pl-3">{leadership}</div>
        )}

        {/* Expandable Content */}
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="pt-3 border-t border-gray-800/50">
            {achievements.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {achievements.map((achievement, index) => {
                    const words = achievement.split(" ")
                    const firstWord = words[0]
                    const restOfSentence = words.slice(1).join(" ")

                    return (
                      <li key={index} className="text-sm text-gray-400 flex items-start">
                        <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <span className="font-semibold text-gray-300">{firstWord}</span> {restOfSentence}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}

            {skills.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-full bg-gray-800/50 text-gray-400 border border-gray-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Expand Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 text-pink-400 hover:text-pink-300 p-0 h-auto text-sm group-hover:text-pink-300 transition-colors"
        >
          {isExpanded ? "Show less" : "View details"}
          <ChevronDown className={cn("ml-1 h-3 w-3 transition-transform", isExpanded ? "rotate-180" : "")} />
        </Button>

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
      </motion.div>
    </div>
  )
}
