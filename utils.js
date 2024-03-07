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

module.exports = shuffle;
