import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './index';

describe('Footer', () => {
  test('renders with no errors', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
