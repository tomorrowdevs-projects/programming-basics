/* create 52-card deck
Es: 
Card	Abbreviation
Jack of spades	Js
Two of clubs	2c
Ten of diamonds	Td
Ace of hearts	Ah
Nine of spades	Ns 

mix card*/

// First version
/*function createDeack() {
  
  const suitCard = ["s", "c", "d", "h"];
  const abbreviationCard = [ "T", "J", "Q", "K", "A"];

  const cardDeck = [];
  let indexSuit = 0;
  let indexAbbreviationCard = 0;
  let i = 1;
  
  while (cardDeck.length < 52) {
    
    if (i === 1) {
      
      cardDeck.push(abbreviationCard[4] + suitCard[indexSuit])
      i += 1;
      
    } else if (i > 1 && i < 10) {
      
      cardDeck.push(i + suitCard[indexSuit]);
      i += 1;
    
    }  else if (i >= 10 && i < 14) {
      
      cardDeck.push(abbreviationCard[indexAbbreviationCard] + suitCard[indexSuit])
      indexAbbreviationCard += 1;
      i += 1;
    
    } else if (i >= 12) {
      
      indexAbbreviationCard = 0;
      i = 1;
      indexSuit += 1;
      
    }
    
  }
  return cardDeck;
}*/

// second and fast vrsion
function createDeck() {
    let suitCard = ["s", "c", "d", "h"];
    let abbreviationCard = [ 2, 3, 4, 5, 6, 7, 8 , 9, "T", "J", "Q", "K", "A"];
    const cardDeck = [];
  
    for (suitCard of suitCard) {
      
      for(let value of abbreviationCard) {
        let card = value + suitCard;
        cardDeck.push(card);
        
      }
    } 
    return cardDeck
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