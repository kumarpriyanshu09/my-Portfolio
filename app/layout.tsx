import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/lib/contexts/theme-context"
import { ErrorBoundary } from "@/components/error-boundary"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { SpeedInsightsDashboard } from "@/components/speed-insights-dashboard"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Priyanshu Kumar | Portfolio",
  description: "Personal portfolio of Priyanshu Kumar, a design-minded developer",
  generator: "v0.dev",
  icons: "/assets/ui/favicon.png",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <ErrorBoundary>
            <Suspense fallback={<div className="min-h-screen bg-black" />}>{children}</Suspense>
            <Analytics />
            <SpeedInsights debug={process.env.NODE_ENV === "development"} sampleRate={1} />
            <SpeedInsightsDashboard />
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  )
}
