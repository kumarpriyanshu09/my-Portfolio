"use client"

import { useEffect, useRef } from "react"

interface CredlyBadgeProps {
  badgeId: string
  width?: number
  height?: number
}

export function CredlyBadge({ badgeId, width = 150, height = 270 }: CredlyBadgeProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create script element
    const script = document.createElement("script")
    script.src = "//cdn.credly.com/assets/utilities/embed.js"
    script.async = true
    script.type = "text/javascript"

    // Add script to document
    document.body.appendChild(script)

    // Clean up
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      data-iframe-width={width}
      data-iframe-height={height}
      data-share-badge-id={badgeId}
      data-share-badge-host="https://www.credly.com"
      className="flex items-center justify-center w-full h-full min-h-[270px]"
    />
  )
}
