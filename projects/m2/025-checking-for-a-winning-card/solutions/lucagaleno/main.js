//025-checking-for-a-winning-card

// INPUT

import { randomBingoCard } from "./utils.js";
import { allAreEqual } from "./utils.js";
import { checkVertical } from "./utils.js";
import { checkHorizontal } from "./utils.js";
import { checkDiagonaldDown } from "./utils.js";
import { checkDiagonalUp  } from "./utils.js";


const bingoCard1 = {
    'B': [1, 2, 0, 0, 0],
    'I': [15, 16, 0, 18, 19],
    'N': [31, 32, 0, 34, 35],
    'G': [45, 47, 0, 50, 54],
    'O': [63, 69, 0, 71, 72]
};

const bingoCard2 = {
    'B': [1,2,4,5,10],
    'I': [0, 0, 0, 0, 0],
    'N': [31,35,38,41,42],
    'G': [53,55,58,59,60],
    'O': [61,62,64,65,75]
};
const bingoCard3 = {
    'B': [0, 2, 5, 8, 9],
    'I': [16, 0, 18, 19, 25],
    'N': [31, 33, 0, 41, 42],
    'G': [46, 0, 50, 0, 54],
    'O': [0, 62, 66, 70, 0]
};

const bingoCard4 = {
    'B': [1, 2, 5, 0, 0],
    'I': [16, 17, 18, 0, 25],
    'N': [31, 33, 0, 41, 42],
    'G': [46, 0, 50, 51, 54],
    'O': [0, 62, 66, 70, 89]
};


function checkForWinningCard(bingoCard){
    const matrixArray = Object.values(bingoCard); // matrice di array [Array(5), Array(5), ...]
    const number = 0;

    if (checkVertical(matrixArray, number) === true) {
        console.log ('Bingo verticale ');
        return true;
    } else if (checkHorizontal(matrixArray, number) === true) {
        console.log ('Bingo orizzontale ');
        return true;
    } else if (checkDiagonaldDown(matrixArray, number) === true){
        console.log ('Bingo diagonale verso basso ');
        return true;
    } else if (checkDiagonalUp(matrixArray, number) === true) {
        console.log ('Bingo diagonale verso alto ');
        return true;
    } else{
        console.log('Nessun Bingo');
        return false;
    };     
};

// OUTPUT

console.table(randomBingoCard());
console.log(checkForWinningCard(randomBingoCard()));

console.table(bingoCard1);
console.log(checkForWinningCard(bingoCard1));

console.table(bingoCard2);
console.log(checkForWinningCard(bingoCard2));

console.table(bingoCard3);
console.log(checkForWinningCard(bingoCard3));

console.table(bingoCard4);
console.log(checkForWinningCard(bingoCard4));

