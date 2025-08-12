"use client"

import { ReactNode } from "react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Header } from "@/components/layout/header"
import { cn } from "@/lib/utils"
import { Spotlight } from "@/components/ui/spotlight"

interface AppLayoutProps {
  children: ReactNode
  className?: string
  withSpotlight?: boolean
  spotlightPosition?: string
  footerContent?: ReactNode
}

export function AppLayout({ 
  children, 
  className,
  withSpotlight = true,
  spotlightPosition = "-top-40 left-0 md:left-60 md:-top-20",
  footerContent
}: AppLayoutProps) {
  const currentYear = new Date().getFullYear()
  
  return (
    <div className={cn("relative min-h-screen bg-black text-gray-300 overflow-hidden", className)}>
      {withSpotlight && (
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <Spotlight className={spotlightPosition} fill="rgba(255, 100, 120, 0.15)" />
        </div>
      )}
      
      <Header className="relative z-50" />
      
      <main className="relative z-10 pt-24 pb-20">
        {children}
        <SpeedInsights />
      </main>
      
      <footer className="py-10 text-center text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto px-4">
          {footerContent || (
            <>
              <p>&copy; {currentYear} Priyanshu Kumar. All rights reserved.</p>
              <p className="mt-1">Built with Next.js, Tailwind CSS, and Framer Motion.</p>
            </>
          )}
        </div>
      </footer>
    </div>
  )
}
