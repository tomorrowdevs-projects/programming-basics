//026-play-bingo

import { randomBingoCard, checkForWinningCard, bingoCardInIn1Array, bingoCardArryinMatrix } from "./utils.js";

// Creazione lista completa numeri Bingo
function createListTot () {

const letters = ['B','I','N','G','O'];
const lettersNumbers = [];

let maxNumber = 15;
let letterIndex = 0;

for (let i=1; i <= 75; i++){
     
    if(i <= maxNumber){    
        lettersNumbers.push(letters[letterIndex]+i);
      
        if (lettersNumbers.length === maxNumber){
            maxNumber = maxNumber + 15;
            letterIndex = letterIndex + 1;
        };
    };
};
return lettersNumbers
};

// Mescolo i valori di un array
// Fisher–Yates shuffle algorithm
function shuffleArrayElement(array) {
    let currentIndex = array.length
    let randomIndex;
      
    while (currentIndex != 0) {
  
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        //inverto il valore dell'indice con il valore del indice random
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    };
    return array;
  };

const schuffeledList = shuffleArrayElement(createListTot());
  
//funzione che trasforma in 0 i numeri usciti con report finale
function transmortIn0Count(RandomMatrix){

    let count = 0;
    let element;
    
    for (let x = 0; x < schuffeledList.length; x++){
        
        count = count + 1;
        element = schuffeledList[x]

        for (let i=0; i<5;i++){
            if (RandomMatrix[i].indexOf(element) != -1){
            
                let index = RandomMatrix[i].indexOf(element);
                RandomMatrix[i][index] = 0; 
            };
        };
        if (checkForWinningCard(RandomMatrix) === true){ 
            return count
        };
    };
};

//funzione che simula 1000 partite
function simulation1000Game(numGames){

    let min = numGames;
    let max = 0 ;
    let sum = 0;
    let avarage = 0;

    for (let i=1; i<= numGames;i++){

        let winningCount = transmortIn0Count(bingoCardArryinMatrix(bingoCardInIn1Array(randomBingoCard()))) ;

        if (winningCount < min){
            min = winningCount;
        };
        if (winningCount > max){
            max = winningCount;
        };
        sum = sum + winningCount;
    };
    
    avarage = sum/numGames;
    return '\nnumero min di estrazioni prima di vincere = ' + min + 
    '\nnumero max di estrazioni prima di vincere = ' + max + 
    '\nnumero medio di estrazioni prima di vincere = ' + avarage
};

console.log('Report: ' + simulation1000Game(1000));











