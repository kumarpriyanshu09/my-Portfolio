import React from 'react';
import { render, screen } from '@testing-library/react';
import AIProjectsPage from '../page'; // The server component

// Mock the client component
jest.mock('../AIDashboardClient', () => {
  // The actual component is a default export
  const MockAIDashboardClient = () => <div data-testid="mock-ai-dashboard-client">AIDashboardClient Content</div>;
  return MockAIDashboardClient;
});

describe('AIProjectsPage (Server Component)', () => {
  it('renders the AIDashboardClient component', () => {
    render(<AIProjectsPage />);
    // Check if the mocked client component is rendered
    expect(screen.getByTestId('mock-ai-dashboard-client')).toBeInTheDocument();
    expect(screen.getByText('AIDashboardClient Content')).toBeInTheDocument();
  });
});
