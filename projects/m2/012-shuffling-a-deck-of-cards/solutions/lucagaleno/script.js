//012-shuffeling-a-deck-of-cards

function createDeck(){
    const suits = ['s','h','d','c'];
    const values = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];
    let cards = [];

    for (x=0 ; x<suits.length ; x++){

        for (y =0 ; y<values.length ; y++){
            
            cards.push(values[y]+suits[x]);
        };
    };
    return cards;
};

function shuffelingCards(){

    let deckOfCards = createDeck();
    let numberOfCards = deckOfCards.length;
    const shuffeledDeck = [];
    let randomIndex ;

        // aggiungo una carte del mazzo a "nuovo mazzo" solo se non è già presente e se non sono arrivaoto al numero massimo di carte.
        while((shuffeledDeck.includes(deckOfCards[randomIndex]) === false) || (shuffeledDeck.length < numberOfCards)){
        randomIndex = Math.floor(Math.random() * numberOfCards);
        shuffeledDeck.push(deckOfCards[randomIndex]);
        };

    return shuffeledDeck;
};

console.log ('Numero di carte: ' + createDeck().length);
console.log ('Mazzo di carte iniziali: '+createDeck());
console.log('Carte mescolate: ' + shuffelingCards());