import React, { useEffect } from 'react';
import './styles.css';

export default function Card(props) {
  const {
    index, imgSrc, isVisible, onSelectCard,
  } = props;

  const cardStyles = `card ${isVisible ? 'visible' : ''}`;
  return (
        <div className={cardStyles} onClick={() => onSelectCard({ index, imgSrc })} data-testid='card'>
            <div className="card-front">
            </div>
            <div className="card-back">
              <img src={imgSrc} />
            </div>
        </div>
  );
}
