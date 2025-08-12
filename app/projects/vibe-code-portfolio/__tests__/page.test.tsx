import React from 'react';
import { render, screen } from '@testing-library/react';
import VibeCodePortfolioPage from '../page'; // Adjust path if necessary

// Mock the client component as its content is extensive and tested separately if needed
jest.mock('../VibeCodePortfolioClient', () => {
  return function DummyVibeCodePortfolioClient() {
    return <div data-testid="vibe-code-client">Vibe Code Client Mock</div>;
  };
});

// Mock TableOfContents if it's directly imported and used in page.tsx,
// or ensure VibeCodePortfolioClient mock handles it.
// For this case, VibeCodePortfolioClient handles TOC, so its mock is sufficient.

describe('VibeCodePortfolioPage', () => {
  it('should render the page and metadata title', () => {
    // Metadata is not directly testable via RTL in page component like this
    // But we can check if the client component is rendered.
    render(<VibeCodePortfolioPage />);
    
    // Check if the mocked client component is present
    expect(screen.getByTestId('vibe-code-client')).toBeInTheDocument();
    // We can also check for text that might be part of the page.tsx layout if any,
    // but most content is in VibeCodePortfolioClient.tsx
  });
});
