"use client";

import { useState, useEffect, useCallback } from 'react';
// import Link from 'next/link'; // Though for same-page links, <a> might be simpler
import { cn } from '@/lib/utils'; // For conditional classes

interface Heading {
  id: string;
  text: string;
  level: number; // 1 for h1, 2 for h2, etc.
}

interface TableOfContentsProps {
  headings: Heading[];
  // Optional: offset for scroll position, if there's a fixed header
  scrollOffset?: number; 
}

export function TableOfContents({ headings, scrollOffset = 0 }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleScroll = useCallback(() => {
    let currentActiveId: string | null = null;
    let smallestDistance = Infinity;

    headings.forEach(heading => {
      const element = document.getElementById(heading.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        // Check if the top of the element is within a certain range from the top of the viewport
        // The range can be adjusted, e.g., from 0 to 1/4 of viewport height
        // Or, more simply, find the one closest to the top (scrollOffset)
        const distanceToTop = Math.abs(rect.top - scrollOffset);

        if (rect.top >= 0 && rect.top <= window.innerHeight * 0.5 && distanceToTop < smallestDistance) {
            smallestDistance = distanceToTop;
            currentActiveId = heading.id;
        } else if (currentActiveId === null && distanceToTop < smallestDistance) {
            // Fallback for elements not strictly in the "ideal" view but still closest
            smallestDistance = distanceToTop;
            currentActiveId = heading.id;
        }
      }
    });
    setActiveId(currentActiveId);
  }, [headings, scrollOffset]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - scrollOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      // Optionally set activeId here too, though scroll handler should catch it
      setActiveId(id);
    }
  };

  if (!headings || headings.length === 0) {
    return null;
  }

  // We are only interested in h2 for the TOC as per the plan
  const filteredHeadings = headings.filter(h => h.level === 2);

  return (
    <nav className="sticky top-24 p-4 max-w-xs hidden md:block"> {/* Adjust 'top-24' based on header height */}
      <h3 className="text-lg font-semibold mb-3 text-gray-300">On this page</h3>
      <ul className="space-y-2">
        {filteredHeadings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
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
