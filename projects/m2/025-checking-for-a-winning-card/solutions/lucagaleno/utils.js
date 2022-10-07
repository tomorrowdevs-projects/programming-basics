// Elenco funzioni e variabili

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
 function checkHorizontal(matrix, totalSumNumber){
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

//funzione per la creazione di una carta bingo casuale
 function randomBingoCard() {

    const bingoCard = {
        'B': [],
        'I': [],
        'N': [],
        'G': [],
        'O': []
    };

    const NumberInLine = Object.keys(bingoCard).length; //numero di keys
    const rangeOfNumber = 15;
    let minNumber = 1;
    let maxNumber = 15;
    let element = 0; //inizio indice

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    };

    function uniqueAndSort(bingoLine, min, max){
        let randomNumber = getRndInteger(min, max);
        bingoLine.push(randomNumber);
        let uniqueNumber = Array.from(new Set(bingoLine));
        bingoLine = uniqueNumber; 
        return bingoLine.sort((a,b) => a-b ); 
    };

    while ((element < NumberInLine)) {  
            
        let Line = Object.values(bingoCard[Object.keys(bingoCard)[element]]);
        bingoCard[Object.keys(bingoCard)[element]] = uniqueAndSort(Line, minNumber, maxNumber);
            
        if ((Object.values(bingoCard[Object.keys(bingoCard)[element]]).length) === NumberInLine){
            element++;
            minNumber = minNumber + rangeOfNumber;
            maxNumber = maxNumber + rangeOfNumber;
        }
    }
    return bingoCard
};

// funzione per determinare se tutti gli elementi nell'array sono uguali
function allAreEqual(array) {
    const result = array.every(element => {
    if (element === array[0]) {
        return true;
    }
    });
    return result;
}; 

const bingoCardV = {
    'B': [1, 2, 0, 0, 0],
    'I': [15, 16, 0, 18, 19],
    'N': [31, 32, 0, 34, 35],
    'G': [45, 47, 0, 50, 54],
    'O': [63, 69, 0, 71, 72]
};

const bingoCardH = {
    'B': [1,2,4,5,10],
    'I': [0, 0, 0, 0, 0],
    'N': [31,35,38,41,42],
    'G': [53,55,58,59,60],
    'O': [61,62,64,65,75]
};
const bingoCardDD = {
    'B': [0, 2, 5, 8, 9],
    'I': [16, 0, 18, 19, 25],
    'N': [31, 33, 0, 41, 42],
    'G': [46, 0, 50, 0, 54],
    'O': [0, 62, 66, 70, 0]
};

const bingoCardDU = {
    'B': [1, 2, 5, 0, 0],
    'I': [16, 17, 18, 0, 25],
    'N': [31, 33, 0, 41, 42],
    'G': [46, 0, 50, 51, 54],
    'O': [0, 62, 66, 70, 89]
};


export { bingoCardV, bingoCardH, bingoCardDD, bingoCardDU }
export { checkVertical, checkHorizontal, checkDiagonalUp, checkDiagonaldDown, randomBingoCard, allAreEqual };

// Per test:
//module.exports = { checkVertical, checkHorizontal, checkDiagonalUp, checkDiagonaldDown, allAreEqual};



