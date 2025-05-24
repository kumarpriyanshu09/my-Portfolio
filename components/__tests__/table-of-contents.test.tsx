import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TableOfContents } from '../table-of-contents'; // Adjust path
import '@testing-library/jest-dom'; // For .toBeInTheDocument()

const mockHeadings = [
  { id: 'section-1', text: 'Section 1', level: 2 },
  { id: 'section-2', text: 'Section 2', level: 2 },
  { id: 'subsection-1', text: 'Subsection 1', level: 3 }, // Should be filtered out
  { id: 'section-3', text: 'Section 3', level: 2 },
];

// Mock window.scrollTo
global.scrollTo = jest.fn();

// Mock getBoundingClientRect for elements
Element.prototype.getBoundingClientRect = jest.fn(() => ({
   width: 0,
   height: 0,
   top: 0,
   left: 0,
   bottom: 0,
   right: 0,
   x: 0,
   y: 0,
   toJSON: () => ({})
}));


describe('TableOfContents', () => {
  beforeEach(() => {
   // Reset mocks before each test
   (global.scrollTo as jest.Mock).mockClear();
   // Reset or provide specific mock implementation for getBoundingClientRect if needed per test
   Element.prototype.getBoundingClientRect = jest.fn(() => ({
       width: 100, height: 50, top: 0, left: 0, bottom: 50, right: 100, x:0, y:0, toJSON: () => ({})
   }));
  });

  it('should render null if no headings are provided', () => {
    const { container } = render(<TableOfContents headings={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it('should render only h2 headings as links', () => {
    render(<TableOfContents headings={mockHeadings} />);
    
    expect(screen.getByText('Section 1')).toBeInTheDocument();
    expect(screen.getByText('Section 2')).toBeInTheDocument();
    expect(screen.getByText('Section 3')).toBeInTheDocument();
    expect(screen.queryByText('Subsection 1')).not.toBeInTheDocument();
    
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3); // Only 3 h2 headings
  });

  it('should have correct href attributes for links', () => {
    render(<TableOfContents headings={mockHeadings} />);
    
    expect(screen.getByText('Section 1').closest('a')).toHaveAttribute('href', '#section-1');
    expect(screen.getByText('Section 2').closest('a')).toHaveAttribute('href', '#section-2');
    expect(screen.getByText('Section 3').closest('a')).toHaveAttribute('href', '#section-3');
  });

  it('calls scrollTo when a link is clicked', () => {
    // Mock getElementById for this test
    document.getElementById = jest.fn(id => {
      const el = document.createElement('div');
      el.id = id;
      // Mock getBoundingClientRect for the specific element
      el.getBoundingClientRect = jest.fn(() => ({
           width: 100, height: 50, top: 100, left: 0, bottom: 150, right: 100, x:0, y:0, toJSON: () => ({})
      }));
      return el;
    });

    render(<TableOfContents headings={mockHeadings} scrollOffset={50} />);
    const link = screen.getByText('Section 1');
    fireEvent.click(link);
    
    expect(global.scrollTo).toHaveBeenCalledWith({ top: 50, behavior: 'smooth' }); // 100 (rect.top) + 0 (window.pageYOffset) - 50 (scrollOffset)
    expect(document.getElementById).toHaveBeenCalledWith('section-1');
  });
  
  // Scroll spying is harder to test reliably in jsdom without more complex setup
  // For now, we'll trust the visual inspection and the basic rendering tests.
});
