function NewDeck() {
    let deck = [];
    let specials = ["T","J","Q","K","A"];
    let suits = ["s","d","h","c"];
    let currentSuit = "";
    for (let suit of suits) {
      for (let i = 2; i<= 9; i++) {
        currentSuit = suit;
        deck.push(i+currentSuit)
      }
      for (let key of specials){
        deck.push(key+currentSuit)
      }
    }  
    return deck
  }
  
  function shuffle(deck) {
    for (let i = 0; i<=300000; i++) {
      let j = Math.floor(Math.random() * (51 - 0 + 1) + 0);
      let k = Math.floor(Math.random() * (51 - 0 + 1) + 0);
      let storeValue = deck[j];
      deck.splice(j,1);
      deck.splice(k,0,storeValue)
    }
  }
  
  let newDeck = new NewDeck();
  alert(newDeck);
  shuffle(newDeck);
  alert(newDeck)