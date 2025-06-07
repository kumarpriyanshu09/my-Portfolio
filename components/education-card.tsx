"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { ChevronDown, GraduationCap, MapPin, Calendar } from "lucide-react"
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
      className="relative bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-4 sm:p-6 group hover:border-pink-500/30 transition-all duration-300"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.3 }}
    >
      {/* Mobile-First Header */}
      <div className="flex items-start space-x-4 mb-4">
        {/* Compact Logo */}
        <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-xl overflow-hidden flex items-center justify-center shadow-lg">
          <Image
            src={logo || "/placeholder.svg"}
            alt={`${institution} logo`}
            width={48}
            height={48}
            className="object-contain max-h-full max-w-full"
          />
        </div>

        {/* Institution Info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg sm:text-xl font-bold text-gray-200 leading-tight mb-1">{institution}</h3>
          <div className="flex items-center text-gray-400 text-sm mb-2">
            <MapPin className="w-3 h-3 mr-1 opacity-60" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-xs text-gray-500 bg-gray-900/50 px-2 py-1 rounded-full w-fit">
            <Calendar className="w-3 h-3 mr-1" />
            {date}
          </div>
        </div>
      </div>

      {/* Degree Information */}
      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-3 mb-4 border border-blue-500/20">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-gray-300 font-medium text-sm sm:text-base">
              {degree} in {field}
            </p>
            {gpa && (
              <p className="text-gray-400 text-sm mt-1">
                <span className="text-gray-500">GPA:</span> <span className="font-semibold">{gpa}</span>
              </p>
            )}
          </div>
          <GraduationCap className="w-5 h-5 text-blue-400 opacity-60" />
        </div>
      </div>

      {/* Coursework Section */}
      {courses.length > 0 && (
        <div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-pink-400 hover:text-pink-300 p-0 h-auto text-sm mb-3"
          >
            {isExpanded ? "Hide coursework" : "View relevant coursework"}
            <ChevronDown className={cn("ml-1 h-3 w-3 transition-transform", isExpanded ? "rotate-180" : "")} />
          </Button>

          <motion.div
            initial={false}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 gap-2">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="text-sm text-gray-400 py-2 px-3 bg-gray-900/30 rounded-lg border border-gray-800/30 flex items-center"
                >
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                  {course}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
    </motion.div>
  )
}
