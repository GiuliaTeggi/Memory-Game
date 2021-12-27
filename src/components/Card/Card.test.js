import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Card from './index';

const renderComponent = ({
  index, imgSrc, isFlipped, onCardClick,
}) => render(
    <Card index={index} imgSrc={imgSrc} isFlipped={isFlipped} onCardClick={onCardClick}/>,
);

describe('Card', () => {
  const cardProps = {
    index: 0,
    imgSrc: 'image.jpg',
    isFlipped: false,
    onCardClick: jest.fn(),
  };

  test('renders with no errors', () => {
    renderComponent(cardProps);
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });

  test('shows an image', () => {
    renderComponent(cardProps);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'image.jpg');
  });

  test('is not flipped', () => {
    renderComponent(cardProps);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('card');
    expect(card).not.toHaveClass('flipped');
  });

  test('is flipped', () => {
    renderComponent({ ...cardProps, isFlipped: true });
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('card', 'flipped');
  });

  test('calls the on click function', () => {
    renderComponent(cardProps);
    const card = screen.getByTestId('card');
    fireEvent.click(card);
    expect(cardProps.onCardClick).toHaveBeenCalledTimes(1);
    expect(cardProps.onCardClick).toHaveBeenCalledWith({ index: 0, imgSrc: 'image.jpg' });
  });
});
