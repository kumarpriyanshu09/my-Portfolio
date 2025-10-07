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
          date="Feb 2025 - Current"
          title="AI ML Engineer"
          company="BlackRock"
          description="Built a production RAG platform (LangChain + Pinecone) that lifted retrieval accuracy 35% across a 10K+ queries/mo finance knowledge base."
          metrics={
            <>
              ↑ <span className="font-bold text-white">35%</span> document retrieval accuracy · ↑{" "}
              <span className="font-bold text-white">30%</span> domain response quality
            </>
          }
          skills={["LangChain", "RAG", "Pinecone", "AWS", "VectorDB", "LangGraph"]}
        />

        <TimelineItem
          date="Sep 2024 - Jan 2025"
          title="GenAI Engineer"
          company="AIG"
          description="Shipped GenAI claim & fraud stack—45% faster reviews on 120K+ claims and +19% fraud-recall on high-value policies."
          metrics={
            <>
              ↓ <span className="font-bold text-white">45%</span> faster claim reviews · ↑{" "}
              <span className="font-bold text-white">19%</span> fraud detection recall
            </>
          }
          skills={["RAG", "Embedding", "AWS", "XGBoost", "OpenAI"]}
        />

        <TimelineItem
          date="Mar 2020 - Jul 2023"
          title="ML Engineer"
          company="Space Infolab"
          description="Built anomaly-detection pipelines hitting 91% recall, cutting false positives 27% and surfacing $5M+ in fraud."
          metrics={
            <>
              <span className="font-bold text-white">91%</span> recall · ↑{" "}
              <span className="font-bold text-white">23%</span> precision
            </>
          }
          skills={["Isolation Forest", "PyTorch", "AWS", "Python", "Autoencoders"]}
        />
      </div>
    </section>
  )
}
