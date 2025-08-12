"use client"

import Link from "next/link"
import { MainNavigation } from "@/components/organisms/main-navigation"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800/50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-200">Priyanshu Kumar</span>
          </Link>
          <MainNavigation />
        </div>
      </div>
    </header>
  )
}
