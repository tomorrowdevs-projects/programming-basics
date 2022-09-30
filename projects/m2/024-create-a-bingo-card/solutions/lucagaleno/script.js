//024-create-a-bingo-card

function randomBingoCard() {

    const bingoCard = {
        'B': [],
        'I': [],
        'N': [],
        'G': [],
        'O': []
    };

    Object.keys(bingoCard).forEach(element => {
        
          while (Object.values(bingoCard[element]).length != 5) {

            //funzione per la creazione di un numero casuale intero
            function getRndInteger(min, max) {
                return Math.floor(Math.random() * (max - min + 1) ) + min;
            };

            //funzione per avere un array con numeri univoci e in ordine crescente            
            function uniqueAndSort(bingoLine){
                let uniqueNumber = Array.from(new Set(bingoLine)); //! verifico che i numeri casuali siano univoci
                bingoLine = uniqueNumber; // assegno i numeri univoci all'array
                return bingoLine.sort((a,b) => a-b ); //ordino i numeri
            }
            
            if (element === 'B'){
                let randomNumber = getRndInteger(1, 15);
                bingoCard[element].push(randomNumber); //push del numero casuale
                bingoCard[element] = uniqueAndSort(bingoCard[element]);
            }
            if (element === 'I'){
                let randomNumber = getRndInteger(16, 30);
                bingoCard[element].push(randomNumber);
                bingoCard[element] = uniqueAndSort(bingoCard[element]);
            }
            if (element === 'N'){
                let randomNumber = getRndInteger(31 ,45);
                bingoCard[element].push(randomNumber);
                bingoCard[element] = uniqueAndSort(bingoCard[element]);
            }
            if (element === 'G'){
                let randomNumber = getRndInteger(46, 60);
                bingoCard[element].push(randomNumber);
                bingoCard[element] = uniqueAndSort(bingoCard[element]);
            }
            if (element === 'O'){
                let randomNumber = getRndInteger(61, 75);
                bingoCard[element].push(randomNumber);
                bingoCard[element] = uniqueAndSort(bingoCard[element]);
            }
        }
    });
    console.table(bingoCard)
};
randomBingoCard();

