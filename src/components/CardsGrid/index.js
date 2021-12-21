import React, { useState, useEffect, useRef } from 'react';
import Card from '../Card';
import './styles.css';
import ape from '../../../public/images/ape.jpg';
import beeEater from '../../../public/images/bee-eater.jpg';
import elephant from '../../../public/images/elephant.jpg';
import flamingo from '../../../public/images/flamingo.jpg';
import frog from '../../../public/images/frog.jpg';
import pelican from '../../../public/images/pelican.jpg';
import rhino from '../../../public/images/rhino.jpg';
import shark from '../../../public/images/shark.jpg';
import tiger from '../../../public/images/tiger.jpg';
import zebra from '../../../public/images/zebra.jpg';

export default function CardsGrid({ setShowEndGameModal, updateMovesCount }) {
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
    { imgSrc: card, matched: false, selected: false },
    { imgSrc: card, matched: false, selected: false },
  ]);

  useEffect(() => {
    const images = [ape, beeEater,
      // elephant, flamingo,
      // frog, pelican, rhino, shark, tiger, zebra
    ];
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
    if (matched || selectedCards === 2) {
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
