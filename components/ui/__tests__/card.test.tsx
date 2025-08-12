import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '../card'; // Adjust path as necessary

describe('Card Component and Sub-Components', () => {
  it('renders Card with children', () => {
    render(<Card data-testid="card">Card Content</Card>);
    const cardElement = screen.getByTestId('card');
    expect(cardElement).toBeInTheDocument();
    expect(screen.getByText('Card Content')).toBeInTheDocument();
    expect(cardElement).toHaveClass('rounded-lg border bg-card text-card-foreground shadow-sm');
  });

  it('renders CardHeader with children', () => {
    render(<CardHeader data-testid="card-header">Header Content</CardHeader>);
    const headerElement = screen.getByTestId('card-header');
    expect(headerElement).toBeInTheDocument();
    expect(screen.getByText('Header Content')).toBeInTheDocument();
    expect(headerElement).toHaveClass('flex flex-col space-y-1.5 p-6');
  });

  it('renders CardTitle with children', () => {
    // CardTitle uses a div, not a heading element, so getByText is fine
    render(<CardTitle>Title Content</CardTitle>);
    const titleElement = screen.getByText('Title Content');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass('text-2xl font-semibold leading-none tracking-tight');
  });

  it('renders CardDescription with children', () => {
    render(<CardDescription>Description Content</CardDescription>);
    const descriptionElement = screen.getByText('Description Content');
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveClass('text-sm text-muted-foreground');
  });

  it('renders CardContent with children', () => {
    render(<CardContent data-testid="card-content">Content Body</CardContent>);
    const contentElement = screen.getByTestId('card-content');
    expect(contentElement).toBeInTheDocument();
    expect(screen.getByText('Content Body')).toBeInTheDocument();
    expect(contentElement).toHaveClass('p-6 pt-0');
  });

  it('renders CardFooter with children', () => {
    render(<CardFooter data-testid="card-footer">Footer Content</CardFooter>);
    const footerElement = screen.getByTestId('card-footer');
    expect(footerElement).toBeInTheDocument();
    expect(screen.getByText('Footer Content')).toBeInTheDocument();
    expect(footerElement).toHaveClass('flex items-center p-6 pt-0');
  });

  it('renders a complete Card structure', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Full Card Title</CardTitle>
          <CardDescription>Full Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Full Card Content Body</p>
        </CardContent>
        <CardFooter>
          <p>Full Card Footer</p>
        </CardFooter>
      </Card>
    );
    expect(screen.getByText('Full Card Title')).toBeInTheDocument();
    expect(screen.getByText('Full Card Description')).toBeInTheDocument();
    expect(screen.getByText('Full Card Content Body')).toBeInTheDocument();
    expect(screen.getByText('Full Card Footer')).toBeInTheDocument();
  });

  it('applies custom classNames to Card and its sub-components', () => {
    render(
      <Card className="custom-card" data-testid="card-custom">
        <CardHeader className="custom-header" data-testid="card-header-custom">
          <CardTitle className="custom-title">Custom Title</CardTitle>
        </CardHeader>
        <CardContent className="custom-content" data-testid="card-content-custom">
          Custom Content
        </CardContent>
      </Card>
    );
    expect(screen.getByTestId('card-custom')).toHaveClass('custom-card');
    expect(screen.getByTestId('card-header-custom')).toHaveClass('custom-header');
    expect(screen.getByText('Custom Title')).toHaveClass('custom-title');
    expect(screen.getByTestId('card-content-custom')).toHaveClass('custom-content');
  });
});
