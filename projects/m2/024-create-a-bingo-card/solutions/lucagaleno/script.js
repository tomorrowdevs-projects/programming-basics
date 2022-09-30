//024-create-a-bingo-card

function randomBingoCards() {

    const bingoCard = {
        'B': [],
        'I': [],
        'N': [],
        'G': [],
        'O': []
    };

    Object.keys(bingoCard).forEach(element => {
        
          while (Object.values(bingoCard[element]).length != 5) {

            //funzione per la creazione di un numero casuale
            function getRndInteger(min, max) {
                return Math.floor(Math.random() * (max - min + 1) ) + min;
            };

            //con questa funzione l'output non è corretto, come mai?
            /*
            function uniqueAndSort(bingoLine){
                const uniqueNumber = Array.from(new Set(bingoLine)); //! verifico che i numeri casuali siano univoci
                bingoLine = uniqueNumber; // assegno i numeri univoci all'array
                return bingoLine.sort((a,b) => a-b ); //ordino i numeri
            }
            */

            if (element === 'B'){
                let randomNumber = getRndInteger(1, 15);
                bingoCard[element].push(randomNumber); //push del numero casuale
                const test = bingoCard[element];
                //uniqueAndSort(test);
                let uniqueNumber = Array.from(new Set(bingoCard[element])); //! creo una copia dell'array con elementi univoci, grazie al Set
                bingoCard[element] = uniqueNumber; // assegno i numeri univoci all'array
                bingoCard[element].sort((a,b) => a-b ); //ordino i numeri considerati come integer
            }
            if (element === 'I'){
                let randomNumber = getRndInteger(16, 30);
                bingoCard[element].push(randomNumber);
                let uniqueNumber = Array.from(new Set(bingoCard[element]));
                bingoCard[element] = uniqueNumber; 
                bingoCard[element].sort(); 
            }
            if (element === 'N'){
                let randomNumber = getRndInteger(31 ,45);
                bingoCard[element].push(randomNumber);
                let uniqueNumber = Array.from(new Set(bingoCard[element]));
                bingoCard[element] = uniqueNumber; 
                bingoCard[element].sort(); 
            }
            if (element === 'G'){
                let randomNumber = getRndInteger(46, 60);
                bingoCard[element].push(randomNumber);
                let uniqueNumber = Array.from(new Set(bingoCard[element]));
                bingoCard[element] = uniqueNumber;  
                bingoCard[element].sort(); 
            }
            if (element === 'O'){
                let randomNumber = getRndInteger(61, 75);
                bingoCard[element].push(randomNumber);
                let uniqueNumber = Array.from(new Set(bingoCard[element]));
                bingoCard[element] = uniqueNumber;
                bingoCard[element].sort();   
            }
        }
    });
    console.table(bingoCard)
};
randomBingoCards();

