"use client"

import { AnimatedText } from "@/components/animated-text"
import { TimelineItem } from "@/components/timeline-item"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 md:px-6 lg:px-10 max-w-6xl mx-auto">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-200 tracking-tighter mb-8 sm:mb-12 lg:mb-16 text-center">
        <AnimatedText text="EXPERIENCE" />
      </h2>

      {/* Mobile-First Timeline */}
      <div className="space-y-4 sm:space-y-6">
        <TimelineItem
          date="July 2022 - July 2025"
          title="Gen AI Engineer"
          company="Ananda"
          description="Built a Vicuna-based RAG system that improved clarity by 20% and reduced latency by 15%."
          metrics={
            <>
              ↑ <span className="font-bold text-white">20%</span> clarity · ↓{" "}
              <span className="font-bold text-white">15%</span> latency
            </>
          }
          leadership="Led a 7-member ML pod; served as finance liaison."
          skills={["Python", "Vicuna-7B", "LangChain","Pinecone", "langsmith", "ChromaDB", "BERT", "RAG", "Docker"]}
        />

        <TimelineItem
          date="November 2021 - July 2023"
          title="Data Analyst"
          company="Reino Prefab Private Ltd."
          description="Revamped the company's SQL data-collection system, doubling data accuracy (↑ 100%) and cutting weekly preprocessing time by 10 hours."
          metrics={
            <>
              ↑ <span className="font-bold text-white">100%</span> accuracy · ↓{" "}
              <span className="font-bold text-white">15%</span> entry errors · –
              <span className="font-bold text-white">10</span> h/week preprocessing
            </>
          }
          leadership="Conducted exec-level insight briefings; aligned ops & marketing on data-driven decisions."
          skills={["SQL", "R", "Tableau", "Excel", "ETL / Data Validation"]}
        />

        <TimelineItem
          date="May 2021 - August 2021"
          title="Data Analyst Intern"
          company="Inator"
          description="Built a Python player-ranking algorithm that boosted model precision by 70% and a Flask web interface that increased user engagement by 25%."
          metrics={
            <>
              Precision <span className="font-bold text-white">+70%</span> · Engagement{" "}
              <span className="font-bold text-white">+25%</span> · Data errors{" "}
              <span className="font-bold text-white">–60%</span>
            </>
          }
          skills={["Python", "Flask", "SQL", "Pandas", "scikit-learn", "K-means"]}
        />
      </div>
    </section>
  )
}
