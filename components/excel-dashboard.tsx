"use client"

import { useEffect, useRef } from "react"

export function ExcelDashboard() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Adjust iframe height responsively if needed
    const handleResize = () => {
      if (containerRef.current) {
        const iframe = containerRef.current.querySelector("iframe")
        if (iframe) {
          // Optional: make responsive adjustments here if needed
        }
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div ref={containerRef} className="w-full flex justify-center">
      <iframe
        src="https://1drv.ms/x/c/9b21f72f5ee56f92/IQRkx5vw3kkCT49mHefQ0d28AaPoQn8iMN8idk-I8eZNjqM"
        width="100%"
        height="500"
        frameBorder="0"
        scrolling="no"
        className="max-w-full"
        title="Healthcare Sales Performance Dashboard"
        allowFullScreen
      ></iframe>
    </div>
  )
}
