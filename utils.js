const shuffle = (cards) => {
  const shuffled = [];
  const cardsLength = cards.length;
  for (let i = 0; i < cardsLength; i++) {
    const random = Math.floor(Math.random() * cards.length);
    shuffled.push(cards[random]);
    cards.splice(random, 1);
  }
  return shuffled;
};

const isMatch = (card1, card2) => {
  if (card1 === card2) {
    return true;
  } else {
    return false;
  }
};

const isFinished = (matchedCards, partnersCardsLength) => {
  return matchedCards.length === partnersCardsLength;
};

const success = (cards) => {
  let matches = [];
  cards.forEach((card) => {
    matches.push(card);
  });
  return matches;
};

module.exports = {
  shuffle: shuffle,
  isMatch: isMatch,
  isFinished: isFinished,
  success: success,
};
