// app/projects/vibe-code-portfolio/page.tsx
import VibeCodePortfolioClient from './VibeCodePortfolioClient'; // Import the client component
import './styles.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "From Blank Canvas to Digital Masterpiece: My AI Portfolio Story | Priyanshu Kumar",
  description: "The story of vibe coding, AI collaboration, and how I built my portfolio in the age of AI.",
};

export default function VibeCodePortfolioPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* The main content, including Table of Contents and article, is now handled by VibeCodePortfolioClient */}
      <VibeCodePortfolioClient />
    </div>
  );
}
