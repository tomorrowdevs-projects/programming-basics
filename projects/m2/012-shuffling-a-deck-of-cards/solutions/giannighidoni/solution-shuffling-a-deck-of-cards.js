function createDeck(){
    const cardSuits = ['s', 'h', 'd', 'c'];
    const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
    let cardsDeck = [];

    cardSuits.forEach(elSuits => {
    cardValues.forEach(elValues => {
        cardsDeck.push(elValues + elSuits);
        })
    })
    return cardsDeck;
}

const cardsDeck = createDeck();

function shuffle(){
    let deckShuffled = [];
    for(let i = 0; i < 52; i++){
        let randomIndex = Math.floor(Math.random() * 52);
        while(deckShuffled.includes(cardsDeck[randomIndex])){
            randomIndex = Math.floor(Math.random() * 52);        
        }
        deckShuffled.push(cardsDeck[randomIndex]);
    }
    return deckShuffled;
}

const deckShuffled = shuffle();

console.log(cardsDeck);
console.log(deckShuffled);