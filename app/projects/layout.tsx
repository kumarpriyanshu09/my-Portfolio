"use client"

import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // This effect will ensure the page loads at the top
  useEffect(() => {
    window.scrollTo(0, 0)

    // Alternative approach if the above doesn't work in all cases
    // setTimeout(() => {
    //   window.scrollTo(0, 0)
    // }, 0)
  }, [])

  return (
    <div className="min-h-screen bg-black text-gray-300">
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 md:p-6 bg-black/80 backdrop-blur-sm">
        <Link href="/">
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </header>
      <main className="pt-24 pb-20">{children}</main>
    </div>
  )
}
