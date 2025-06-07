"use client"

import { useState } from "react"
import { AnimatedText } from "@/components/animated-text"
import { SkillCard } from "@/components/skill-card"
import { SkillCardMobile } from "@/components/skill-card-mobile"
import { SkillCardDetailModal } from "@/components/skill-card-detail-modal"

const skills = [
  {
    videoSrc: "/videos/stacks.mp4",
    title: "Data + Analytics",
    hook: "I turn chaos into clarity.",
    description:
      "From messy datasets to meaningful dashboards, I build ETL pipelines that matter and surface insights that move the needle. I use SQL, Python, Power BI, and AWS to make decisions easier and data trustworthy.",
  },
  {
    videoSrc: "/videos/rick.mp4",
    title: "AI + Machine Learning",
    hook: "I make machines think smarter.",
    description:
      "I develop intelligent systems that learn, adapt, and solve complex problems. From RAG systems to predictive models, I leverage cutting-edge AI technologies to create solutions that push boundaries and deliver real-world impact.",
  },
  {
    videoSrc: "/videos/coffeemaker.mp4",
    title: "Full-Stack Development",
    hook: "I build digital experiences that matter.",
    description:
      "I craft end-to-end solutions using modern technologies like React, Next.js, and cloud platforms. From concept to deployment, I create scalable applications that users love and businesses depend on.",
  },
  {
    videoSrc: "/videos/flame.mp4",
    title: "Strategy + Innovation",
    hook: "I bridge technology and business.",
    description:
      "I translate complex technical concepts into strategic business value. Through data-driven insights and innovative thinking, I help organizations make informed decisions and stay ahead of the curve.",
  },
]

export function WhatCanIDoSection() {
  const [selectedSkill, setSelectedSkill] = useState<(typeof skills)[0] | null>(null)

  return (
    <section id="what-can-i-do" className="py-12 sm:py-16 lg:py-20 px-4 md:px-6 lg:px-10 max-w-7xl mx-auto">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-200 tracking-tighter mb-8 sm:mb-12 lg:mb-16 text-center">
        <AnimatedText text="WHAT CAN I DO" />
      </h2>

      {/* Mobile Grid Layout */}
      <div className="block md:hidden">
        <div className="grid grid-cols-2 gap-3 mb-6">
          {skills.map((skill, index) => (
            <SkillCardMobile
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
