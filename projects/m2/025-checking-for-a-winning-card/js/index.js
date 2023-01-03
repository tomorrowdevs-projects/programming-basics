
// Imported the constructor function `BingoCard` from the prev exercise.
const Card = require("./exe-024-create-a-bingo-card");


const card1 = new Card;
const card2 = new Card;
const card3 = new Card;
const card4 = new Card;


// Created 3 function, one for every possibile winning line in Bingo, to show that the software works.
function winHorizontal (card) {

    const extractedNumbers = [Object.values(card)[0][0], Object.values(card)[1][0], Object.values(card)[2][0], Object.values(card)[3][0], Object.values(card)[4][0]];

    for (number of extractedNumbers) {

        for (key in card) {

            if (card[key].includes(number)) {
                let sortedNumberIndex = card[key].indexOf(number);
                card[key][sortedNumberIndex] = 0;
            };

        };
    };
};


function winVertical (card) {

    const extractedNumbers = [Object.values(card)[0][0], Object.values(card)[0][1], Object.values(card)[0][2], Object.values(card)[0][3], Object.values(card)[0][4]];

    for (number of extractedNumbers) {

        for (key in card) {

            if (card[key].includes(number)) {
                let sortedNumberIndex = card[key].indexOf(number);
                card[key][sortedNumberIndex] = 0;
            };

        };
    };
};


function winDiagonal (card) {

    const extractedNumbers = [Object.values(card)[0][0], Object.values(card)[1][1], Object.values(card)[2][2], Object.values(card)[3][3], Object.values(card)[4][4]];

    for (number of extractedNumbers) {

        for (key in card) {

            if (card[key].includes(number)) {
                let sortedNumberIndex = card[key].indexOf(number);
                card[key][sortedNumberIndex] = 0;
            };

        };
    };
};



// Declared the `showGame` function to show the card, using as first parameter a card and as second one of the three functions to check if the card has a winning line.
function showGame (card) {
    

    let outputString = "";

    for (i = 0; i < Object.keys(card).length; i++) {
        outputString += Object.keys(card)[i] + " => " + Object.values(card)[i] + "\n"; 
    }
    
    console.log(outputString);
    
};



// Declared the core function of the software, that iterates over a random array of 75 numbers, using that as a number extractors and check if a given card has the extracted numbers.
function getGame (card) {
    
    const sortedNumbers = Array.from({length: 75}, () => Math.floor(Math.random() * 75));

    const winHorizontal1 = Object.values(card)[0][0] + Object.values(card)[1][0] + Object.values(card)[2][0] + Object.values(card)[3][3] + Object.values(card)[4][0];
    const winHorizontal2 = Object.values(card)[0][1] + Object.values(card)[1][1] + Object.values(card)[2][1] + Object.values(card)[3][1] + Object.values(card)[4][1];
    const winHorizontal3 = Object.values(card)[0][2] + Object.values(card)[1][2] + Object.values(card)[2][2] + Object.values(card)[3][2] + Object.values(card)[4][2];
    const winHorizontal4 = Object.values(card)[0][3] + Object.values(card)[1][3] + Object.values(card)[2][3] + Object.values(card)[3][3] + Object.values(card)[4][3];
    const winHorizontal5 = Object.values(card)[0][4] + Object.values(card)[1][4] + Object.values(card)[2][4] + Object.values(card)[3][4] + Object.values(card)[4][4];

    const winVertical1 = Object.values(card)[0].reduce((partialSum, a) => partialSum + a, 0);
    const winVertical2 = Object.values(card)[1].reduce((partialSum, a) => partialSum + a, 0);
    const winVertical3 = Object.values(card)[2].reduce((partialSum, a) => partialSum + a, 0);
    const winVertical4 = Object.values(card)[3].reduce((partialSum, a) => partialSum + a, 0);
    const winVertical5 = Object.values(card)[4].reduce((partialSum, a) => partialSum + a, 0);

    const diagonal1 = Object.values(card)[0][0] + Object.values(card)[1][1] + Object.values(card)[2][2] + Object.values(card)[3][3] + Object.values(card)[4][4];
    const diagonal2 = Object.values(card)[0][4] + Object.values(card)[1][3] + Object.values(card)[2][2] + Object.values(card)[3][1] + Object.values(card)[4][0];

        for (number of sortedNumbers) {

                for (key in card) {

                    if (card[key].includes(number)) {
                        let sortedNumberIndex = card[key].indexOf(number);
                        card[key][sortedNumberIndex] = 0;
                    };

                };
                
            if (winHorizontal1 == 0 || winHorizontal2 == 0 || winHorizontal3 == 0 || winHorizontal4 == 0 || winHorizontal5 == 0 || winVertical1 == 0 || winVertical2 == 0 || winVertical3 == 0 || winVertical4 == 0 || winVertical5 == 0 || diagonal1 == 0 || diagonal2 == 0) { break; };
        };

};

showGame(card3, winDiagonal(card3));
showGame(card2, winVertical(card2));
showGame(card1, winHorizontal(card1));
showGame(card4, getGame(card4));