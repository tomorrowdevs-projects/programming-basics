/*
LOGIC
Create two arrays: 
- values: 2 through 10, Jack, Queen, King and Ace
- suits: “s” for spades, “h” for hearts, “d” for diamonds and “c” for clubs
Create a function "createDeck" that combines values and suits and store all possible combinations in a new array
Create a function "shuffle" with the Fisher-Yates algorith 
*/

const cardValues = [2, 3, 4, 5, 6, 7, 8, 9, "T", "J", "Q", "K", "A"];
const cardSuits = ["s", "h", "d", "c"];

const deck = [];

function createDeck() {
  cardValues.forEach((value) => {
    cardSuits.forEach((suit) => {
      deck.push(value + suit);
    });
  });
  console.log(deck);
}
createDeck();

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  console.log(deck);
}

shuffle(deck);
