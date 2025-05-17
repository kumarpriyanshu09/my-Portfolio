"use client"

import { ScrambleText } from "@/components/scramble-text"
import { VercelBadge } from "@/components/vercel-badge"
import { SectionLayout } from "@/components/templates/section-layout"

export function HeroSection() {
  return (
    <SectionLayout className="min-h-screen flex flex-col justify-center items-center text-center" containerClassName="flex-1 flex flex-col justify-center items-center w-full max-w-full px-0">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full space-y-4 md:space-y-6">
          <h1 className="font-bold text-gray-200 tracking-tighter w-full leading-none">
            <ScrambleText text="PRIYANSHU KUMAR" />
          </h1>
        </div>
        <div className="relative hidden md:block mt-8">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl opacity-30"></div>
          <VercelBadge />
        </div>
      </div>
    </SectionLayout>
  )
} 