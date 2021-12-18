import React, { useState, useEffect } from 'react';
import Card from '../Card';
import './styles.css';
import ape from '../../../public/images/ape.jpg';
import beeEater from '../../../public/images/bee-eater.jpg';
import elephant from '../../../public/images/elephant.jpg';
import flamingo from '../../../public/images/flamingo.jpg';
import frog from '../../../public/images/frog.jpg';

export default function CardsGrid() {
  const [cards, setCards] = useState([]);
  const [selectedCards, updateSelectedCards] = useState([]);
  const [matchedCards, updateMatchedCards] = useState([]);

  const shuffleCards = (cardsArr) => {
    const result = cardsArr;
    // eslint-disable-next-line no-plusplus
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  };

  const duplicateCards = (cardsArr) => cardsArr.flatMap((card) => [card, card]);

  useEffect(() => {
    const shuffledCards = shuffleCards(duplicateCards([ape, beeEater, elephant, flamingo, frog]));
    setCards(shuffledCards);
  }, []);

  const cardIsSelected = (index) => selectedCards.some((card) => card.index === index);

  const cardIsVisible = (index) => matchedCards.some((card) => card.index === index);

  const cardIsMatch = (imgSrc) => selectedCards.some((card) => card.imgSrc === imgSrc);

  const onSelectCard = (cardObj) => {
    const { imgSrc, index } = cardObj;
    if (!cardIsVisible(index) && selectedCards.length !== 2) {
      if (cardIsMatch(imgSrc)) {
        updateMatchedCards((prevState) => [...prevState, ...selectedCards, cardObj]);
        updateSelectedCards([]);
      } else if (selectedCards.length === 1) {
        updateSelectedCards((prevState) => [...prevState, cardObj]);
        setTimeout(() => {
          updateSelectedCards([]);
        }, 1300);
      } else {
        updateSelectedCards((prevState) => [...prevState, cardObj]);
      }
    }
  };

  return (
        <div className="cards-grid">
          {cards.map((card, index) => <Card key={index}
          index={index}
          imgSrc={card}
          onSelectCard={onSelectCard}
          isVisible={cardIsVisible(index) || cardIsSelected(index)}
          />)}
        </div>
  );
}
