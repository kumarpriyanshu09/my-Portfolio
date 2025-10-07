"use client"

import { useEffect, useRef } from "react"

export function TableauDashboard() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // This code will run on the client side after the component mounts
    if (!containerRef.current) return

    const divElement = containerRef.current
    const vizElement = divElement.getElementsByTagName("object")[0]

    if (vizElement) {
      vizElement.style.width = "100%"
      vizElement.style.height = divElement.offsetWidth * 0.75 + "px"

      const scriptElement = document.createElement("script")
      scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js"
      vizElement.parentNode?.insertBefore(scriptElement, vizElement)
    }

    // Cleanup function
    return () => {
      // Remove any event listeners or scripts if needed
    }
  }, [])

  return (
    <div ref={containerRef}>
      <div className="tableauPlaceholder" id="viz1746847800606" style={{ position: "relative" }}>
        <noscript>
          <a href="#">
            <img
              alt="Story 1"
              src="/images/design-mode/1_rss.png"
              style={{ border: "none" }}
            />
          </a>
        </noscript>
        <object className="tableauViz" style={{ display: "none" }}>
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
          <param name="embed_code_version" value="3" />
          <param name="site_root" value="" />
          <param name="name" value="AIsRiseandSocietalImpactDashboard&#47;Story1" />
          <param name="tabs" value="no" />
          <param name="toolbar" value="yes" />
          <param
            name="static_image"
            value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;AI&#47;AIsRiseandSocietalImpactDashboard&#47;Story1&#47;1.png"
          />
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
          <param name="language" value="en-US" />
        </object>
      </div>
    </div>
  )
}
