import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '../button'; // Assuming button.tsx is in the parent directory

describe('Button Component', () => {
  it('renders with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
