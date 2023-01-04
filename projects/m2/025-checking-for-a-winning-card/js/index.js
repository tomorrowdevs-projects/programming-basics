
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






// Declared `BINGO` object, each key contains an array from a different range of numbers.
const bingo = {
    B: [...Array(15 - 1 + 1).keys()].map(x => x + 1),
    I: [...Array(30 - 16 + 1).keys()].map(x => x + 16),
    N: [...Array(45 - 31 + 1).keys()].map(x => x + 31),
    G: [...Array(60 - 46 + 1).keys()].map(x => x + 46),
    O: [...Array(75 - 61 + 1).keys()].map(x => x + 61),
}; 




// Simulate the random calls of a bingo game creating an array where each key of the bingo object create a concatenate string with its corrispective values.
function getRandomCalls (bingo) {

    let calls = [];

    for (i = 0; i < Object.keys(bingo).length; i++){

        for (j = 0; j < Object.values(bingo)[i].length; j++){
            calls.push(Object.keys(bingo)[i].toString() + Object.values(bingo)[i][j]);
        }
    }

    for (let i = calls.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [calls[i], calls[j]] = [calls[j], calls[i]];
    };

    return calls;

}




// Count every iteration we need (call) to get a win line and return it.
function getWin (card, calls){
    
    let counter = 0;

        for (k = 0; k < calls.length; k++){
            
            let winVerticalOne =  Object.values(card)[0][0] + Object.values(card)[0][1] + Object.values(card)[0][2] + Object.values(card)[0][3] + Object.values(card)[0][4];
            let winVerticalTwo = Object.values(card)[1][0] + Object.values(card)[1][1] + Object.values(card)[1][2] + Object.values(card)[1][3] + Object.values(card)[1][4];
            let winVerticalThree = Object.values(card)[2][0] + Object.values(card)[2][1] + Object.values(card)[2][2] + Object.values(card)[2][3] + Object.values(card)[2][4];
            let winVerticalFour = Object.values(card)[3][0] + Object.values(card)[3][1] + Object.values(card)[3][2] + Object.values(card)[3][3] + Object.values(card)[3][4];
            let winVerticalFive = Object.values(card)[4][0] + Object.values(card)[4][1] + Object.values(card)[4][2] + Object.values(card)[4][3] + Object.values(card)[4][4];

            let winHorizontalOne = Object.values(card)[0][0] + Object.values(card)[1][0] + Object.values(card)[2][0] + Object.values(card)[3][0] + Object.values(card)[4][0];
            let winHorizontalTwo = Object.values(card)[0][1] + Object.values(card)[1][1] + Object.values(card)[2][1] + Object.values(card)[3][1] + Object.values(card)[4][1];
            let winHorizontalThree = Object.values(card)[0][2] + Object.values(card)[1][2] + Object.values(card)[2][2] + Object.values(card)[3][2] + Object.values(card)[4][2];
            let winHorizontalFour = Object.values(card)[0][3] + Object.values(card)[1][3] + Object.values(card)[2][3] + Object.values(card)[3][3] + Object.values(card)[4][3];
            let winHorizontalFive = Object.values(card)[0][4] + Object.values(card)[1][4] + Object.values(card)[2][4] + Object.values(card)[3][4] + Object.values(card)[4][4];

            let winDiagonalOne = Object.values(card)[0][4] + Object.values(card)[1][3] + Object.values(card)[2][2] + Object.values(card)[3][1] + Object.values(card)[4][0];
            let winDiagonalTwo = Object.values(card)[4][0] + Object.values(card)[3][1] + Object.values(card)[2][2] + Object.values(card)[1][3] + Object.values(card)[0][4];



                if (winVerticalOne === 0 || winVerticalTwo === 0 || winVerticalThree === 0 || winVerticalFour === 0 || winVerticalFive === 0 || winHorizontalOne === 0 || winHorizontalTwo === 0 || winHorizontalThree === 0 || winHorizontalFour === 0 || winHorizontalFive === 0 || winDiagonalOne === 0 || winDiagonalTwo === 0) {break;}

                    for (i = 0; i < Object.keys(card).length; i++){

                        for(j = 0; j < Object.values(card)[i].length; j++){

                            if (calls[k] === (Object.keys(card)[i] + Object.values(card)[i][j])){
                                Object.values(card)[i][j] = 0;
                            }

                        }
                                
                    }

                    counter ++;
                }
        
    return counter;
}

showGame(card3, winDiagonal(card3));
showGame(card2, winVertical(card2));
showGame(card1, winHorizontal(card1));
showGame(card4, getWin(card4, getRandomCalls(bingo)));