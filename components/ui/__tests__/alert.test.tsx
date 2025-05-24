import React from 'react';
import { render, screen } from '@testing-library/react';
import { Alert, AlertTitle, AlertDescription } from '../alert'; // Adjust path as necessary

describe('Alert Component', () => {
  // Removed [&>svg]:text-foreground as it's variant-specific
  const baseClasses = "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4";

  it('renders AlertTitle and AlertDescription correctly', () => {
    render(
      <Alert>
        <AlertTitle>Test Title</AlertTitle>
        <AlertDescription>Test Description</AlertDescription>
      </Alert>
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('applies default variant classes', () => {
    render(
      <Alert data-testid="alert-default">
        <AlertTitle>Default Alert</AlertTitle>
      </Alert>
    );
    const alertElement = screen.getByTestId('alert-default');
    expect(alertElement).toHaveClass(baseClasses);
    expect(alertElement).toHaveClass('bg-background text-foreground');
  });

  it('applies destructive variant classes', () => {
    render(
      <Alert variant="destructive" data-testid="alert-destructive">
        <AlertTitle>Destructive Alert</AlertTitle>
      </Alert>
    );
    const alertElement = screen.getByTestId('alert-destructive');
    expect(alertElement).toHaveClass(baseClasses);
    expect(alertElement).toHaveClass('border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive');
  });

  it('renders with custom className on Alert', () => {
    render(<Alert className="custom-alert-class"><AlertTitle>Custom Class</AlertTitle></Alert>);
    // The role="alert" is implicitly added by the component
    const alertElement = screen.getByRole('alert');
    expect(alertElement).toHaveClass(baseClasses);
    expect(alertElement).toHaveClass('custom-alert-class');
  });

  it('renders with custom className on AlertTitle', () => {
    render(<Alert><AlertTitle className="custom-title-class">Title</AlertTitle></Alert>);
    const titleElement = screen.getByText('Title');
    expect(titleElement).toHaveClass('mb-1 font-medium leading-none tracking-tight');
    expect(titleElement).toHaveClass('custom-title-class');
  });

  it('renders with custom className on AlertDescription', () => {
    render(<Alert><AlertDescription className="custom-desc-class">Description</AlertDescription></Alert>);
    const descElement = screen.getByText('Description');
    expect(descElement).toHaveClass('text-sm [&_p]:leading-relaxed');
    expect(descElement).toHaveClass('custom-desc-class');
  });
});
