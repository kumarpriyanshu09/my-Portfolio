"use client"

import { useState } from "react"
import { AnimatedText } from "@/components/animated-text"
import { SkillCard } from "@/components/skill-card"
import { SkillCardList } from "@/components/skill-card-list"
import { SkillCardDetailModal } from "@/components/skill-card-detail-modal"

const skills = [
  {
    videoSrc: "https://7qd5tdgxs26x480g.public.blob.vercel-storage.com/stacks-VlwpyfNhULEfThT72Hneml32CZrDyY.mp4",
    title: "Data + Analytics",
    hook: "I turn chaos into clarity.",
    description:
      "From messy datasets to meaningful dashboards, I build ETL pipelines that matter and surface insights that move the needle. I use SQL, Python, Power BI, and AWS to make decisions easier and data trustworthy.",
  },
  {
    videoSrc: "https://7qd5tdgxs26x480g.public.blob.vercel-storage.com/rick-XX01LpCUBTF5BbnN7Y5FUWypjKJeOL.mp4",
    title: "GenAI Explorer",
    hook: "I don't just study GenAI—I build with it.",
    description:
      "From tuning LLMs to wiring up vector databases, I've worked on GenAI projects both academically and hands-on. I keep building, testing, and iterating through each wave of innovation.",
  },
  {
    videoSrc: "https://7qd5tdgxs26x480g.public.blob.vercel-storage.com/coffeemaker-qInRkNNkG0UBRhJAISMFsVtycehAUE.mp4",
    title: "Creative Systems Thinker",
    hook: "I build systems that lift people.",
    description:
      "I thrive on open communication, diverse perspectives, and structured thinking. Whether I'm breaking things to understand them or simplifying complexity, I care about clarity, efficiency, and people feeling heard.",
  },
  {
    videoSrc: "https://7qd5tdgxs26x480g.public.blob.vercel-storage.com/flame-RyaSBDXLLcsZasRf0FMQHItX3midr1.mp4",
    title: "Vibe Builder",
    hook: "I build with flow, fun, and fire.",
    description:
      "Whether crafting MVPs or generating content with AI, I vibe with modern tools. I use the latest technologies to fine-tune ideas and keep exploring what's next—with speed, soul, and curiosity.",
  },
]

export function WhatCanIDoSection() {
  const [selectedSkill, setSelectedSkill] = useState<(typeof skills)[0] | null>(null)

  return (
    <section id="what-can-i-do" className="py-12 sm:py-16 lg:py-20 px-4 md:px-6 lg:px-10 max-w-7xl mx-auto">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-200 tracking-tighter mb-8 sm:mb-12 lg:mb-16 text-center">
        <AnimatedText text="WHAT CAN I DO" />
      </h2>

      {/* Mobile 4x1 List Layout */}
      <div className="block md:hidden">
        <div className="space-y-0">
          {skills.map((skill, index) => (
            <SkillCardList
              key={skill.title}
              videoSrc={skill.videoSrc}
              title={skill.title}
              hook={skill.hook}
              description={skill.description}
              index={index}
              onExpand={() => setSelectedSkill(skill)}
            />
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.title}
            videoSrc={skill.videoSrc}
            title={skill.title}
            hook={skill.hook}
            description={skill.description}
            index={index}
          />
        ))}
      </div>

      {/* Detail Modal for Mobile */}
      <SkillCardDetailModal
        isOpen={!!selectedSkill}
        onClose={() => setSelectedSkill(null)}
        videoSrc={selectedSkill?.videoSrc || ""}
        title={selectedSkill?.title || ""}
        hook={selectedSkill?.hook || ""}
        description={selectedSkill?.description || ""}
      />
    </section>
  )
}
