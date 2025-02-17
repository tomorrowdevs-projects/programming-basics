//025-checking-for-a-winning-card

// INPUT

import { randomBingoCard,checkVertical,checkHorizontal,checkDiagonaldDown,checkDiagonalUp } from "./utils.js";
import { bingoCardV, bingoCardH, bingoCardDD, bingoCardDU } from "./utils.js"; //variabili per simulare bingo cards

// MAIN FUNCTION
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

console.table(bingoCardV);
console.log(checkForWinningCard(bingoCardV));

console.table(bingoCardH);
console.log(checkForWinningCard(bingoCardH));

console.table(bingoCardDD);
console.log(checkForWinningCard(bingoCardDD));

console.table(bingoCardDU);
console.log(checkForWinningCard(bingoCardDU));

