//025-checking-for-a-winning-card

// INPUT

import { randomBingoCard } from "./modules/randomBingoCard.js";

const bingoCard1 = {
    'B': [1, 2, 0, 5, 7],
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

    const indexArry = Object.keys(bingoCard);
    let tempBingoCardDiagonalDown = []; //array temporaneo per controllo
    let tempBingoCardDiagonalUp = []; //array temporaneo per controllo
    let tempBingoCardVertical = []; //array temporaneo per controllo
    let elementKey;
    let elementIndex;
   
    // funzione per determinare se tutti gli elementi nell'array sono uguali
    function allAreEqual(array) {
        const result = array.every(element => {
        if (element === array[0]) {
            return true;
        }
        });
        return result;
    }; 

    //ciclo da 0 a 4 (vertivale sulla tabella)
    for (elementKey = 0 ; elementKey < indexArry.length ; elementKey++ ) {

         // controllo verticale 0
        if(Object.values(bingoCard[Object.keys(bingoCard)[elementKey]]).indexOf(0) != -1) {
            tempBingoCardVertical.push(Object.values(bingoCard[Object.keys(bingoCard)[elementKey]]).indexOf(0)); //creo un array di indici quando trovo uno 0 
            if ((allAreEqual(tempBingoCardVertical) === true) && (tempBingoCardVertical.length === indexArry.length)){
                return true;
            };
        };   
       
        if  //controllo orizzontale 0 con somma dei valori (se = 0 allora sono tutti 0)
        ((Object.values(bingoCard[Object.keys(bingoCard)[elementKey]]).reduce((a, b) => {return a+b;}) === 0 ))   {
            return true; 
        };

        //ciclo da 0 a 4 (orizzontale sulla tabella)
        for (elementIndex = 0; elementIndex < indexArry.length ; elementIndex++) {

            //controllo diagonale direzione verso il basso 0
            if ((elementIndex === elementKey) && (Object.values(bingoCard[Object.keys(bingoCard)[elementKey]])[elementIndex] === 0 )){               
                
                tempBingoCardDiagonalDown.push(0);
                if ((tempBingoCardDiagonalDown.length === indexArry.length)) {
                    return true;         
                };       
            }; 
            //controllo diagonale direzione verso alto 0
            if (((indexArry.length) - elementIndex - 1 === elementKey) && ((Object.values(bingoCard[Object.keys(bingoCard)[elementKey]])[elementIndex]) === 0)){
                
                tempBingoCardDiagonalUp.push(0);                
                if ((tempBingoCardDiagonalUp.length === indexArry.length )) {
                    return true;         
                };   
            }; 
        }; // fine secondo ciclo
    }; // fine primo ciclo 
     
    return false;
     
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
