function generateBingoCard() {
    let ranges = [[1, 15], [16, 30], [31, 45], [46, 60], [61, 75]];
    let headers = ['B', 'I', 'N', 'G', 'O'];
    let bingoColumns = {};

    for (let i = 0; i < 5; i++) {
        let column = [];
        for (let j = 0; j < 5; j++) {
            let min = ranges[i][0];
            let max = ranges[i][1];
            let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
            column.push(randomNum);
        }
        bingoColumns[headers[i]] = column;
    }

    return bingoColumns;
}

function printBingoCard(bingoColumns) {
    console.log(' B  I  N  G  O');
    for (let i = 0; i < 5; i++) {
        let row = '';
        for (let header of ['B', 'I', 'N', 'G', 'O']) {
            row += String(bingoColumns[header][i]).padStart(2, ' ') + ' ';
        }
        console.log(row);
    }
}

function checkBingoCard(card) {
    let headers = ['B', 'I', 'N', 'G', 'O'];

    for (let i = 0; i < 5; i++) {
        if (headers.every(header => card[header][i] === 0)) {
            return true;
        }
    }

    for (let header of headers) {
        if (card[header].every(num => num === 0)) {
            return true;
        }
    }

    if (headers.every((header, i) => card[header][i] === 0)) {
        return true;
    }
    if (headers.every((header, i) => card[header][4 - i] === 0)) {
        return true;
    }

    return false;
}

function main() {
   
    let card1 = generateBingoCard();
    let card2 = generateBingoCard();
    let card3 = generateBingoCard();
    let card4 = generateBingoCard();

    
    card1['B'] = [0, 0, 0, 0, 0]; 
    card2['B'][0] = card2['I'][1] = card2['N'][2] = card2['G'][3] = card2['O'][4] = 0; 
    card3['B'][0] = card3['I'][0] = card3['N'][0] = card3['G'][0] = card3['O'][0] = 0; 
    card4['B'][0] = card4['I'][1] = 0; 

 
    [card1, card2, card3, card4].forEach((card, i) => {
        console.log(`Card ${i + 1}:`);
        printBingoCard(card);
        console.log(checkBingoCard(card) ? "Questa carta ha una linea vincente!" : "Questa carta non ha una linea vincente.");
    });
}

main();
