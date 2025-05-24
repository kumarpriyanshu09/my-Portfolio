import React from 'react';
import { render, screen } from '@testing-library/react';
import { Badge } from '../badge'; // Adjust path as necessary

describe('Badge Component', () => {
  const baseClasses = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

  it('renders with children', () => {
    render(<Badge>Test Badge</Badge>);
    expect(screen.getByText('Test Badge')).toBeInTheDocument();
  });

  it('applies default variant classes', () => {
    render(<Badge>Default Badge</Badge>);
    const badgeElement = screen.getByText('Default Badge');
    expect(badgeElement).toHaveClass(baseClasses);
    expect(badgeElement).toHaveClass('border-transparent bg-primary text-primary-foreground hover:bg-primary/80');
  });

  it('applies secondary variant classes', () => {
    render(<Badge variant="secondary">Secondary Badge</Badge>);
    const badgeElement = screen.getByText('Secondary Badge');
    expect(badgeElement).toHaveClass(baseClasses);
    expect(badgeElement).toHaveClass('border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80');
  });

  it('applies destructive variant classes', () => {
    render(<Badge variant="destructive">Destructive Badge</Badge>);
    const badgeElement = screen.getByText('Destructive Badge');
    expect(badgeElement).toHaveClass(baseClasses);
    expect(badgeElement).toHaveClass('border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80');
  });

  it('applies outline variant classes', () => {
    render(<Badge variant="outline">Outline Badge</Badge>);
    const badgeElement = screen.getByText('Outline Badge');
    expect(badgeElement).toHaveClass(baseClasses);
    expect(badgeElement).toHaveClass('text-foreground');
  });

  it('applies custom className', () => {
    render(<Badge className="custom-class">Custom Class Badge</Badge>);
    const badgeElement = screen.getByText('Custom Class Badge');
    expect(badgeElement).toHaveClass(baseClasses);
    expect(badgeElement).toHaveClass('custom-class');
  });
});
