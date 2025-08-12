"use client"

import { AnimatedText } from "@/components/animated-text"
import { EducationCard } from "@/components/education-card"

export function EducationSection() {
  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20 px-4 md:px-6 lg:px-10 max-w-6xl mx-auto">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-200 tracking-tighter mb-8 sm:mb-12 lg:mb-16 text-center">
        <AnimatedText text="EDUCATION" />
      </h2>

      {/* Mobile-First Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <EducationCard
          institution="University of Connecticut"
          degree="M.S"
          field="Business Analytics and Project Management"
          date="August 2023 - May 2025"
          location="Hartford, CT"
          gpa="3.78/4.0"
          logo="/assets/education/UConn Logo.svg"
          courses={[
            "Data Mining and Business Intelligence",
            "Predictive Modeling",
            "Project Risk and Cost Management",
            "Advanced Business Analytics",
            "Statistics Business Analytics",
            "Business Decision Modeling",
            "Data Science using Python",
            "Big Data Analytics with Cloud",
            "Generative AI in Business",
          ]}
        />

        <EducationCard
          institution="Maharashtra Institute of Technology"
          degree="Bachelor's"
          field="Electrical Engineering"
          date="August 2018 - May 2022"
          location="Pune, India"
          gpa="3.29/4.0"
          logo="/assets/education/MIT WPU Logo.svg"
          courses={[
            "Data Analytics with Python",
            "Machine Learning",
            "Project Management",
            "Optimization Techniques",
            "Maths for Artificial Intelligence",
          ]}
        />
      </div>
    </section>
  )
}
