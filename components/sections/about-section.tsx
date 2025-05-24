"use client"

import { AnimatedText } from "@/components/animated-text"
import { SectionLayout } from "@/components/templates/section-layout"
import { useRef, useEffect } from "react"
import { useVideoAutoplay } from "@/hooks/useVideoAutoplay"

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { 
    videoRef,
    containerRef,
    isPlaying,
    playVideo
  } = useVideoAutoplay({
    threshold: 0.5, // Increased threshold for better timing
    resetOnExit: true, // Reset when out of view
    preload: "auto" // Changed to auto for better loading
  })

  // Handle manual interaction events
  const handleInteraction = () => {
    if (videoRef.current) {
      // Only restart video if it's not currently playing
      if (!isPlaying) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(error => {
          console.log("Playback failed:", error);
        });
      }
    }
  }

  return (
    <SectionLayout id="about">
      <div ref={sectionRef} className="grid md:grid-cols-2 gap-12 items-center">
        <div
          ref={containerRef}
          className="w-full max-w-xs md:max-w-sm aspect-[9/16] mx-auto"
          onMouseEnter={handleInteraction}
          onTouchStart={handleInteraction}
          onClick={handleInteraction}
        >
          <video
            ref={videoRef}
            src="https://7qd5tdgxs26x480g.public.blob.vercel-storage.com/soy-ctWQMpIF5RKt61yILQlITFOvhsMeZp.mp4"
            className="w-full h-full object-cover bg-black"
            tabIndex={0}
            title="Intro video"
            playsInline={true}
            loop={false}
            muted={true}
            autoPlay={true}
            preload="auto"
            poster="/assets/ui/placeholder.svg"
            aria-label="Intro video"
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

        </div>
      </div>
    </SectionLayout>
  )
}