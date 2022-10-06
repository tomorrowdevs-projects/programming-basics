


// funzione per controllo vertivale di + array con dimensione uguale (quadrato)
export function checkVertical(matrix, numberToBeFound){
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
export function checkHorizontal(matrix, totalSumNumber){
    let element;
    for (element = 0 ; element < matrix.length ; element++){
        if (matrix[element].reduce((a, b) => {return a+b;}) === totalSumNumber ) {
            return true; 
        }; 
    };
};


// funzione per controllo diagonale bassa (quadrato)
export function checkDiagonaldDown (matrix, numberToBeFind){
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
export function checkDiagonalUp (matrix, numberToBeFind){
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
export function randomBingoCard() {

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
export function allAreEqual(array) {
    const result = array.every(element => {
    if (element === array[0]) {
        return true;
    }
    });
    return result;
}; 

module.exports = { checkVertical, checkHorizontal, checkDiagonalUp, checkDiagonaldDown }