import React from 'react';
import { render, screen } from '@testing-library/react';
import CardsGrid from './index';

test('renders 20 cards', () => {
  render(<CardsGrid />);
  const cards = screen.getAllByTestId('card');
  expect(cards.length).toEqual(20);
});
