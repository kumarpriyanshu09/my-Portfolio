"use client"

import { SpeedInsights } from "@vercel/speed-insights/next"

interface SpeedInsightsConfigProps {
  /**
   * Whether to enable debug mode for Speed Insights
   * This will log additional information to the console
   */
  debug?: boolean
  /**
   * Sample rate for Speed Insights data collection (0-1)
   * 1 = collect from all users, 0.1 = collect from 10% of users
   */
  sampleRate?: number
  /**
   * Custom route labels for better organization in dashboard
   */
  route?: string
}

export function SpeedInsightsConfig({ debug = false, sampleRate = 1, route }: SpeedInsightsConfigProps = {}) {
  return <SpeedInsights debug={debug} sampleRate={sampleRate} route={route} />
}
