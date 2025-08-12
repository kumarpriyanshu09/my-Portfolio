"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { useSpeedInsights } from "@/hooks/use-speed-insights"

interface PerformanceMonitorProps {
  componentName: string
  children: React.ReactNode
  trackRender?: boolean
  trackInteractions?: boolean
}

export function PerformanceMonitor({
  componentName,
  children,
  trackRender = true,
  trackInteractions = false,
}: PerformanceMonitorProps) {
  const { trackComponentRender, trackInteraction } = useSpeedInsights()
  const renderStartTime = useRef<number>()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (trackRender && renderStartTime.current) {
      const renderTime = performance.now() - renderStartTime.current
      trackComponentRender(componentName, renderTime)
    }
  }, [componentName, trackComponentRender, trackRender])

  useEffect(() => {
    renderStartTime.current = performance.now()
  }, [])

  useEffect(() => {
    if (!trackInteractions || !containerRef.current) return

    const handleClick = (event: MouseEvent) => {
      const startTime = performance.now()

      // Track the interaction after a brief delay to capture any immediate effects
      setTimeout(() => {
        const interactionTime = performance.now() - startTime
        const target = event.target as HTMLElement
        const interactionType = target.tagName.toLowerCase()

        trackInteraction(`${componentName}_${interactionType}_click`, interactionTime)
      }, 0)
    }

    const container = containerRef.current
    container.addEventListener("click", handleClick)

    return () => {
      container.removeEventListener("click", handleClick)
    }
  }, [componentName, trackInteraction, trackInteractions])

  return (
    <div ref={containerRef} data-performance-monitor={componentName}>
      {children}
    </div>
  )
}
