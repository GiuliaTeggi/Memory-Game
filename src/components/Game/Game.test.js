import React from 'react';
import { render, screen } from '@testing-library/react';
import Game from './index';

describe('Game', () => {
  test('renders with no errors', () => {
    render(<Game />);
    expect(screen.getByTestId('game')).toBeInTheDocument();
  });
});
