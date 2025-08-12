"use client"

import { useCallback } from "react"

interface CustomMetric {
  name: string
  value: number
  unit?: string
  tags?: Record<string, string>
}

export function useSpeedInsights() {
  const trackCustomMetric = useCallback((metric: CustomMetric) => {
    // Only track in production and when Speed Insights is available
    if (typeof window !== "undefined" && window.si) {
      window.si("metric", {
        name: metric.name,
        value: metric.value,
        unit: metric.unit || "ms",
        tags: metric.tags || {},
      })
    }
  }, [])

  const trackPageLoad = useCallback(
    (pageName: string, loadTime: number) => {
      trackCustomMetric({
        name: "custom_page_load",
        value: loadTime,
        unit: "ms",
        tags: { page: pageName },
      })
    },
    [trackCustomMetric],
  )

  const trackInteraction = useCallback(
    (interaction: string, duration: number) => {
      trackCustomMetric({
        name: "user_interaction",
        value: duration,
        unit: "ms",
        tags: { interaction },
      })
    },
    [trackCustomMetric],
  )

  const trackComponentRender = useCallback(
    (component: string, renderTime: number) => {
      trackCustomMetric({
        name: "component_render",
        value: renderTime,
        unit: "ms",
        tags: { component },
      })
    },
    [trackCustomMetric],
  )

  return {
    trackCustomMetric,
    trackPageLoad,
    trackInteraction,
    trackComponentRender,
  }
}

// Extend the Window interface to include Speed Insights
declare global {
  interface Window {
    si?: (event: string, data: any) => void
  }
}
