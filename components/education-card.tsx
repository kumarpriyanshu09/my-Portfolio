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
  logo = "/placeholder.svg?height=60&width=60",
  location,
  courses = [],
}: EducationCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      className="bg-black border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          {logo && (
            <div className="w-16 h-16 rounded-md overflow-hidden bg-transparent mr-4 flex items-center justify-center">
              <Image
                src={logo || "/placeholder.svg"}
                alt={`${institution} logo`}
                width={64}
                height={64}
                className="object-contain max-h-full max-w-full"
                priority
              />
            </div>
          )}
          <div>
            <h3 className="text-xl font-bold text-gray-200">{institution}</h3>
            <p className="text-gray-400">{location}</p>
          </div>
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
    </motion.div>
  )
}
