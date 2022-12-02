/* create 52-card deck
Es: 
Card	Abbreviation
Jack of spades	Js
Two of clubs	2c
Ten of diamonds	Td
Ace of hearts	Ah
Nine of spades	Ns 

mix card*/

function createDeck() {
  const suitCard = ["s", "c", "d", "h"];
  const abbreviationCard = [ 2, 3, 4, 5, 6, 7, 8 , 9, "T", "J", "Q", "K", "A"];

  const cardDeck = [] 
  
  suitCard.forEach(element => {
    abbreviationCard.forEach(value => {
      cardDeck.push(value + element);
    })
  })

  return cardDeck;

}

function suffleDeck(deckCard) {
    
    for (i = deckCard.length - 1; i > 0; i--) {
      
        let j = Math.floor(Math.random() * (i + 1));
        let temp = deckCard[i];
        deckCard[i] = deckCard[j];
        deckCard[j] = temp;
      
    }
  return deckCard;
}

alert(`The new deck of poker cards is composed as follows:\n${createDeck().join(" ")}\n\nThe Deck after it has been shuffled:\n${suffleDeck(createDeck()).join(" ")}`);