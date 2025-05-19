"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EducationCardProps {
  institution: string
  degree: string
  field: string
  date: string
  gpa?: string
  logo?: string
  location?: string
  courses?: string[]
}

export function EducationCard({
  institution,
  degree,
  field,
  date,
  gpa,
  logo = "/assets/ui/placeholder.svg",
  location,
  courses = [],
}: EducationCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      className="relative group overflow-hidden rounded-lg border border-gray-800 bg-black p-6 w-full max-w-2xl mx-auto flex flex-col md:flex-row items-start gap-6 shadow-lg"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Timeline Accent */}
      <div className="absolute left-0 top-6 bottom-6 w-1 bg-pink-500 rounded-full opacity-70" style={{ minHeight: 60 }} />

      {/* Logo */}
      <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white rounded-md overflow-hidden mr-0 md:mr-6">
        <Image
          src={logo}
          alt={`${institution} logo`}
          width={96}
          height={96}
          className="object-contain max-h-full max-w-full"
        />
      </div>

      {/* Details */}
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
          <div>
            <h3 className="text-xl font-bold text-gray-200 leading-tight">{institution}</h3>
            <p className="text-gray-400 text-sm">{location}</p>
          </div>
          <span className="text-sm text-gray-500 whitespace-nowrap">{date}</span>
        </div>

        <div className="mb-2">
          <p className="text-gray-300 font-medium">
            {degree} in {field}
          </p>
          {gpa && <p className="text-gray-400 text-sm">GPA: {gpa}</p>}
        </div>

        {courses.length > 0 && (
          <div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 text-pink-400 hover:text-pink-300 p-0 h-auto"
            >
              {isExpanded ? "Hide coursework" : "View relevant coursework"}
              <ChevronDown className={cn("ml-1 h-3 w-3 transition-transform", isExpanded ? "rotate-180" : "")} />
            </Button>

            {isExpanded && (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                {courses.map((course, index) => (
                  <div key={index} className="text-sm text-gray-400 py-1 px-2 bg-gray-900/50 rounded">
                    {course}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  )
}
