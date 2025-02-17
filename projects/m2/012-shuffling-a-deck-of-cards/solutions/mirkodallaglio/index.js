function createDeck (){
    const deck = [];
    const cards = {
        value: ['2','3','4','5','6','7','8','9','T','J','Q','K','A'],
        suite: ['s','h','d','c'],
    };

    for(i=0; i < 4; i++){
        for(e=0; e < 13; e++){
            deck.push(cards.value[e] + cards.suite[i])
        };
    };
    return deck;
};

function shuffle (arr){
    const arrLength = arr.length;
    let out = '';
    let casualPos = 0;

    for(i=arrLength-1; i >= 0; i--){
        casualPos = Math.floor(Math.random() * (arrLength - i) + i);
        out = arr.splice(i, 1)[0];
        arr.splice(casualPos, 0,out);
    };
    return arr;
};

console.log('Deck:\n\n'+createDeck());
console.log('shuffle deck:\n\n'+shuffle(createDeck()));