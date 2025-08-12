"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { cn } from '@/lib/utils'; // For conditional classes

interface Heading {
  id: string;
  text: string;
  level: number; // 1 for h1, 2 for h2, etc.
}

interface TableOfContentsProps {
  headings: Heading[];
  scrollOffset?: number;
}

const ACTIVATION_BAND_HEIGHT = 100; // Height of the activation band in pixels

export function TableOfContents({ headings, scrollOffset = 0 }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [visibleHeadings, setVisibleHeadings] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  // We are only interested in h2 for the TOC as per the plan
  const filteredHeadings = useMemo(() => headings.filter(h => h.level === 2), [headings]);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    if (typeof window === 'undefined') return; // Guard against SSR

    observerRef.current = new IntersectionObserver(
      (entries) => {
        setVisibleHeadings(prevVisibleHeadings => {
          const newVisibleHeadings = new Set(prevVisibleHeadings);
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              newVisibleHeadings.add(entry.target.id);
            } else {
              newVisibleHeadings.delete(entry.target.id);
            }
          });
          return newVisibleHeadings;
        });
      },
      {
        rootMargin: `-${Math.max(scrollOffset - 1, 0)}px 0px -${window.innerHeight - scrollOffset - ACTIVATION_BAND_HEIGHT}px 0px`,
        threshold: 0.01, // Trigger as soon as a tiny part is visible within the rootMargin
      }
    );

    const currentObserver = observerRef.current;

    filteredHeadings.forEach((heading: Heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        currentObserver.observe(element);
      }
    });

    return () => {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    };
  }, [filteredHeadings, scrollOffset]); // Removed visibleHeadings to prevent infinite re-render loop

  useEffect(() => {
    if (visibleHeadings.size === 0) {
      // If no headings are in the "activation band", try to find the closest one above the viewport
      // or the first one if all are below.
      let bestFallbackId: string | null = null;
      let smallestNegativeDistance = -Infinity; // For elements above the scrollOffset
      let smallestPositiveDistance = Infinity; // For elements below the scrollOffset (first one)

      filteredHeadings.forEach((heading: Heading) => {
        const element = document.getElementById(heading.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distanceToScrollOffset = rect.top - scrollOffset;

          if (distanceToScrollOffset < 0 && distanceToScrollOffset > smallestNegativeDistance) {
            // Element is above the scrollOffset line and closer than previous
            smallestNegativeDistance = distanceToScrollOffset;
            bestFallbackId = heading.id;
          } else if (distanceToScrollOffset >= 0 && distanceToScrollOffset < smallestPositiveDistance && bestFallbackId === null) {
            // Element is below or at the scrollOffset line, and it's the first one we've encountered in this situation
            // This ensures we pick the topmost one if all are below the scrollOffset
            smallestPositiveDistance = distanceToScrollOffset;
            bestFallbackId = heading.id;
          }
        }
      });
       // If no element is above, and we found one below, use it.
      if (smallestNegativeDistance === -Infinity && smallestPositiveDistance !== Infinity) {
        setActiveId(bestFallbackId);
      } else if (smallestNegativeDistance !== -Infinity) {
         setActiveId(bestFallbackId);
      } else if (filteredHeadings.length > 0) {
        // Default to the first heading if no other logic applies
        setActiveId(filteredHeadings[0].id);
      } else {
        setActiveId(null);
      }
      return;
    }

    // Find the first heading in DOM order that is currently visible
    for (const heading of filteredHeadings) {
      if (visibleHeadings.has(heading.id)) {
        setActiveId(heading.id);
        return;
      }
    }
    // setActiveId(null); // Should not be reached if visibleHeadings is not empty and contains valid IDs
  }, [visibleHeadings, filteredHeadings, scrollOffset]);


  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - scrollOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      // Set activeId immediately for responsiveness, IntersectionObserver will confirm
      setActiveId(id);
    }
  };

  if (!filteredHeadings || filteredHeadings.length === 0) {
    return null;
  }

  return (
    <nav className="sticky top-24 p-4 max-w-xs hidden md:block"> {/* Adjust 'top-24' based on header height */}
      <h3 className="text-lg font-semibold mb-3 text-gray-300">On this page</h3>
      <ul className="space-y-2">
        {filteredHeadings.map((heading: Heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleClick(e, heading.id)}
              className={cn(
                "block text-sm hover:text-pink-400 transition-colors",
                activeId === heading.id ? "text-pink-500 font-semibold" : "text-gray-400"
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
