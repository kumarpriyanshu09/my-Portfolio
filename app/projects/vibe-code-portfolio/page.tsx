// app/projects/vibe-code-portfolio/page.tsx
import VibeCodePortfolioClient from './VibeCodePortfolioClient';
import './styles.css';
import { Metadata } from 'next'; // Import Metadata type

export const metadata: Metadata = { // Add type annotation
  title: "From Blank Canvas to Digital Masterpiece: My AI Portfolio Story | Priyanshu Kumar",
  description: "The story of vibe coding, AI collaboration, and how I built my portfolio in the age of AI.",
};

export default function VibeCodePortfolioPage() {
  return (
    <div className="bg-background text-foreground min-h-screen"> {/* Added a root container with background/text color */}
      <VibeCodePortfolioClient />
    </div>
  );
}
