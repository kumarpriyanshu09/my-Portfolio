"use client"

import { forwardRef, ReactNode, ElementType } from "react"
import { cn } from "@/lib/utils"
import { Container } from "@/components/layout/container"

interface SectionLayoutProps {
  id?: string
  className?: string
  children: ReactNode
  containerClassName?: string
  withContainer?: boolean
  as?: "section" | "div" | "article"
  containerSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "full"
}

// Helper type to dynamically define the right ref type based on the component element
type SectionElement = HTMLDivElement | HTMLElement | HTMLTableSectionElement

export const SectionLayout = forwardRef<SectionElement, SectionLayoutProps>(
  (
    {
      id,
      className,
      children,
      containerClassName,
      withContainer = true,
      as = "section",
      containerSize = "xl",
    },
    ref
  ) => {
    const Component = as as ElementType
    
    return (
      <Component
        ref={ref}
        id={id}
        className={cn("py-16 md:py-20", className)}
      >
        {withContainer ? (
          <Container maxWidth={containerSize} className={containerClassName}>
            {children}
          </Container>
        ) : (
          children
        )}
      </Component>
    )
  }
)

SectionLayout.displayName = "SectionLayout"
