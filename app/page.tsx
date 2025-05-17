import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { CertificationsSection } from "@/components/certifications-section"
import { WhatCanIDoSection } from "@/components/what-can-i-do-section"
import { ContactLinks } from "@/components/contact-links"
import { SocialLinks } from "@/components/social-links"
import { AppLayout } from "@/components/templates/app-layout"
import { SectionLayout } from "@/components/templates/section-layout"

export default function Home() {
  return (
    <AppLayout>
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* What Can I Do Section */}
      <WhatCanIDoSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Education Section */}
      <EducationSection />

      {/* Certifications Section */}
      <CertificationsSection />

      {/* Contact Links */}
      <SectionLayout id="contact-links">
        <ContactLinks />
        <div className="mt-16">
          <SocialLinks 
            linkedinUrl="https://www.linkedin.com/in/priyanshu09"
            githubUrl="https://github.com/kumarpriyanshu09"
            email="priyanshu@example.com"
          />
        </div>
      </SectionLayout>
    </AppLayout>
  )
}
