//024-create-a-bingo-card

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
    return console.table(bingoCard)
};
randomBingoCard();

