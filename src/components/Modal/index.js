import React from 'react';

import './styles.scss';

export default function Modal({ closeModal, reloadPage, movesCount }) {
  return (
        <div className='modal' data-testid='modal'>
            <button onClick={() => closeModal()} className='close-modal-button' aria-label='Close modal'>
            </button>
            <h1>Hurrah!</h1>
            <p data-testid="paragraph">You completed the game in <strong>{movesCount}</strong> moves</p>
            <button className='start-game-button' onClick={() => reloadPage()}>Start new game</button>
        </div>
  );
}
