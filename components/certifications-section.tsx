"use client"

import { AnimatedText } from "@/components/animated-text"
import { CertificateCard } from "@/components/certificate-card"

// Commenting out unused imports as they are replaced by CertificateCard
// import { PDFCertificate } from "@/components/pdf-certificate"
// import { AWSCertificate } from "@/components/aws-certificate"

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 sm:py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tighter mb-12 sm:mb-16 text-center">
        <AnimatedText text="CERTIFICATIONS" />
      </h2>

      <div className="flex flex-wrap justify-center items-stretch gap-8 max-w-6xl mx-auto">
        {/* AWS Certification */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center">
          <CertificateCard
            name="AWS Certification"
            organization="Amazon Web Services"
            badgeImage="/assets/skills/aws-logo.png"
            pdfLink="/assets/certificates/AWS Certified Cloud Practitioner certificate (1).pdf"
          />
        </div>
        {/* Jira Certification */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center">
          <CertificateCard
            name="Jira Certification"
            organization="Atlassian"
            badgeImage="/assets/skills/jira-logo.png"
            pdfLink="/assets/certificates/Jira_Fundamentals_Badge_Atlassian.pdf"
          />
        </div>
        {/* Databricks Generative AI Certification */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center">
          <CertificateCard
            name="Get Started with Databricks for Generative AI"
            organization="Databricks Academy"
            badgeImage="/assets/skills/Databricks-Logo.png"
            pdfLink="https://7qd5tdgxs26x480g.public.blob.vercel-storage.com/Certifications/Databricks%20Generative-AI-vVh2ICy2ofQ8lttUFGQkzx2V97paGs.pdf"
          />
        </div>
      </div>
    </section>
  )
}
