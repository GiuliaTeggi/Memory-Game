import React from 'react';

import './styles.css';

export default function Modal({ setShowEndGameModal, movesCount }) {
  const reloadPage = () => window.location.reload();
  const closeModal = () => setShowEndGameModal(false);

  return (
        <div className='modal'>
            <button onClick={() => closeModal()} className='close-modal-button' aria-label='Close modal'>
            </button>
            <h1>Hurrah!</h1>
            <p>You completed the game in <strong>{movesCount}</strong> moves</p>
            <button className='start-game-button' onClick={() => reloadPage()}>Start new game</button>
        </div>
  );
}
