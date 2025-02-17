// const prompt = require("prompt-sync")({ sigint: true}) ;

function createDeck(){
    const deck = [];
    const suits = ['s','h','d','c'];
    const values = ['A','2','3','4','5','6','7','8','9','T','J','Q','K'];

    for (let i = 0; i < suits.length; i++) {

        for (let j = 0; j < values.length; j++) {
            deck.push( values[j] + suits[i] );
        }
    }

    return deck;
}

function shuffleDeck(deck){
    for (let i = 0; i < deck.length; i++) {
        const cardDrawnIndex = Math.floor(Math.random() * (deck.length-1 -i +1) +i);
        [deck[i], deck[cardDrawnIndex]] = [deck[cardDrawnIndex], deck[i]];
    }
    return deck;
}

init();
function init(){
    const deck = createDeck();
    const shuffleDeck = shuffleDeck(deck);

    console.log(deck);
    console.log(shuffle(deck));
    
    return;
}