"use client"

import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"
import { AnimatedText } from "@/components/animated-text"
import { ProjectCard } from "@/components/project-card"
import { Project } from "@/lib/types"
import { SectionLayout } from "@/components/templates/section-layout"

const projects: Project[] = [
  {
    title: "STOCK PORTFOLIO OPTIMIZATION",
    description: "Engineered a data-driven stock portfolio optimization framework using Python, Modern Portfolio Theory (MPT), and Monte Carlo simulations to balance risk-return tradeoffs. Leveraged integer programming (Pyomo) to allocate $100k across 9 S&P 500 stocks under constraints. Simulated 1,000 market scenarios to quantify risk and compared rebalancing strategies.",
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
    callToAction: "View on GitHub"
  },
  {
    title: "FORECASTING BLOOD GLUCOSE LEVEL",
    description: "Time series analysis project focused on forecasting blood glucose levels using ARIMA and SARIMA models. Implemented advanced time series techniques to predict glucose fluctuations, helping to improve diabetes management through data-driven insights.",
    technologies: ["SAS STUDIO", "TIME SERIES ANALYSIS", "ARIMA", "SARIMA"],
    href: "https://github.com/kumarpriyanshu09/Forecasting-Blood-Glucose-Level",
    callToAction: "View on GitHub"
  },
  {
    title: "CREDIT DELINQUENCY PREDICTION",
    description: "This project develops a machine learning model to predict credit card payment delinquency, emphasizing transparency and feature importance. Implemented various classification algorithms to identify at-risk accounts and provide actionable insights for financial institutions.",
    technologies: [
      "PYTHON",
      "PANDAS",
      "NUMPY",
      "MATPLOTLIB",
      "SEABORN",
      "SCIKIT-LEARN",
      "STATSMODELS",
      "IMBALANCED-LEARN",
      "XGBOOST",
    ],
    href: "https://github.com/kumarpriyanshu09/credit-delinquency-prediction",
    callToAction: "View on GitHub"
  },
  {
    title: "SOCIAL MEDIA DATA ANALYSIS",
    description: "Data analysis project using SQL to extract insights from a social media platform, focusing on user behavior, content popularity, and trends. Designed database schema and implemented ETL processes to transform raw data into actionable business intelligence.",
    technologies: ["SQL", "ETL", "MARIADB", "ER DIAGRAMS"],
    href: "https://github.com/kumarpriyanshu09/social-media-data-analysis",
    callToAction: "View on GitHub"
  },
  {
    title: "YELP RESTAURANT REVIEW ANALYSIS",
    description: "Text mining project that analyzes Yelp reviews to understand customer sentiment, identify key themes, and discover business insights. Applied natural language processing techniques to extract meaningful patterns from unstructured text data.",
    technologies: [
      "PYTHON",
      "PANDAS",
      "NLTK",
      "TEXTBLOB",
      "SPACY",
      "WORD2VEC",
      "TOPIC MODELING",
      "SENTIMENT ANALYSIS",
    ],
    href: "https://github.com/kumarpriyanshu09/yelp-review-analysis",
    callToAction: "View on GitHub"
  }
]

export function ProjectsSection() {
  return (
    <SectionLayout id="projects">
      <div className="flex justify-between items-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-200 tracking-tighter">
          <AnimatedText text="PROJECTS" />
        </h2>
        <Link
          href="https://github.com/kumarpriyanshu09"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
        >
          <Github className="h-5 w-5" />
          <span>View All on GitHub</span>
          <ExternalLink className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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