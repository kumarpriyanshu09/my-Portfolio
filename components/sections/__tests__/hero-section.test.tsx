import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeroSection } from '../hero-section';

// Mock ScrambleText component
jest.mock('@/components/scramble-text', () => ({
  ScrambleText: ({ text }: { text: string }) => <span>{text}</span>,
}));

// Mock VercelBadge component
jest.mock('@/components/vercel-badge', () => ({
  VercelBadge: () => <div data-testid="vercel-badge-mock">Vercel Badge</div>,
}));

// Mock SectionLayout component
jest.mock('@/components/templates/section-layout', () => ({
  SectionLayout: ({ children, className, containerClassName }: { children: React.ReactNode, className?: string, containerClassName?: string }) => (
    <section className={className} data-testid="section-layout">
      <div className={containerClassName}>{children}</div>
    </section>
  ),
}));

describe('HeroSection Component', () => {
  it('renders the main heading "PRIYANSHU KUMAR" (desktop view)', () => {
    render(<HeroSection />);
    // The component renders "PRIYANSHU KUMAR" in a hidden span for md:block
    // and "PRIYANSHU" and "KUMAR" in spans for block md:hidden
    // We will look for the text content within the h1
    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toHaveTextContent('PRIYANSHU KUMAR');
  });

  it('renders the main heading parts "PRIYANSHU" and "KUMAR" (mobile view structure)', () => {
    render(<HeroSection />);
    // ScrambleText mock renders the text directly
    expect(screen.getByText('PRIYANSHU')).toBeInTheDocument();
    expect(screen.getByText('KUMAR')).toBeInTheDocument();
  });

  it('renders the VercelBadge component', () => {
    render(<HeroSection />);
    expect(screen.getByTestId('vercel-badge-mock')).toBeInTheDocument();
    expect(screen.getByText('Vercel Badge')).toBeInTheDocument(); // Check content of the mock
  });
  
  it('renders the SectionLayout wrapper', () => {
    render(<HeroSection />);
    expect(screen.getByTestId('section-layout')).toBeInTheDocument();
  });
});
