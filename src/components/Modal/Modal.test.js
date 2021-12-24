import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import Modal from './index';

const renderComponent = ({ closeModal, reloadPage, movesCount = 4 }) => render(
    <Modal closeModal={closeModal} reloadPage={reloadPage} movesCount={movesCount}/>,
);

describe('Modal', () => {
  test('shows the total number of moves', () => {
    const closeModal = jest.fn();
    const reloadPage = jest.fn();
    renderComponent({ closeModal, reloadPage });
    expect(screen.getByTestId('paragraph')).toHaveTextContent('You completed the game in 4 moves');
  });

  test('renders a button to close the modal', async () => {
    const closeModal = jest.fn();
    const reloadPage = jest.fn();
    renderComponent({ closeModal, reloadPage });
    const button = screen.getByLabelText('Close modal');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(closeModal).toHaveBeenCalledTimes(1);
  });

  test('renders a button to start a new game', async () => {
    const closeModal = jest.fn();
    const reloadPage = jest.fn();
    renderComponent({ closeModal, reloadPage });
    const button = screen.getByText('Start new game');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(reloadPage).toHaveBeenCalledTimes(1);
  });
});
