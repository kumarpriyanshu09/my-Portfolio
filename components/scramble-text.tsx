"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"

gsap.registerPlugin(ScrambleTextPlugin)

interface ScrambleTextProps {
  text: string
  className?: string
}

export function ScrambleText({ text, className = "" }: ScrambleTextProps) {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    // Ensure the initial text is present for GSAP to scramble from
    // textRef.current.textContent = text; // Or some placeholder if you want it to animate from blank

    const animation = gsap.to(textRef.current, {
      duration: 2.5,
      scrambleText: {
        text: text,
        chars: "upperAndLowerCase",
        speed: 0.5,
        revealDelay: 0.2, // Time before unscrambling starts
        tweenLength: true,
      },
      ease: "power1.inOut",
      onComplete: () => {
        // Optional: Ensure the final text is set correctly if needed, though GSAP should handle this.
        if (textRef.current) {
          textRef.current.textContent = text;
        }
      }
    })

    return () => {
      animation.kill() // Cleanup the animation on component unmount
    }
  }, [text]) // Rerun if text prop changes

  return (
    <div className={`text-scramble__content ${className}`}>
      {/* Initial text is set here, GSAP will scramble it to the target text */}
      <div ref={textRef} className="text-scramble__text">
        {text} 
      </div>
    </div>
  )
} 