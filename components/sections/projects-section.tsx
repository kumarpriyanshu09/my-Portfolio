"use client"

import { ProjectCardList } from "@/components/project-card-list"
import { SectionLayout } from "@/components/templates/section-layout"

const projects = [
  {
    id: "fine-tuning-gemma",
    title: "Fine-tuning Gemma 3 4B with Unsloth",
    description:
      "Advanced LLM fine-tuning project using Unsloth framework to optimize Gemma 3 4B model for specific tasks with improved performance and efficiency.",
    tags: ["LLM", "Fine-tuning", "Unsloth", "Gemma", "AI/ML"],
    image: "/llm-fine-tuning-interface.png",
    href: "/projects/fine-tuning-gemma",
    featured: true,
  },
  {
    id: "rag-pinecone",
    title: "RAG with Pinecone",
    description:
      "Retrieval-Augmented Generation system built with Pinecone vector database for intelligent document search and question-answering capabilities.",
    tags: ["RAG", "Pinecone", "Vector DB", "NLP", "AI"],
    image: "/rag-system-architecture.png",
    href: "/projects/rag-pinecone",
    featured: true,
  },
  {
    id: "healthcare-sales",
    title: "Healthcare Provider Fraud Detection",
    description:
      "Machine learning system for detecting fraudulent activities in healthcare provider claims using advanced analytics and pattern recognition.",
    tags: ["Machine Learning", "Healthcare", "Fraud Detection", "Analytics"],
    image: "/healthcare-fraud-dashboard.png",
    href: "/projects/healthcare-sales",
    featured: true,
  },
  {
    id: "ai-dashboard",
    title: "AI-Powered Analytics Dashboard",
    description:
      "Interactive dashboard with real-time data visualization, predictive analytics, and AI-driven insights for business intelligence.",
    tags: ["React", "D3.js", "Machine Learning", "Analytics"],
    image: "/ai-analytics-dashboard.png",
    href: "/projects/ai-dashboard",
    featured: false,
  },
  {
    id: "bitbot",
    title: "BitBot - Crypto Trading Bot",
    description:
      "Automated cryptocurrency trading bot with advanced algorithms, risk management, and real-time market analysis.",
    tags: ["Python", "Trading", "Cryptocurrency", "Automation"],
    image: "/crypto-trading-bot-interface.png",
    href: "/projects/bitbot",
    featured: false,
  },
  {
    id: "vibe-code-portfolio",
    title: "Vibe Code Portfolio",
    description:
      "Modern, responsive portfolio website showcasing creative design and smooth animations with optimal user experience.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/modern-portfolio-website.png",
    href: "/projects/vibe-code-portfolio",
    featured: false,
  },
]

export function ProjectsSection() {
  return (
    <SectionLayout
      id="projects"
      title="Featured Projects"
      subtitle="A showcase of my recent work in AI, machine learning, and web development"
    >
      <ProjectCardList projects={projects} />
    </SectionLayout>
  )
}
