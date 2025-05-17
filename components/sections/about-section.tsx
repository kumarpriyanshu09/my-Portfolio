"use client"

import { AnimatedText } from "@/components/animated-text"
import { SectionLayout } from "@/components/templates/section-layout"

export function AboutSection() {
  return (
    <SectionLayout id="about">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square md:aspect-auto md:h-[600px] rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-70"></div>
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,100,120,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
          <div className="absolute inset-0 bg-[url('/dots.svg')] bg-repeat opacity-30"></div>
        </div>
        <div className="space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-200 tracking-tighter">
            <AnimatedText text="WHO AM I?" />
          </h2>
          <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
            <p>
              Hey there! I'm Priyanshu, a data enthusiast fascinated by the stories hidden in numbers. I believe
              we're swimming in data but often missing the meaningful connections. That's where I come in – turning
              complex information into "aha!" moments that actually matter.
            </p>
            <p>
              My journey has taken me from traditional analytics to the exciting world of generative AI, where I'm
              currently exploring how machine learning can solve real human problems. There's something magical
              about teaching machines to understand us better, isn't there?
            </p>
            <p>
              What drives me? Curiosity. I can't help but ask "how?" and "why?" until I get to the heart of things.
              This mindset has helped me adapt across different industries and collaborate with all kinds of
              brilliant minds.
            </p>
            <p>
              When I'm not geeking out over data patterns or fine-tuning AI models, you'll find me brainstorming
              with others – because the best insights often come from unexpected conversations.
            </p>
            <p>Want to chat about data, AI, or how they can transform your ideas? Let's connect!</p>
          </div>
          <div className="pt-4 flex items-center space-x-4">
            <div className="w-12 h-12 rounded-md overflow-hidden border border-gray-800">
              <div className="w-full h-full bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
            </div>
            <div>
              <div className="text-gray-300">Currently listening to</div>
              <div className="text-gray-500 text-sm">Creep - Radiohead</div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
} 