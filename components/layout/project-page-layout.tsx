"use client";

import React, { useEffect, useState, useRef, ReactNode } from "react";
import { TableOfContents } from "@/components/table-of-contents";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface ProjectPageLayoutProps {
  children: ReactNode;
}

export default function ProjectPageLayout({ children }: ProjectPageLayoutProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    const headingElements = Array.from(
      contentRef.current.querySelectorAll("h2, h3")
    );
    const extractedHeadings = headingElements.map((elAsUnknown, index) => {
      const el = elAsUnknown as HTMLHeadingElement;
      let id = el.id;
      if (!id) {
        const sanitizedText = el.textContent?.toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+|-+$/g, "");
        id = sanitizedText || `heading-${index}`;
        el.id = id;
      }
      return {
        id,
        text: el.textContent || "",
        level: parseInt(el.tagName.substring(1), 10),
      };
    });
    setHeadings(extractedHeadings);
  }, [children]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-1/4 lg:w-1/5 sticky top-24 self-start max-h-[calc(100vh-6rem)] overflow-y-auto hidden md:block">
          <TableOfContents headings={headings} scrollOffset={96} />
        </aside>
        <article
          ref={contentRef}
          className="md:w-3/4 lg:w-4/5"
        >
          {children}
        </article>
      </div>
    </div>
  );
}
