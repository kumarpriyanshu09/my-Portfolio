"use client"

import { AnimatedText } from "@/components/animated-text"
import { SectionLayout } from "@/components/templates/section-layout"
import { useRef, useEffect } from "react"

export function AboutSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const hasPlayedOnView = useRef(false)

  // Play video fully only the first time About section enters viewport
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayedOnView.current) {
            if (videoRef.current) {
              videoRef.current.currentTime = 0
              videoRef.current.play()
              hasPlayedOnView.current = true
            }
          }
        })
      },
      { threshold: 0.5 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  // Play on hover (desktop)
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
    }
  }

  // Play on tap (mobile)
  const handleTouchStart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
    }
  }

  return (
    <SectionLayout id="about">
      <div ref={sectionRef} className="grid md:grid-cols-2 gap-12 items-center">
        <div
          className="w-full max-w-xs md:max-w-sm aspect-[9/16] mx-auto"
          onMouseEnter={handleMouseEnter}
          onTouchStart={handleTouchStart}
        >
          <video
            ref={videoRef}
            src="/video/soy.mp4"
            className="w-full h-full object-cover bg-black"
            preload="none"
            tabIndex={0}
            title="Intro video"
            playsInline
            loop={false}
            controls={false}
            aria-label="Intro video"
            poster="/placeholder.svg"
            muted
          >
            Sorry, your browser does not support embedded videos.
          </video>
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