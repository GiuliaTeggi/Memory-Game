import React from 'react';
import './styles.css';
import ape from '../../../public/images/ape.jpg';

export default function Card(props) {
  const { index, isSelected, updateSelectedCard } = props;

  const cardStyles = `card ${isSelected ? 'selected' : ''}`;
  return (
        <div className={cardStyles} onClick={() => updateSelectedCard(index)} data-testid='card'>
            <div className="card-front">
            </div>
            <div className="card-back">
              <img src={ape} />
            </div>
        </div>
  );
}
