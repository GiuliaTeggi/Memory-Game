import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import './styles.scss';

export default function CardsGrid({ images, setShowEndGameModal, updateMovesCount }) {
  const [cards, setCards] = useState([]);
  const [selectedCards, updateSelectedCards] = useState([]);
  const [matchedPairs, updateMatchedPairs] = useState(0);
  const timeout = useRef(null);

  const shuffleCards = (cardsArr) => {
    const result = cardsArr;
    // eslint-disable-next-line no-plusplus
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  };

  const createCards = (cardsArr) => cardsArr.flatMap((card) => [
    { imgSrc: card, matched: false },
    { imgSrc: card, matched: false },
  ]);

  useEffect(() => {
    const shuffledCards = shuffleCards(createCards(images));
    setCards(shuffledCards);
  }, []);

  useEffect(() => {
    if (matchedPairs && (cards.length / 2) === matchedPairs) {
      setShowEndGameModal(true);
    }
  }, [matchedPairs]);

  useEffect(() => () => clearTimeout(timeout.current),
    []);

  const cardIsMatching = (imgSrc) => selectedCards.some((card) => card.imgSrc === imgSrc);

  const cardIsSelected = (index) => selectedCards.some((card) => card.index === index);

  const onCardClick = (cardObj) => {
    const { imgSrc, index, matched } = cardObj;
    if (matched || selectedCards.length === 2) {
      return;
    }
    if (cardIsMatching(imgSrc)) {
      const newCards = [...cards];
      newCards[selectedCards[0].index].matched = true;
      newCards[index].matched = true;
      setCards(newCards);
      updateMatchedPairs((prevState) => prevState + 1);
      updateMovesCount((prevState) => prevState + 1);
      updateSelectedCards([]);
    } else {
      updateSelectedCards((prevState) => [...prevState, cardObj]);
      if (selectedCards.length === 1) {
        updateMovesCount((prevState) => prevState + 1);
        timeout.current = setTimeout(() => {
          updateSelectedCards([]);
        }, 800);
      }
    }
  };

  return (
        <div className="cards-grid">
          {cards.map(({ imgSrc, matched }, index) => (
            <Card key={index}
            index={index}
            imgSrc={imgSrc}
            onCardClick={onCardClick}
            isFlipped={matched || cardIsSelected(index)}
            />
          ))}
        </div>
  );
}

CardsGrid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  setShowEndGameModal: PropTypes.func,
  updateMovesCount: PropTypes.func,
};
