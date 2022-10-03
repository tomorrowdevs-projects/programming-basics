//024-create-a-bingo-card

function randomBingoCard() {

    const NumberInLine = 5;
    const rangeOfNumber = 15;
    let minNumber = 1;
    let maxNumber = 15;
    // let element = 0 ;

    const bingoCard = {
        'B': [],
        'I': [],
        'N': [],
        'G': [],
        'O': [],
        
    };

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
    
   for(element = 0 ; element <= NumberInLine-1; element++){
        while (Object.values(bingoCard[Object.keys(bingoCard)[element]]).length != NumberInLine) {

            let Line = Object.values(bingoCard[Object.keys(bingoCard)[element]]);
            bingoCard[Object.keys(bingoCard)[element]] = uniqueAndSort(Line, minNumber, maxNumber);
        
            if ((Object.values(bingoCard[Object.keys(bingoCard)[element]]).length) === NumberInLine){ 

                // element =  element + 1; //!!senza ciclo for con questa riga non funziona!
                minNumber = minNumber + rangeOfNumber;
                maxNumber = maxNumber + rangeOfNumber;
            };
        };
    };
    return console.table(bingoCard)
};
randomBingoCard();

