function shuffleDeck(deck) {
    const numberDeck = deck.length;
    for (let i = 0; i < numberDeck - 1; i++) {
        const randomIndex = Math.floor(Math.random() * (numberDeck - i) + i);
        const temp = deck[i];
        deck[i] = deck[randomIndex];
        deck[randomIndex] = temp;
    }
    
    return deck;
}


function createDeck() {
    const card = [2, 3, 4, 5, 6, 7, 8, 9, "T", "J", "Q", "K", "A"];
    const suits = ["s", "h", "d", "c"];
    const deck2 = [];
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < card.length; j++) {
            const cards = card[j] + suits[i];
            deck2.push(cards);
        }
    }


    return deck2;
}
console.log(createDeck())
console.log(shuffleDeck(createDeck()))