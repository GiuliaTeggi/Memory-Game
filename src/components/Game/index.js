import React, { useState } from 'react';
import CardsGrid from '../CardsGrid';
import Modal from '../Modal';
import images from '../../utils/images';

import './styles.scss';

export default function Game() {
  const [showEndGameModal, setShowEndGameModal] = useState(false);
  const [movesCount, updateMovesCount] = useState(0);

  const reloadPage = () => window.location.reload();
  const closeModal = () => setShowEndGameModal(false);

  return (
        <div className="game" data-testid="game">
          {showEndGameModal
          && <Modal reloadPage={reloadPage} closeModal={closeModal} movesCount={movesCount}/>
          }
          <CardsGrid images={images}
          setShowEndGameModal={setShowEndGameModal}
          updateMovesCount={updateMovesCount}
          />
        </div>
  );
}
