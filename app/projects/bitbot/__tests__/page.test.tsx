import React from 'react';
import { render, screen } from '@testing-library/react';
import BitBotProjectPage from '../page'; // The server component

// Mock AnimatedText component
jest.mock('@/components/animated-text', () => ({
  AnimatedText: ({ text }: { text: string }) => <span>{text}</span>,
}));

// Mock lucide-react ArrowUpRight icon
jest.mock('lucide-react', () => ({
  ...jest.requireActual('lucide-react'), // Keep other icons if any, though not strictly needed here
  ArrowUpRight: () => <svg data-testid="mock-arrow-up-right" />,
}));

describe('BitBotProjectPage Component', () => {
  it('renders the main title', () => {
    render(<BitBotProjectPage />);
    // AnimatedText mock renders the text directly
    expect(screen.getByText('BitBot - Smart Crypto Assistant')).toBeInTheDocument();
  });

  it('renders the subtitle "AI-Powered Cryptocurrency Guide"', () => {
    render(<BitBotProjectPage />);
    expect(screen.getByText('AI-Powered Cryptocurrency Guide')).toBeInTheDocument();
  });

  it('renders key section titles', () => {
    render(<BitBotProjectPage />);
    expect(screen.getByText('Project Overview')).toBeInTheDocument();
    expect(screen.getByText('BitBot Interface')).toBeInTheDocument();
    expect(screen.getByText('Business Problem')).toBeInTheDocument();
    expect(screen.getByText('Solution Approach')).toBeInTheDocument();
    expect(screen.getByText('Technology Stack')).toBeInTheDocument();
    expect(screen.getByText('BitBot Workflow')).toBeInTheDocument();
    expect(screen.getByText('Business Value')).toBeInTheDocument();
    expect(screen.getByText('Future Enhancements')).toBeInTheDocument();
    expect(screen.getByText('Conclusion')).toBeInTheDocument();
  });

  it('renders the "Try BitBot Demo" buttons/links', () => {
    render(<BitBotProjectPage />);
    // There are two such buttons/links
    const demoButtons = screen.getAllByText('Try BitBot Demo');
    expect(demoButtons.length).toBeGreaterThanOrEqual(1); // Check if at least one is present
    demoButtons.forEach(button => {
      expect(button).toBeInTheDocument();
    });
    // Also check for the icon within the button
    expect(screen.getAllByTestId('mock-arrow-up-right').length).toBeGreaterThanOrEqual(1);
  });
});
