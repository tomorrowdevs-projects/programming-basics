const { designBingoCard, generateBingoCardNumbers } = require( '../../024-create-a-bingo-card/js/index.js' );
// import { designBingoCard, generateBingoCardNumbers } from '../../024-create-a-bingo-card/js/index.js'; // For ES module environment (see the imported file for additional informations)

function drawnBingoNumbers(drawns){
    const drawnNumbers = [];

    for (let i = 0; i < drawns; i++) {
        const drawnNumber = Math.floor(Math.random()*75 + 1);

        if( ! drawnNumbers.includes(drawnNumber) ){
            drawnNumbers.push(drawnNumber);            
        }  else {
            i--;
        }
    }

    return drawnNumbers;
}

function markOutNumbers(bingoCardNumbers, drawnNumbers){
    const markedBingoCard = [];
    // mark the numbers drawn on the Bingo card replacing them with a 0
    for (let i = 0; i < bingoCardNumbers.length; i++) {

        const bingoCardNumber = bingoCardNumbers[i];
        markedBingoCard[i] = []

        Object.keys(bingoCardNumber).forEach( key => {
            if( drawnNumbers.includes(bingoCardNumber[key]) ){
                markedBingoCard[i].push(0);
            } else {
                markedBingoCard[i].push(bingoCardNumber[key]);
            }
        });

    }

    return markedBingoCard;
}

function isWinning(recordsToCheck){
    const results = [];

    for (let i = 0; i < recordsToCheck.length; i++) {
        let winning = true;

        for (let j = 0; j < recordsToCheck[i].length; j++) {
            if(recordsToCheck[i][j] !== 0){
                winning = false;
            }
        }

        results.push(winning);
    }

    if( results.includes(true) ){
        return true;
    }

    return false;
}

function generateRecords(markedBingoCard){
    const verticalRecord = [];
    const diagonalRecord = [[],[]];

    for (let i = 0; i < markedBingoCard.length; i++) {

        for (let j = 0; j < markedBingoCard[i].length; j++) {
            // vertical record assignment
            if( verticalRecord[j] === undefined ){
                verticalRecord[j] = [];
            }        
            verticalRecord[j].push(markedBingoCard[i][j]);
            // left diagonal record assignment
            if(i === j){
                diagonalRecord[0].push(markedBingoCard[i][j]);
            }
            // right diagonal record assignment
            if(j === markedBingoCard.length-i-1){
                diagonalRecord[1].push(markedBingoCard[i][j]);
            }
        }

    }

    return [markedBingoCard, verticalRecord, diagonalRecord];
}

function init(){
    // Draw several numbers
    const drawnNumbers = drawnBingoNumbers(60);
    // Creating several Bingo cards
    for(let i = 0; i < 7; i++){
        const bingoCardNumbers = generateBingoCardNumbers();
        const table = designBingoCard(bingoCardNumbers);
        // Design Bingo card
        console.log(table);
        // Check the Bingo card, mark the numbers that came out during the draw and return a marked Bingo Card
        const markedBingoCard = markOutNumbers(bingoCardNumbers, drawnNumbers);
        // Generate two lists containing the numbers taken from the verticals and the diagonals and adds them to a set containing those taken from the horizontals
        const generatedRecords = generateRecords(markedBingoCard);

        // Checks whether or not the Bingo card contain a winning line, be it horizontal, vertical or diagonal
        for (let i = 0; i < generatedRecords.length; i++) {

            const result = isWinning(generatedRecords[i]);

            if( result === true ){
                console.log(result);
                break;
            }
        }
    }

    return;
} 
init();