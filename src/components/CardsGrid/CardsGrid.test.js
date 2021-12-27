import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CardsGrid from './index';
import imagesList from '../../utils/images';

const renderComponent = ({ images, setShowEndGameModal, updateMovesCount }) => render(
  <CardsGrid images={images}
    setShowEndGameModal={setShowEndGameModal}
    updateMovesCount={updateMovesCount}
  />,
);

describe('CardsGrid', () => {
  const props = {
    images: imagesList,
    setShowEndGameModal: false,
    updateMovesCount: jest.fn(),
  };
  test('renders 20 cards when receiving 10 images', () => {
    renderComponent(props);
    const cards = screen.getAllByTestId('card');
    expect(cards.length).toEqual(20);
  });

  test('updates the cards flipped state', () => {
    renderComponent(props);
    const card = screen.getAllByTestId('card')[0];
    fireEvent.click(card);
    expect(card).toHaveClass('flipped');
  });

  test('keeps track of the moves count', () => {
    renderComponent(props);
    const cardOne = screen.getAllByTestId('card')[0];
    const cardTwo = screen.getAllByTestId('card')[1];
    fireEvent.click(cardOne);
    fireEvent.click(cardTwo);
    expect(props.updateMovesCount).toHaveBeenCalledTimes(1);
  });
});
