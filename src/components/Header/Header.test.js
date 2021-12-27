import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './index';

describe('Header', () => {
  test('renders memory game title', () => {
    render(<Header />);
    const title = screen.getByText(/memory game/i);
    expect(title).toBeInTheDocument();
  });
});
