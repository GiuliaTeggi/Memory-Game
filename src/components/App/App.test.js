import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './index';

describe('App', () => {
  test('renders with no errors', () => {
    render(<App />);
    expect(screen.getByTestId('app')).toBeInTheDocument();
  });
});
