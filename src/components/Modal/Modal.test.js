import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import Modal from './index';

const renderComponent = ({ closeModal, reloadPage, movesCount = 4 }) => render(
    <Modal closeModal={closeModal} reloadPage={reloadPage} movesCount={movesCount}/>,
);

describe('Modal', () => {
  const closeModal = jest.fn();
  const reloadPage = jest.fn();
  test('shows the total number of moves', () => {
    renderComponent({ closeModal, reloadPage });
    expect(screen.getByTestId('paragraph')).toHaveTextContent('You completed the game in 4 moves');
  });

  test('renders a button to close the modal', async () => {
    renderComponent({ closeModal, reloadPage });
    const button = screen.getByRole('button', { name: /Close modal/i });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(closeModal).toHaveBeenCalledTimes(1);
  });

  test('renders a button to start a new game', async () => {
    renderComponent({ closeModal, reloadPage });
    const button = screen.getByRole('button', { name: /Start new game/i });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(reloadPage).toHaveBeenCalledTimes(1);
  });
});
