const partners = [
  "florMorada.jpeg",
  "florMorada.jpeg",
  "florRosa.jpeg",
  "florRosa.jpeg",
  "girasol.jpg",
  "girasol.jpg",
  "amapola.jpg",
  "amapola.jpg",
  "florBrillo.jpeg",
  "florBrillo.jpeg",
  "florTropical.jpeg",
  "florTropical.jpeg",
];

const numberOfCardsToMatch = 2;
const content = document.getElementById("content");

const beginner = document.getElementById("beginner");
const medium = document.getElementById("medium");
const expert = document.getElementById("expert");
let lengthPartners = 0;
let matchToCheck = [];
let matches = [];

const createCards = (array, classCard) => {
  for (let element of array) {
    createOneCard(element, classCard);
  }
};

const createOneCard = (element, classCard) => {
  const card = document.createElement("button");
  card.setAttribute("class", classCard);
  card.setAttribute("value", element);
  content.appendChild(card);

  card.addEventListener("click", (event) => {
    card.style.backgroundImage = 'url("./images/' + element;

    card.disabled = true;

    matchToCheck.push(card);

    if (matchToCheck.length === numberOfCardsToMatch) {
      const card1 = matchToCheck[0].getAttribute("value");
      const card2 = matchToCheck[1].getAttribute("value");
      if (isMatch(card1, card2)) {
        let confirmedMatches = success(matchToCheck, matches);
        matches = matches.concat(confirmedMatches);
        matchToCheck = [];
      } else {
        document.addEventListener("click", avoidClick, true);
        setTimeout(function () {
          document.removeEventListener("click", avoidClick, true);
          fail(matchToCheck);
          matchToCheck = [];
        }, 1000);
      }
    }
    if (isFinished(matches, lengthPartners)) {
      const playAgain = document.createElement("div");
      playAgain.innerHTML =
        '<a href="./index.html"><button class="playAgain">Volver a jugar</button></a>';
      const modal = document.getElementById("myModal");
      modal.setAttribute("class", "modal");
      modal.appendChild(playAgain);
    }
  });
};

const fail = (cards) => {
  cards.forEach((card) => {
    card.style.backgroundImage = 'url("./images/reversoCarta.jpg")';
    card.removeAttribute("disabled");
  });
};

const avoidClick = (event) => {
  event.stopPropagation();
  event.preventDefault();
};

beginner.addEventListener("click", () => {
  const partnersBeginner = partners.slice(0, 6);
  const partnersShuffled = shuffle(partnersBeginner);
  lengthPartners = 6;
  const cardClass = "beginner";
  createCards(partnersShuffled, cardClass);
  const form = document.querySelector("form");
  form.style.display = "none";
});

medium.addEventListener("click", () => {
  const partnersMedium = partners.slice(0, 8);
  const partnersShuffled = shuffle(partnersMedium);
  lengthPartners = 8;
  const cardClass = "medium";
  createCards(partnersShuffled, cardClass);
  const form = document.querySelector("form");
  form.style.display = "none";
});

expert.addEventListener("click", () => {
  const partnersShuffled = shuffle(partners);
  lengthPartners = 12;
  const cardClass = "expert";
  createCards(partnersShuffled, cardClass);
  const form = document.querySelector("form");
  form.style.display = "none";
});

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
