"use client"

import { AnimatedText } from "@/components/animated-text"
import { CertificateCard } from "@/components/certificate-card"

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-12 sm:py-16 lg:py-20 px-4 md:px-6 lg:px-10 max-w-6xl mx-auto">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tighter mb-8 sm:mb-12 lg:mb-16 text-center">
        <AnimatedText text="CERTIFICATIONS" />
      </h2>

      {/* Mobile-First Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
        {/* AWS Certification */}
        <CertificateCard
          name="AWS Certification"
          organization="Amazon Web Services"
          badgeImage="/assets/skills/aws-logo.png"
          pdfLink="/assets/certificates/AWS Certified Cloud Practitioner certificate (1).pdf"
        />

        {/* Jira Certification */}
        <CertificateCard
          name="Jira Certification"
          organization="Atlassian"
          badgeImage="/assets/skills/jira-logo.png"
          pdfLink="/assets/certificates/Jira_Fundamentals_Badge_Atlassian.pdf"
        />

        {/* Databricks Certification */}
        <CertificateCard
          name="Get Started with Databricks for Generative AI"
          organization="Databricks Academy"
          badgeImage="/assets/skills/Databricks-Logo.png"
          pdfLink="https://7qd5tdgxs26x480g.public.blob.vercel-storage.com/Certifications/Databricks%20Generative-AI-vVh2ICy2ofQ8lttUFGQkzx2V97paGs.pdf"
        />
      </div>
    </section>
  )
}
