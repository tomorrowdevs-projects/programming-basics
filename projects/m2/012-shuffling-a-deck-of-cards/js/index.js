function createDeck() {
    let values = [2, 3, 4, 5, 6, 7, 8, 9, "T", "J", "Q", "K", "A"];
    let suits = ["s", "h", "d", "c"];
    let firstDeck = [];
    
    for (let value of values) {

        for (let suit of suits) {
            let card = value + suit;
            firstDeck.push(card);
        }
    }

    return firstDeck;
}

console.log(createDeck())



function shuffleDeck(firstDeck) {
    let ordinaryDeck = firstDeck.length;
    for (let i = 0; i < ordinaryDeck - 1; i++) {
        let randomOrder = Math.floor(Math.random() * (ordinaryDeck - i) + i);
        let tmp = firstDeck[i];
        firstDeck[i] = firstDeck[randomOrder];
        firstDeck[randomOrder] = tmp;
    }

    return firstDeck;
}

console.log(shuffleDeck(createDeck()))