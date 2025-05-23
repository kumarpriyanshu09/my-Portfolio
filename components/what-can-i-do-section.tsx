"use client"

import { AnimatedText } from "@/components/animated-text"
import { SkillCard } from "@/components/skill-card"
import { useState, useEffect } from "react"

export function WhatCanIDoSection() {
  // Track if this is a mobile device for optimized loading
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile devices on client-side
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera
      const mobileRegex = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i
      
      setIsMobile(mobileRegex.test(userAgent) || 
                  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(userAgent.substr(0, 4)))
    }
    
    checkMobile()
    
    // Also check window size as a fallback
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const skills = [
    {
      videoSrc: "https://7qd5tdgxs26x480g.public.blob.vercel-storage.com/stacks-VlwpyfNhULEfThT72Hneml32CZrDyY.mp4",
      title: "Data + Analytics",
      hook: "I turn chaos into clarity.",
      description:
        "From messy datasets to meaningful dashboards, I build ETL pipelines that matter and surface insights that move the needle. I use SQL, Python, Power BI, and AWS to make decisions easier and data trustworthy.",
    },
    {
      videoSrc: "https://7qd5tdgxs26x480g.public.blob.vercel-storage.com/coffeemaker-qInRkNNkG0UBRhJAISMFsVtycehAUE.mp4",
      title: "Creative Systems Thinker",
      hook: "I build systems that lift people.",
      description:
        "I thrive on open communication, diverse perspectives, and structured thinking. Whether I'm breaking things to understand them or simplifying complexity, I care about clarity, efficiency, and people feeling heard.",
    },
    {
      videoSrc: "https://7qd5tdgxs26x480g.public.blob.vercel-storage.com/rick-XX01LpCUBTF5BbnN7Y5FUWypjKJeOL.mp4",
      title: "GenAI Explorer",
      hook: "I don't just study GenAI—I build with it.",
      description:
        "From tuning LLMs to wiring up vector databases, I've worked on GenAI projects both academically and hands-on. I keep building, testing, and iterating through each wave of innovation.",
    },
    {
      videoSrc: "https://7qd5tdgxs26x480g.public.blob.vercel-storage.com/flame-RyaSBDXLLcsZasRf0FMQHItX3midr1.mp4",
      title: "Vibe Builder",
      hook: "I build with flow, fun, and fire.",
      description:
        "Whether crafting MVPs or generating content with AI, I vibe with modern tools. I use the latest technologies to fine-tune ideas and keep exploring what's next—with speed, soul, and curiosity.",
    },
  ]

  return (
    <section id="what-can-i-do" className="py-20 px-4 md:px-10 max-w-7xl mx-auto relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/assets/ui/dots.svg')] bg-repeat opacity-5 pointer-events-none"></div>

      <div className="relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-200 tracking-tighter mb-16 text-center">
          <AnimatedText text="WHAT CAN I DO" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              videoSrc={skill.videoSrc}
              title={skill.title}
              hook={skill.hook}
              description={skill.description}
              index={isMobile ? 0 : index} // No delay on mobile for faster loading
            />
          ))}
        </div>
      </div>
    </section>
  )
}
