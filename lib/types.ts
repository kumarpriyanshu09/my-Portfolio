export interface Project {
  title: string
  description: string
  technologies: string[]
  href: string
  callToAction: string
  image?: string
}

export interface TimelineItem {
  title: string
  organization: string
  duration: string
  description: string
  skills?: string[]
  logo?: string
}

export interface Education {
  institution: string
  degree: string
  duration: string
  description: string
  logo?: string
}

export interface Certification {
  title: string
  issuer: string
  date: string
  credentialId?: string
  url?: string
  logo?: string
}

export interface SkillCard {
  title: string
  description: string
  icon: React.ReactNode
}

export interface SocialLink {
  name: string
  href: string
  icon: React.ReactNode
}

export interface ContactLink {
  title: string
  description: string
  href: string
  icon: React.ReactNode
} 