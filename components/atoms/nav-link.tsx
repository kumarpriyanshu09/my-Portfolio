"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface NavLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
  isActive?: boolean
}

export function NavLink({ 
  href, 
  children, 
  className,
  onClick,
  isActive = false 
}: NavLinkProps) {
  const isExternal = href.startsWith('http')
  
  const linkProps = isExternal ? {
    target: "_blank",
    rel: "noopener noreferrer"
  } : {}
  
  return (
    <Link
      href={href}
      className={cn(
        "transition-colors duration-200",
        isActive ? "text-white font-medium" : "text-gray-400 hover:text-white",
        className
      )}
      onClick={onClick}
      {...linkProps}
    >
      {children}
    </Link>
  )
}
