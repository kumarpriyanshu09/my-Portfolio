"use client"

import { AnimatedText } from "@/components/animated-text"
import { PDFCertificate } from "@/components/pdf-certificate"
import { AWSCertificate } from "@/components/aws-certificate"

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-4 md:px-10 max-w-7xl mx-auto">
      <h2 className="text-5xl md:text-6xl font-bold text-gray-200 tracking-tighter mb-16 text-center">
        <AnimatedText text="CERTIFICATIONS" />
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
        {/* AWS Certification */}
        <AWSCertificate
          name="AWS Certified Cloud Practitioner"
          organization="Amazon Web Services"
          date="January 2024"
          badgeId="cddfea78-db52-4b67-b518-d9f98e7f0d25"
        />

        {/* Jira Certification */}
        <PDFCertificate
          name="Jira Fundamentals"
          organization="Atlassian"
          date="February 1, 2024"
          score="83"
          completionId="296050523"
          thumbnailSrc="/jira-certificate-thumbnail.png"
          pdfSrc="/jira-fundamentals-certificate.pdf"
        />
      </div>
    </section>
  )
}
