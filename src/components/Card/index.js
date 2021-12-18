import React from 'react';
import './styles.css';

export default function Card(props) {
  const {
    index, imgSrc, isVisible, onSelectCard,
  } = props;

  const cardStyles = `card ${isVisible ? 'visible' : ''}`;
  return (
        <div className={cardStyles} onClick={() => onSelectCard({ index, imgSrc })} data-testid='card'>
            <div className="card-face front">
            </div>
            <div className="card-face back">
              <img src={imgSrc} />
            </div>
            <div className="card-face right"></div>
            <div className="card-face left"></div>
            <div className="card-face top"></div>
            <div className="card-face bottom"></div>
        </div>
  );
}
