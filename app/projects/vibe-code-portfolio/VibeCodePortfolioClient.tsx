"use client";

import React, { useEffect, useState, useRef } from 'react';
import { TableOfContents } from '@/components/table-of-contents'; // Adjust path if necessary

interface Heading {
  id: string;
  text: string;
  level: number;
}

const VibeCodePortfolioClient = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const headingElements = Array.from(contentRef.current.querySelectorAll('h2'));
    const extractedHeadings = headingElements.map((el, index) => {
      let id = el.id;
      if (!id) {
        // Sanitize text content to create a URL-friendly ID
        const sanitizedText = el.textContent?.toLowerCase()
          .replace(/\s+/g, '-') // Replace spaces with hyphens
          .replace(/[^\w-]+/g, '') // Remove all non-word chars except hyphens
          .replace(/--+/g, '-') // Replace multiple hyphens with single
          .replace(/^-+|-+$/g, ''); // Trim hyphens from start/end
        id = sanitizedText || `heading-${index}`;
        el.id = id;
      }
      return { id, text: el.textContent || '', level: 2 };
    });
    setHeadings(extractedHeadings);
  }, []); // Runs once after mount

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-1/4 lg:w-1/5">
          <TableOfContents headings={headings} scrollOffset={96} />
        </aside>

        <article 
          ref={contentRef} 
          className="md:w-3/4 lg:w-4/5 prose prose-invert max-w-none 
                     prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-4 
                     prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h2:border-b prose-h2:border-gray-700 prose-h2:pb-2
                     prose-h3:text-2xl prose-h3:font-bold prose-h3:mt-6 prose-h3:mb-3
                     prose-p:mb-4 prose-p:leading-relaxed
                     prose-ul:list-disc prose-ul:ml-6 prose-ul:mb-4
                     prose-pre:bg-gray-800 prose-pre:text-gray-300 prose-pre:p-4 prose-pre:rounded-md prose-pre:mb-4
                     prose-hr:my-8 prose-hr:border-gray-700
                     prose-strong:font-semibold
                     prose-em:italic"
        >
          <h1>From Blank Canvas to Digital Masterpiece: How I Built My Portfolio in the Age of AI</h1>
          <p><em>The story of vibe coding, AI collaboration, and why the future of development is more creative than you think</em></p>
          <hr />

          <h2>The 2 AM Revelation</h2>
          <p>Picture this: It&apos;s 2 AM, I&apos;m staring at a blank VS Code window, and the cursor is blinking mockingly at me. I need a portfolio that doesn&apos;t just showcase my work—it needs to tell my story, capture my personality, and make visitors think &quot;I need to connect with this person.&quot;</p>
          <p>But here&apos;s the thing that changed everything: Instead of diving into another generic template or spending weeks perfecting CSS animations, I decided to embrace what I call <strong>&quot;vibe coding&quot;</strong>—a completely new approach to building digital experiences using AI as my creative partner.</p>
          <p>Three weeks later, you&apos;re reading this post on that very portfolio. And honestly? It might be the most authentic representation of who I am as a developer that I&apos;ve ever created.</p>
          <hr />

          <h2>What the Hell is Vibe Coding?</h2>
          <p>Let me explain this concept that&apos;s been brewing in my mind. Traditional coding feels like translating your creative vision through layers of technical constraints. You have an idea, then you battle with frameworks, fight with CSS, debug for hours, and somewhere along the way, the original spark gets lost.</p>
          <p>Vibe coding is different. It&apos;s about staying in the creative flow state while AI handles the technical heavy lifting. Instead of asking &quot;How do I code this?&quot;, I started asking &quot;What feeling do I want this to evoke?&quot;</p>
          <p>The result? A portfolio that actually feels like <em>me</em>—not like a sanitized, corporate version of me.</p>
          <hr />

          <h2>The AI Dream Team That Made It Happen</h2>
          <h3>v0.dev: The MVP Creator</h3>
          <p>I started with v0.dev, and honestly, it felt like magic. This is where the foundation came to life. Instead of writing component boilerplate from scratch, I could describe the vibe I wanted:</p>
          <p><em>&quot;Create a hero section that feels like floating in digital space, with my name appearing like it&apos;s being typed by a ghost, but make it elegant, not cheesy.&quot;</em></p>
          <p>v0.dev didn&apos;t just give me code—it gave me a solid MVP that already had personality. The component structure, the basic animations, the responsive design—all emerged from conversations about feelings and aesthetics rather than technical specifications. But here&apos;s the thing: v0.dev got me 80% there, but that last 20%? That&apos;s where the real magic happened.</p>

          <h3>Cursor &amp; Windsurf: The Nuance Masters</h3>
          <p>Here&apos;s where things got really interesting. v0.dev created the foundation, but Cursor and Windsurf became my detail-obsessed partners for adding those subtle touches that make all the difference.</p>
          <p>Want custom animations that weren&apos;t supported in v0.dev? Cursor helped me craft them with precision. Need to integrate my own images seamlessly? Windsurf understood exactly how to make them feel native to the design. Those micro-interactions, the perfect timing on hover states, the way elements flow into each other with just the right easing—this is where Cursor and Windsurf shined.</p>
          <p>They&apos;re not just coding assistants; they&apos;re nuance detectives. They helped me add personality to every pixel, fine-tune every transition, and polish every interaction until it felt authentically <em>mine</em>.</p>

          <h3>ChatGPT + Kling AI: The Airbnb-Inspired Visual Revolution</h3>
          <p>Remember when Airbnb released that stunning animation that had everyone on Twitter/X talking? The one where people were debating whether it was actually a video file? That sparked something in me.</p>
          <p>I wanted that same kind of mesmerizing, almost hypnotic quality for my &quot;Who Am I&quot; section. But instead of trying to recreate what they did, I wanted to make something uniquely mine.</p>
          <p>Here&apos;s how the magic happened: I started with ChatGPT to create a 3D asymmetric image—something abstract yet personal, geometric yet organic. The prompt was specific:</p>
          <p><em>&quot;Create a 3D asymmetric composition that represents the intersection of creativity and technology—floating geometric shapes with organic curves, rendered in a dreamy, ethereal style.&quot;</em></p>
          <p>Once I had this stunning static image, I brought it to Kling AI with carefully crafted prompts to animate it. The goal wasn&apos;t flashy motion, but subtle, mesmerizing movement that draws you in and makes you pause.</p>
          <p>The result? That floating, breathing animation you see in my &quot;Who Am I&quot; section. It&apos;s not just decoration—it&apos;s a visual metaphor for how I think, create, and solve problems. And the best part? People actually stop and watch it, just like I hoped they would with Airbnb&apos;s animation.</p>
          <hr />

          <h2>The Technical Poetry Behind the Scenes</h2>
          <p>Let me show you what this vibe coding approach actually produced. Here&apos;s a glimpse into the heart of the portfolio:</p>
          <pre><code className="language-css">
{`.text-scramble__content {
  font-size: 15vw;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1;
  color: #dfdcff;
  /* This isn't just text—it's a feeling */
}

.gradient-text {
  background: linear-gradient(to right, #ff6b6b, #a16bff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  /* Words that literally glow with personality */
}`}
          </code></pre>
          <p>Notice how even the CSS comments reflect the vibe coding approach? This isn&apos;t just functional code—it&apos;s code with intention, personality, and story.</p>
          <p>The custom font loading, the carefully crafted color palette (those CSS custom properties aren&apos;t random—each one was chosen to evoke specific emotions), the smooth scroll behavior—every technical decision serves the larger narrative.</p>
          <hr />

          <h2>Vercel: Beyond Static, Into Dynamic</h2>
          <p>Here&apos;s the thing about modern portfolios—they&apos;re not just static websites anymore. With videos, animations, and interactive elements, I needed a deployment solution that could handle the complexity while keeping everything lightning-fast.</p>
          <p>While GitHub Pages could have worked for a basic site, I wanted to explore something new. Enter Vercel.</p>
          <p>Vercel turned what used to be an anxiety-inducing deployment process into something almost magical. One push to GitHub, and suddenly my creation was live, globally distributed, and optimized automatically. But Vercel isn&apos;t just about deployment—it&apos;s about the entire experience.</p>
          <p><strong>Vercel Blob</strong> became my media hub. All those custom videos I created with Kling AI, the high-resolution images from ChatGPT, the documentation assets—everything found its perfect home in Vercel Blob. Upload once, access everywhere, with automatic optimization and global CDN distribution.</p>
          <p><strong>Vercel Analytics</strong> gave me something I&apos;d never had before: real insight into how people actually experience my work. Not just page views, but the full story:</p>
          <ul>
            <li>Where visitors are coming from (geographically and referrer-wise)</li>
            <li>What devices they&apos;re using to view my work</li>
            <li>How fast the site loads on different connections</li>
            <li>Which sections capture attention and which ones people skip</li>
          </ul>
          <p>It&apos;s like having a window into the minds of my visitors, and it&apos;s been invaluable for understanding what resonates. Plus, seeing those real-time visitor numbers come in after putting so much effort into the portfolio? That&apos;s a special kind of validation.</p>
          <p>The speed insights alone were worth it—knowing that my carefully crafted animations load smoothly on mobile devices, that the videos stream without buffering, that the overall experience is consistently fast... that&apos;s the kind of peace of mind you can&apos;t put a price on.</p>
          <hr />

          <h2>Claude: The Brain Dump Translator</h2>
          <p>Let me be honest—I&apos;m not a natural writer. My brain works in code, concepts, and visual ideas. But I had this entire journey brewing in my head, all these insights and experiences that I knew would resonate with other developers.</p>
          <p>So I did what felt natural in the age of AI: I brain-dumped everything to Claude.</p>
          <p>Not in a &quot;write this for me&quot; way, but in a &quot;help me translate my thoughts into something people will actually want to read&quot; way. I poured out all my experiences, my excitement about these tools, my insights about the future of development—basically everything you&apos;re reading here, but in my chaotic, stream-of-consciousness style.</p>
          <p>Claude didn&apos;t write this post. I did. But Claude helped me find the words, structure the narrative, and polish the rough edges. It&apos;s still my brain, my experiences, my voice—just amplified and refined through AI collaboration.</p>
          <p>This is exactly what I mean by vibe coding extending beyond just development. When you have AI partners who understand context and can help you express your ideas clearly, you can focus on the substance while they help with the presentation.</p>
          <hr />

          <h2>Napkin.ai: Making the Complex Beautiful</h2>
          <p>Soon, I&apos;ll be adding diagrams to visualize this entire process—the flow from idea to implementation, the interconnections between different AI tools, the creative pipeline that makes vibe coding possible. Napkin.ai will help transform these abstract concepts into visual stories that are as engaging as they are informative.</p>
          <hr />

          <h2>The Three-Day Sprint That Changed Everything</h2>
          <p>Here&apos;s what blows my mind: This entire portfolio—from concept to deployed reality—took me just three days.</p>
          <p>Three days to go from blank canvas to a portfolio that authentically represents who I am as a developer and creative thinker. Three days to experiment with cutting-edge tools, create custom animations, generate unique visuals, and deploy a professional-grade website.</p>
          <p>But here&apos;s the thing—those three days weren&apos;t spent fighting with code or debugging CSS. They were spent in pure creative flow, making decisions about user experience, crafting the narrative, and fine-tuning the details that make visitors pause and think &quot;this person gets it.&quot;</p>

          <h2>The Tools I Tried (And Why Some Didn&apos;t Make the Cut)</h2>
          <p>The journey wasn&apos;t just about the tools that made it into the final portfolio. During those three intense days, I experimented with everything I could get my hands on:</p>
          <p><strong>Runway</strong> and other video generation tools caught my attention, but Kling AI felt more intuitive for the specific aesthetic I was after. Sometimes it&apos;s not about the most powerful tool—it&apos;s about the one that speaks your creative language.</p>
          <p><strong>Jules</strong> (Google&apos;s new async agent) was fascinating to play with. Since I didn&apos;t need unit tests for a portfolio website, I decided to experiment with Jules anyway, just to see what it could do. The result? Comprehensive test coverage that I didn&apos;t actually need, but gave me insight into how AI agents think about code quality and edge cases.</p>
          <p>The point is: the AI revolution isn&apos;t just about using one perfect tool. It&apos;s about having an entire ecosystem of intelligent collaborators at your fingertips, each with their own strengths, ready to help you bring ideas to life.</p>
          <hr />

          <h2>The Uncomfortable Truth About AI and Creativity</h2>
          <p>Here&apos;s what no one talks about: Using AI tools like this doesn&apos;t make you less of a developer—it makes you more of a creator. Instead of spending 80% of my time on boilerplate and debugging, I spent 80% of my time on design decisions, user experience, and creative problem-solving.</p>
          <p>The portfolio you see isn&apos;t just technically competent (though it is). It&apos;s not just visually appealing (though I think it is). It&apos;s authentically, unmistakably me—but amplified, polished, and presented in a way that would have taken me months to achieve using traditional methods.</p>
          <hr />

          <h2>The Future Is Already Here</h2>
          <p>This portfolio project taught me something profound: We&apos;re not just in the early days of AI-assisted development. We&apos;re in the early days of AI-assisted creativity, AI-assisted storytelling, AI-assisted human expression.</p>
          <p>The tools I used—v0.dev, Cursor, Windsurf, ChatGPT, Kling AI, Vercel, Claude, and soon Napkin.ai—they&apos;re not just making development easier. They&apos;re making it more human.</p>
          <p>When you don&apos;t have to worry about the technical constraints, when the implementation flows naturally from your creative vision, when your ideas can become reality at the speed of thought... that&apos;s when the real magic happens.</p>
          <hr />

          <h2>Your Turn to Vibe Code</h2>
          <p>If you&apos;re still building websites the old way—fighting with frameworks, debugging CSS at 3 AM, letting technical limitations constrain your creativity—you&apos;re working harder than you need to.</p>
          <p>The tools are here. The future is now. The only question is: What story do you want to tell?</p>
          <p>And more importantly: What&apos;s stopping you from telling it?</p>
          <hr />

          <p><em>This portfolio and this post are living proof that the age of AI-assisted creativity isn&apos;t coming—it&apos;s here. And honestly? It&apos;s more exciting than I ever imagined.</em></p>
          <p><strong>Want to connect and create something amazing together?</strong> Feel free to reach out—I&apos;d love to hear about your projects and explore how we can collaborate to build something extraordinary.</p>
          <hr />

          <h3>Tech Stack That Made This Possible:</h3>
          <ul>
            <li><strong>MVP Creation</strong>: v0.dev for rapid prototyping and foundation</li>
            <li><strong>Fine-tuning &amp; Nuances</strong>: Cursor &amp; Windsurf for custom animations and personal touches</li>
            <li><strong>Visual Creation</strong>: ChatGPT for 3D image generation</li>
            <li><strong>Animation</strong>: Kling AI for bringing static visuals to life</li>
            <li><strong>Deployment</strong>: Vercel with Blob storage for media assets</li>
            <li><strong>Analytics</strong>: Vercel Analytics for performance and user insights</li>
            <li><strong>Content Creation</strong>: Claude for translating ideas into engaging narrative</li>
            <li><strong>Diagram Creation</strong>: Napkin.ai (coming soon for visual storytelling)</li>
            <li><strong>Experimentation</strong>: Jules, Runway, and other tools that didn&apos;t make the final cut but enriched the journey</li>
          </ul>
          <p><em>Each tool played a unique role in bringing this vision to life in just three days—not as replacements for human creativity, but as amplifiers of it.</em></p>
        </article>
      </div>
    </div>
  );
};

export default VibeCodePortfolioClient;
