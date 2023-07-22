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

let card = generateBingoCard();
printBingoCard(card);