import React, { useState } from 'react';
import Card from '../Card';
import './styles.css';

export default function CardsGrid() {
  const [selectedCard, updateSelectedCard] = useState(null);
  const cards = Array.from(Array(20));

  return (
        <div className="cards-grid">
          {cards.map((el, index) => <Card key={index}
          index={index}
          updateSelectedCard={updateSelectedCard}
          isSelected={selectedCard === index}
          />)}
        </div>
  );
}
