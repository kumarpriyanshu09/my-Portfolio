"use client"

import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"
import { AnimatedText } from "@/components/animated-text"
import { ProjectCard } from "@/components/project-card"
import { ProjectCardList } from "@/components/project-card-list"
import type { Project } from "@/lib/types"
import { SectionLayout } from "@/components/templates/section-layout"

export const projects: Project[] = [
  {
    title: "FROM BLANK CANVAS TO DIGITAL MASTERPIECE",
    description:
      "The story of vibe coding, AI collaboration, and why the future of development is more creative than you think. A deep dive into building a personal portfolio using modern AI tools.",
    technologies: [
      "AI",
      "NEXT.JS",
      "VERCEL",
      "TAILWIND CSS",
      "CHATGPT",
      "KLING AI",
      "V0.DEV",
      "CLAUDE",
      "CURSOR",
      "WINDSURF",
    ],
    href: "/projects/vibe-code-portfolio",
    callToAction: "Read the Story",
  },
  {
    title: "AI DASHBOARD",
    description:
      "Interactive Tableau dashboard exploring AI's impact on industries, employment, and society. This project showcases data visualization techniques to present complex AI trends clearly.",
    technologies: ["TABLEAU", "DATA VISUALIZATION", "INTERACTIVE DASHBOARD"],
    href: "/projects/ai-dashboard",
    callToAction: "View Project Details",
  },
  {
    title: "BITBOT",
    description:
      "AI-Powered Cryptocurrency Guide. BitBot is a chatbot designed to help users understand cryptocurrency in simple terms, leveraging multiple LLMs and RAG for accuracy.",
    technologies: ["DIFY", "LLM (GEMINI, OPENAI)", "RAG", "WEB SCRAPING", "CHATBOT"],
    href: "/projects/bitbot",
    callToAction: "View Project Details",
  },
  {
    title: "HEALTHCARE SALES DASHBOARD",
    description:
      "Interactive Excel dashboard analyzing healthcare sales performance against yearly targets. Tracks revenue and covered lives using advanced Excel features for data-driven insights.",
    technologies: ["EXCEL", "DATA ANALYSIS", "INTERACTIVE DASHBOARD", "BUSINESS INTELLIGENCE"],
    href: "/projects/healthcare-sales",
    callToAction: "View Project Details",
  },
  {
    title: "STOCK PORTFOLIO OPTIMIZATION",
    description:
      "Engineered a data-driven stock portfolio optimization framework using Python, Modern Portfolio Theory (MPT), and Monte Carlo simulations to balance risk-return tradeoffs.",
    technologies: [
      "PYTHON",
      "MPT OPTIMIZATION",
      "MONTE CARLO SIMULATION",
      "PANDAS",
      "NUMPY",
      "MATPLOTLIB",
      "SCIPY",
      "STATSMODELS",
      "PYOMO",
    ],
    href: "https://github.com/kumarpriyanshu09/stock-portfolio-optimization",
    callToAction: "View on GitHub",
  },
  {
    title: "FORECASTING BLOOD GLUCOSE LEVEL",
    description:
      "Time series analysis project focused on forecasting blood glucose levels using ARIMA and SARIMA models. Implemented advanced time series techniques to predict glucose fluctuations.",
    technologies: ["SAS STUDIO", "TIME SERIES ANALYSIS", "ARIMA", "SARIMA"],
    href: "https://github.com/kumarpriyanshu09/Forecasting-Blood-Glucose-Level",
    callToAction: "View on GitHub",
  },
]

export function ProjectsSection() {
  return (
    <SectionLayout id="projects">
      <div className="mb-8 sm:mb-12 lg:mb-16 relative">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-200 tracking-tighter">
            <AnimatedText text="PROJECTS" />
          </h2>
          <Link
            href="https://github.com/kumarpriyanshu09"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors mt-4 md:mt-0 text-base md:text-lg"
          >
            <Github className="h-5 w-5" />
            <span>View All on GitHub</span>
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Mobile 4x1 List Layout */}
      <div className="block md:hidden">
        <div className="space-y-0">
          {projects.map((project, index) => (
            <ProjectCardList key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            href={project.href}
            callToAction={project.callToAction}
          />
        ))}
      </div>
    </SectionLayout>
  )
}
