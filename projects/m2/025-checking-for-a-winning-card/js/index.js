function generateBingoCard() {
    const ranges = [[1, 15], [16, 30], [31, 45], [46, 60], [61, 75]];
    const headers = ['B', 'I', 'N', 'G', 'O'];
    const bingoColumns = {};

    for (let i = 0; i < 5; i++) {
        const column = [];
        for (let j = 0; j < 5; j++) {
            const min = ranges[i][0];
            const max = ranges[i][1];
            const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
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
  
    for (let i = 0; i < headers.length; i++) {
      if (headers.every(header => card[header][i] === 0)) {
        return true;
      }
    }
  
    for (let header of headers) {
      if (card[header].every(num => num === 0)) {
        return true;
      }
    }
  
    return false;
  }
  

function main() {
    const card1 = generateBingoCard();
    const card2 = generateBingoCard();
    const card3 = generateBingoCard();
    const card4 = generateBingoCard();

    card1['B'] = [0, 0, 0, 0, 0]; // A winning vertical line
    card2['B'][0] = card2['I'][1] = card2['N'][2] = card2['G'][3] = card2['O'][4] = 0; // A winning diagonal line
    card3['B'][0] = card3['I'][0] = card3['N'][0] = card3['G'][0] = card3['O'][0] = 0; // A winning horizontal line
    card4['B'][0] = card4['I'][1] = 0; // A losing card

    [card1, card2, card3, card4].forEach((card, i) => {
        console.log(`Card ${i + 1}:`);
        printBingoCard(card);
        console.log(checkBingoCard(card) ? "This card has a winning line!" : "This card does not have a winning line.");
    });
}

main();
