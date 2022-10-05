//025-checking-for-a-winning-card

// INPUT

import { randomBingoCard } from "./modules/randomBingoCard.js";

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

// -------------------------------------------------------------------------------------

function checkForWinningCard(bingoCard){

    const verticalArray = Object.keys(bingoCard); // [B,I,N,G,O]
    const matrixArray = Object.values(bingoCard); // matrice di array [Array(5), Array(5), ...]
    const number = 0;
   
    // funzione per determinare se tutti gli elementi nell'array sono uguali
    function allAreEqual(array) {
        const result = array.every(element => {
        if (element === array[0]) {
            return true;
        }
        });
        return result;
    }; 

    // funzione per controllo vertivale di + array con dimensione uguale (quadrato)
    function checkVertical(matrix, numberToBeFound){
        let element;
        const tempIndexArray = [];
        for (element = 0 ; element < matrix.length ; element++){
            if ((matrix[element].indexOf(numberToBeFound)) != -1) {
                tempIndexArray.push(matrix[element].indexOf(numberToBeFound))
                if ((allAreEqual(tempIndexArray) === true) && (tempIndexArray.length === matrix.length)) {
                    return true
                };
            };
        };
    };

    // funzione per controllo orizzontale di + array 
    function CheckOrizontal(matrix, totalSumNumber){
        let element;
        for (element = 0 ; element < matrix.length ; element++){
            if (matrix[element].reduce((a, b) => {return a+b;}) === totalSumNumber ) {
                return true; 
            }; 
        };
    };

    // funzione per controllo diagonale bassa (quadrato)
    function checkDiagonaldDown (matrix, numberToBeFind){
        let indexVertical;
        let indexOrizontal;
        const tempArray = [];
        for (indexVertical = 0 ; indexVertical < matrix.length ; indexVertical++){
            for (indexOrizontal = 0 ; indexOrizontal < matrix.length ; indexOrizontal++) {
                if((indexVertical === indexOrizontal)&&(matrix[indexVertical][indexOrizontal]===numberToBeFind)){
                    tempArray.push(numberToBeFind);
                    if (tempArray.length === matrix.length){
                        return true
                    };
                };
            };
        };
    };

    // funzione per controllo diagonale alto (quadrato)
    function checkDiagonalUp (matrix, numberToBeFind){
        let indexVertical;
        let indexOrizontal;
        const tempArray = [];
        for (indexVertical = 0 ; indexVertical < matrix.length ; indexVertical++){
            for (indexOrizontal = 0 ; indexOrizontal < matrix.length ; indexOrizontal++) {
                if((indexVertical === matrix.length-indexOrizontal-1)&&(matrix[indexVertical][indexOrizontal]===numberToBeFind)){
                    tempArray.push(numberToBeFind);
                    if (tempArray.length === matrix.length){
                        return true
                    };
                };
            };
        };
    };

    if (checkVertical(matrixArray, number) === true) {
        console.log ('Bingo verticale ');
        return true;
    } else if (CheckOrizontal(matrixArray, number) === true) {
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

// -------------------------------------------------------------------------------------

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


