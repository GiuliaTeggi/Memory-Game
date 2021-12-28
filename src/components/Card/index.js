import React from 'react';
import './styles.scss';

export default function Card(props) {
  const {
    index, imgSrc, isFlipped, onCardClick,
  } = props;

  const cardStyles = `card ${isFlipped ? 'flipped' : ''}`;

  return (
        <div className={cardStyles} onClick={() => onCardClick({ index, imgSrc })} data-testid='card'>
            <div className="card-face front">
            </div>
            <div className="card-face back">
              <img src={imgSrc} alt="memory card image"/>
            </div>
            <div className="card-face right"></div>
            <div className="card-face left"></div>
            <div className="card-face top"></div>
            <div className="card-face bottom"></div>
        </div>
  );
}
