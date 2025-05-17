"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { ReactNode } from "react"
import { BaseCard } from "@/components/ui/base-card"

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
    <div
      className={cn("relative flex flex-col md:flex-row w-full md:items-center", isLeft ? "md:flex-row-reverse" : "")}
    >
      {/* Timeline line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 -translate-x-1/2 z-0"></div>

      {/* Date bubble */}
      <div className="absolute left-6 md:left-1/2 top-6 w-12 h-12 rounded-full bg-black border border-gray-800 flex items-center justify-center -translate-x-1/2 z-10">
        <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-pink-500"></div>
        </div>
      </div>

      {/* Content */}
      <motion.div
        className={cn("ml-16 md:ml-0 md:w-1/2 mb-12", isLeft ? "md:pr-12" : "md:pl-12")}
        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <BaseCard
          className="relative group"
        >
          {/* Content remains the same */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-200">{title}</h3>
              <p className="text-gray-400">
                {company}
                {location && ` · ${location}`}
              </p>
            </div>
            <span className="text-sm text-gray-500 whitespace-nowrap">{date}</span>
          </div>

          <p className="text-gray-400 mb-2">{description}</p>

          {metrics && (
            <p className="text-gray-400 mb-1">
              <span className="font-medium">Metrics:</span> {metrics}
            </p>
          )}

          {leadership && <p className="text-gray-400 mb-4">{leadership}</p>}

          <div className={cn("space-y-4", isExpanded ? "block" : "hidden")}>
            {achievements.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Achievements</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-400">
                  {achievements.map((achievement, index) => {
                    const words = achievement.split(" ")
                    const firstWord = words[0]
                    const restOfSentence = words.slice(1).join(" ")

                    return (
                      <li key={index}>
                        <span className="font-semibold">{firstWord}</span> {restOfSentence}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}

            {skills.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span key={index} className="text-xs px-2 py-1 rounded-full border border-gray-800 text-gray-400">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 text-pink-400 hover:text-pink-300 p-0 h-auto"
          >
            {isExpanded ? "Show less" : "View details"}
            <ChevronDown className={cn("ml-1 h-3 w-3 transition-transform", isExpanded ? "rotate-180" : "")} />
          </Button>

          {/* Add gradient overlay that appears on hover */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg"></div>
        </BaseCard>
      </motion.div>
    </div>
  )
}
