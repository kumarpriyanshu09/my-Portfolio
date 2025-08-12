"use client"

import { ProjectCardList } from "@/components/project-card-list"
import { SectionLayout } from "@/components/templates/section-layout"

const projects = [
  {
    id: "fine-tuning-gemma",
    title: "Fine-tuning Gemma 3 4B with Unsloth",
    description:
      "Advanced LLM fine-tuning project using Unsloth framework to optimize Gemma 3 4B model for specific tasks with improved performance and reduced training time.",
    tags: ["LLM", "Fine-tuning", "Unsloth", "Gemma", "PyTorch", "Transformers"],
    image: "/llm-fine-tuning-interface.png",
    link: "/projects/fine-tuning-gemma",
    github: "https://github.com/priyanshu/fine-tuning-gemma",
    demo: "https://fine-tuning-gemma-demo.vercel.app",
    featured: true,
    status: "completed",
  },
  {
    id: "rag-pinecone",
    title: "RAG with Pinecone",
    description:
      "Retrieval-Augmented Generation system built with Pinecone vector database for intelligent document search and question-answering capabilities.",
    tags: ["RAG", "Pinecone", "Vector DB", "LangChain", "OpenAI", "Python"],
    image: "/rag-system-architecture.png",
    link: "/projects/rag-pinecone",
    github: "https://github.com/priyanshu/rag-pinecone",
    demo: "https://rag-pinecone-demo.vercel.app",
    featured: true,
    status: "completed",
  },
  {
    id: "healthcare-sales",
    title: "Healthcare Provider Fraud Detection",
    description:
      "Machine learning system for detecting fraudulent activities in healthcare provider claims using advanced analytics and pattern recognition.",
    tags: ["Machine Learning", "Healthcare", "Fraud Detection", "Python", "Scikit-learn", "Data Analytics"],
    image: "/healthcare-fraud-dashboard.png",
    link: "/projects/healthcare-sales",
    github: "https://github.com/priyanshu/healthcare-fraud-detection",
    demo: "https://healthcare-fraud-demo.vercel.app",
    featured: true,
    status: "completed",
  },
  {
    id: "ai-dashboard",
    title: "AI-Powered Analytics Dashboard",
    description:
      "Comprehensive analytics dashboard with AI-driven insights, real-time data visualization, and predictive analytics capabilities.",
    tags: ["React", "TypeScript", "AI", "Analytics", "Dashboard", "Data Visualization"],
    image: "/ai-analytics-dashboard.png",
    link: "/projects/ai-dashboard",
    github: "https://github.com/priyanshu/ai-dashboard",
    demo: "https://ai-dashboard-demo.vercel.app",
    featured: true,
    status: "completed",
  },
  {
    id: "bitbot",
    title: "BitBot - Crypto Trading Bot",
    description:
      "Automated cryptocurrency trading bot with advanced algorithms, risk management, and real-time market analysis.",
    tags: ["Python", "Crypto", "Trading Bot", "API", "Machine Learning", "Finance"],
    image: "/crypto-trading-bot-interface.png",
    link: "/projects/bitbot",
    github: "https://github.com/priyanshu/bitbot",
    demo: "https://bitbot-demo.vercel.app",
    featured: false,
    status: "completed",
  },
  {
    id: "vibe-code-portfolio",
    title: "Vibe Code Portfolio",
    description:
      "Modern, responsive portfolio website built with Next.js, featuring smooth animations and interactive elements.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Portfolio"],
    image: "/assets/vibe-code/Digital Masterpiece Portfolio.png",
    link: "/projects/vibe-code-portfolio",
    github: "https://github.com/priyanshu/vibe-code-portfolio",
    demo: "https://vibe-code-portfolio.vercel.app",
    featured: false,
    status: "completed",
  },
]

export function ProjectsSection() {
  return (
    <SectionLayout
      id="projects"
      title="Featured Projects"
      subtitle="A showcase of my recent work in AI, machine learning, and web development"
      className="py-20"
    >
      <ProjectCardList projects={projects} />
    </SectionLayout>
  )
}
