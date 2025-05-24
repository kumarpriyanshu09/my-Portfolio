import React from 'react';
import { render, screen } from '@testing-library/react';
import AIDashboardProjectClient from '../AIDashboardClient'; // The actual client component

// Mock AnimatedText component
jest.mock('@/components/animated-text', () => ({
  AnimatedText: ({ text }: { text: string }) => <span>{text}</span>,
}));

// Mock TableauDashboard component
jest.mock('@/components/tableau-dashboard', () => ({
  TableauDashboard: () => <div data-testid="mock-tableau-dashboard">Tableau Dashboard Mock</div>,
}));

// Mock useScrollTop hook
jest.mock('@/hooks/use-scroll-top', () => ({
  useScrollTop: jest.fn(),
}));

describe('AIDashboardProjectClient Component', () => {
  beforeEach(() => {
    // Reset mocks if necessary
    (jest.requireMock('@/hooks/use-scroll-top') as any).useScrollTop.mockClear();
  });

  it('renders the main title', () => {
    render(<AIDashboardProjectClient />);
    // AnimatedText mock renders the text directly
    expect(screen.getByText("AI's Rise and Societal Impact")).toBeInTheDocument();
  });

  it('renders the subtitle "Interactive Data Visualization"', () => {
    render(<AIDashboardProjectClient />);
    expect(screen.getByText('Interactive Data Visualization')).toBeInTheDocument();
  });

  it('renders the TableauDashboard component', () => {
    render(<AIDashboardProjectClient />);
    expect(screen.getByTestId('mock-tableau-dashboard')).toBeInTheDocument();
  });

  it('renders key section titles', () => {
    render(<AIDashboardProjectClient />);
    expect(screen.getByText('Project Introduction')).toBeInTheDocument();
    expect(screen.getByText('Interactive Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Business Value')).toBeInTheDocument();
    expect(screen.getByText('Tools & Methodology')).toBeInTheDocument();
    expect(screen.getByText('Development Process')).toBeInTheDocument();
    expect(screen.getByText('Features & Functionality')).toBeInTheDocument();
    expect(screen.getByText('Key Insights')).toBeInTheDocument();
    expect(screen.getByText('Skills Demonstrated')).toBeInTheDocument();
    expect(screen.getByText('Conclusion and Next Steps')).toBeInTheDocument();
    expect(screen.getByText('References')).toBeInTheDocument();
  });

  it('calls useScrollTop hook on render', () => {
    render(<AIDashboardProjectClient />);
    expect(jest.requireMock('@/hooks/use-scroll-top').useScrollTop).toHaveBeenCalled();
  });
});
