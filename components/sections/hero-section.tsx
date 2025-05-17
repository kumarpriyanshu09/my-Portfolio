"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AnimatedText } from "@/components/animated-text"
import { VercelBadge } from "@/components/vercel-badge"
import { SectionLayout } from "@/components/templates/section-layout"

export function HeroSection() {
  return (
    <SectionLayout className="min-h-[80vh] flex flex-col justify-center" containerClassName="flex-1 flex flex-col justify-center">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-200 tracking-tighter">
            <AnimatedText text="PRIYANSHU KUMAR" />
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-md">
            Design-minded developer crafting sleek digital experiences.
          </p>
          <div className="pt-4">
            <Button className="group" variant="outline">
              See my work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl opacity-30"></div>
          <VercelBadge />
        </div>
      </div>
    </SectionLayout>
  )
} 