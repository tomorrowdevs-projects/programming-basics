// const prompt = require("prompt-sync")({ sigint: true}) ;

function calculateScrabbleScore(text){
    text = text.toUpperCase();
    let score = 0;

    const scrabblePoints = {
        A: 1,
        B: 3,
        C: 3,
        D: 2,
        G: 2,
        E: 1,
        F: 4,
        H: 4,
        I: 1,
        J: 8,
        K: 5,
        L: 1,
        M: 3,
        N: 1,
        O: 1,
        P: 3,
        Q: 10,
        R: 1,
        S: 1,
        T: 1,
        U: 1,
        V: 4,
        W: 4,
        X: 8,
        Y: 4,
        Z: 10
    }

    for (let i = 0; i < text.length; i++) {
        const letter = text[i];

        if( Object.keys(scrabblePoints).includes(letter) ){
            score += scrabblePoints[letter];
        }
    }

    return score;
}

function init(){
    const askedText = prompt('Enter text for scrabble game to know its score.')
    const score = calculateScrabbleScore(askedText);

    console.log(score);

    return;
} 
init();