const createDeck = () => {

    const seeds = ['h', 'c', 'd', 's']
    const value = [2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K', 'A']
    const deck = [];

    for (let countSeeds = 0; countSeeds < 4; countSeeds++) {
        for (let countValue = 0; countValue < 13; countValue++) {
            deck.push(value[countValue] + seeds[countSeeds])
        }
    }

    return deck
}

/* Algoritmo di Fisher-Yate */

const shuffleDeck = (arrDeck) => {

    for (let i = arrDeck.length - 1; i > 0; i--) {

        let randomInd = Math.floor(Math.random() * (i + 1));

        let tempCard = arrDeck[i]
        arrDeck[i] = arrDeck[randomInd];
        arrDeck[randomInd] = tempCard;

    }

    return arrDeck;
}

alert(`the initial deck is:\n\n${createDeck().join('-')}\n\nThe shuffle deck is:\n\n${shuffleDeck(createDeck()).join('-')}`)


