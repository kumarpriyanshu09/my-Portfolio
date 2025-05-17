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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center max-w-4xl mx-auto">
        {/* AWS Certification */}
        <CertificateCard
          name="AWS Certification"
          organization="Amazon Web Services"
          badgeImage="/aws-logo.png"
          pdfLink="/AWS Certified Cloud Practitioner certificate (1).pdf"
        />

        {/* Jira Certification */}
        <CertificateCard
          name="Jira Certification"
          organization="Atlassian"
          badgeImage="/jira-logo.png"
          pdfLink="/Jira Fundamentals Badge _ Atlassian.pdf"
        />
      </div>
    </section>
  )
}
