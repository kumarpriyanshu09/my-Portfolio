"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface PerformanceMetrics {
  lcp: number | null // Largest Contentful Paint
  fid: number | null // First Input Delay
  cls: number | null // Cumulative Layout Shift
  fcp: number | null // First Contentful Paint
  ttfb: number | null // Time to First Byte
}

export function SpeedInsightsDashboard() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
  })

  useEffect(() => {
    // Only run in development mode for debugging
    if (process.env.NODE_ENV !== "development") return

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === "largest-contentful-paint") {
          setMetrics((prev) => ({ ...prev, lcp: entry.startTime }))
        } else if (entry.entryType === "first-input") {
          setMetrics((prev) => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }))
        } else if (entry.entryType === "layout-shift") {
          if (!(entry as any).hadRecentInput) {
            setMetrics((prev) => ({ ...prev, cls: (prev.cls || 0) + (entry as any).value }))
          }
        } else if (entry.entryType === "paint" && entry.name === "first-contentful-paint") {
          setMetrics((prev) => ({ ...prev, fcp: entry.startTime }))
        } else if (entry.entryType === "navigation") {
          const navEntry = entry as PerformanceNavigationTiming
          setMetrics((prev) => ({ ...prev, ttfb: navEntry.responseStart - navEntry.requestStart }))
        }
      }
    })

    try {
      observer.observe({
        entryTypes: ["largest-contentful-paint", "first-input", "layout-shift", "paint", "navigation"],
      })
    } catch (e) {
      console.warn("Performance Observer not supported")
    }

    return () => observer.disconnect()
  }, [])

  const getScoreColor = (metric: string, value: number | null) => {
    if (value === null) return "secondary"

    switch (metric) {
      case "lcp":
        return value <= 2500 ? "default" : value <= 4000 ? "secondary" : "destructive"
      case "fid":
        return value <= 100 ? "default" : value <= 300 ? "secondary" : "destructive"
      case "cls":
        return value <= 0.1 ? "default" : value <= 0.25 ? "secondary" : "destructive"
      case "fcp":
        return value <= 1800 ? "default" : value <= 3000 ? "secondary" : "destructive"
      case "ttfb":
        return value <= 800 ? "default" : value <= 1800 ? "secondary" : "destructive"
      default:
        return "secondary"
    }
  }

  const formatValue = (metric: string, value: number | null) => {
    if (value === null) return "N/A"

    switch (metric) {
      case "cls":
        return value.toFixed(3)
      default:
        return `${Math.round(value)}ms`
    }
  }

  // Only show in development
  if (process.env.NODE_ENV !== "development") {
    return null
  }

  return (
    <Card className="fixed bottom-4 right-4 w-80 z-50 bg-background/95 backdrop-blur">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm">Speed Insights (Dev)</CardTitle>
        <CardDescription className="text-xs">Core Web Vitals metrics for current page</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex justify-between">
            <span>LCP:</span>
            <Badge variant={getScoreColor("lcp", metrics.lcp)} className="text-xs">
              {formatValue("lcp", metrics.lcp)}
            </Badge>
          </div>
          <div className="flex justify-between">
            <span>FID:</span>
            <Badge variant={getScoreColor("fid", metrics.fid)} className="text-xs">
              {formatValue("fid", metrics.fid)}
            </Badge>
          </div>
          <div className="flex justify-between">
            <span>CLS:</span>
            <Badge variant={getScoreColor("cls", metrics.cls)} className="text-xs">
              {formatValue("cls", metrics.cls)}
            </Badge>
          </div>
          <div className="flex justify-between">
            <span>FCP:</span>
            <Badge variant={getScoreColor("fcp", metrics.fcp)} className="text-xs">
              {formatValue("fcp", metrics.fcp)}
            </Badge>
          </div>
          <div className="flex justify-between col-span-2">
            <span>TTFB:</span>
            <Badge variant={getScoreColor("ttfb", metrics.ttfb)} className="text-xs">
              {formatValue("ttfb", metrics.ttfb)}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
