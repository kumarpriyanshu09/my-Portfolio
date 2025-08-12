import { PerformanceMonitor } from "@/components/performance-monitor"

export function HeroSection() {
  return (
    <PerformanceMonitor componentName="hero-section" trackRender={true} trackInteractions={true}>
      {/* Your existing hero section content */}
    </PerformanceMonitor>
  )
}
