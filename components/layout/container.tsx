"use client"

import { cn } from "@/lib/utils"
import React, { ReactNode, forwardRef } from "react"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full"
  className?: string
  id?: string
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, maxWidth = "xl", className, id, ...props }, ref) => {
    const maxWidthClass = {
      sm: "max-w-screen-sm",
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-7xl",
      "2xl": "max-w-screen-2xl",
      full: "max-w-full",
    }[maxWidth]

    return (
      <div
        ref={ref}
        id={id}
        className={cn("w-full mx-auto px-4 md:px-6 lg:px-8", maxWidthClass, className)}
        {...props}
      >
        {children}
      </div>
    )
  }
) 