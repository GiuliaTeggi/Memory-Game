import React, { useState } from 'react';
import CardsGrid from '../CardsGrid';
import Modal from '../Modal';

import './styles.css';

export default function Game() {
  const [showEndGameModal, setShowEndGameModal] = useState(false);
  const [movesCount, updateMovesCount] = useState(0);

  return (
        <div className="game">
          {showEndGameModal
          && <Modal setShowEndGameModal={setShowEndGameModal} movesCount={movesCount}/>}
          <CardsGrid setShowEndGameModal={setShowEndGameModal} updateMovesCount={updateMovesCount}/>
        </div>
  );
}
