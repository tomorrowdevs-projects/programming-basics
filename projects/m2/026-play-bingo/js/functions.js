function generateBingoCard() {
    const ranges = [[1, 15], [16, 30], [31, 45], [46, 60], [61, 75]];
    const headers = ['B', 'I', 'N', 'G', 'O'];
    const bingoColumns = {};

    for (let i = 0; i < 5; i++) {
        const column = [];
        let nums = Array.from({length: ranges[i][1] - ranges[i][0] + 1}, (_, idx) => idx + ranges[i][0]);
        nums = shuffle(nums);  // usa la funzione shuffle per mischiare i numeri
        for (let j = 0; j < 5; j++) {
            column.push(nums[j]);  // seleziona i primi 5 numeri dopo averli mischiati
        }
        bingoColumns[headers[i]] = column;
    }

    return bingoColumns;
}

function generateBingoCalls() {
    const calls = [];
    const letters = ['B', 'I', 'N', 'G', 'O'];
    const ranges = [[1, 15], [16, 30], [31, 45], [46, 60], [61, 75]];

    for (let i = 0; i < letters.length; i++) {
        for (let j = ranges[i][0]; j <= ranges[i][1]; j++) {
            calls.push(letters[i] + j);
        }
    }
    
    return calls;
}

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // Mentre ci sono ancora elementi da mescolare
    while (0 !== currentIndex) {

        // Scegli un elemento rimanente...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // E scambia con l'elemento corrente.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function checkBingoCard(card) {
    let headers = ['B', 'I', 'N', 'G', 'O'];

    // Controlla le linee orizzontali
    for (let i = 0; i < headers.length; i++) {
        if (headers.every(header => card[header][i] === 0)) {
            return true;
        }
    }

    // Controlla le linee verticali
    for (let header of headers) {
        if (card[header].every(num => num === 0)) {
            return true;
        }
    }

    return false;
}

function markNumber(card, call) {
    let header = call[0];
    let number = parseInt(call.slice(1));
    let index = card[header].indexOf(number);
    if (index !== -1) {
        card[header][index] = 0;
    }
}

module.exports = { 
    generateBingoCard, 
    generateBingoCalls, 
    shuffle, 
    checkBingoCard, 
    markNumber, 
};



