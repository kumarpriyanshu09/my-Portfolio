import React from 'react';
import { render, screen } from '@testing-library/react';
import { AboutSection } from '../about-section';

// Mock AnimatedText component
jest.mock('@/components/animated-text', () => ({
  AnimatedText: ({ text }: { text: string }) => <span>{text}</span>,
}));

// Mock useVideoAutoplay hook
jest.mock('@/hooks/useVideoAutoplay', () => ({
  useVideoAutoplay: jest.fn(() => ({
    videoRef: React.createRef<HTMLVideoElement>(),
    containerRef: React.createRef<HTMLDivElement>(),
    isPlaying: false,
    playVideo: jest.fn(),
  })),
}));

// Mock SectionLayout component
jest.mock('@/components/templates/section-layout', () => ({
    SectionLayout: ({ children, id }: { children: React.ReactNode, id: string }) => (
        <section id={id} aria-label="section">{children}</section> // Added aria-label
    ),
}));


describe('AboutSection Component', () => {
  beforeEach(() => {
    // Reset mocks if necessary, or provide fresh mock implementations
    (jest.requireMock('@/hooks/useVideoAutoplay') as any).useVideoAutoplay.mockImplementation(() => ({
        videoRef: React.createRef<HTMLVideoElement>(),
        containerRef: React.createRef<HTMLDivElement>(),
        isPlaying: false,
        playVideo: jest.fn(),
    }));
  });

  it('renders the "WHO AM I?" heading', () => {
    render(<AboutSection />);
    // The AnimatedText mock will render the text directly
    expect(screen.getByText('WHO AM I?')).toBeInTheDocument();
  });

  it('renders key static text content', () => {
    render(<AboutSection />);
    expect(screen.getByText(/Hey there! I'm Priyanshu/)).toBeInTheDocument();
    expect(screen.getByText(/My journey has taken me from traditional analytics/)).toBeInTheDocument();
    expect(screen.getByText(/What drives me\? Curiosity\./)).toBeInTheDocument();
  });

  it('renders the video element with a title', () => {
    render(<AboutSection />);
    const videoElement = screen.getByTitle('Intro video');
    expect(videoElement).toBeInTheDocument();
    expect(videoElement).toHaveAttribute('src', 'https://7qd5tdgxs26x480g.public.blob.vercel-storage.com/soy-ctWQMpIF5RKt61yILQlITFOvhsMeZp.mp4');
  });

  it('renders the SectionLayout wrapper with correct id', () => {
    render(<AboutSection />);
    const sectionElement = screen.getByRole('region'); // SectionLayout mock renders a <section>
    expect(sectionElement).toHaveAttribute('id', 'about');
  });
});
