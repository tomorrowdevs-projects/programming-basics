/**
 * Generates a Bingo card with random numbers, no duplicates, from B1 to O75
 * @return {Array} the generated bingo Card 
 */
function generateBingoCardNumbers(){
    const gameName = 'BINGO';
    const bingoCardNumbers = [];
    const generatedNumbers = [];

    for (let i = 0; i < 5; i++) {
        const bingoCardNumber = {};

        for (let i = 1; i <= gameName.length; i++) {
            const pointsForColumn = 15
            const minValueForThisColumn = i*pointsForColumn - (pointsForColumn - 1);
            const maxValueForThisColumn = i*pointsForColumn;
            const generatedNumber = Math.floor( Math.random()*(maxValueForThisColumn - minValueForThisColumn + 1) + minValueForThisColumn);

            if( ! generatedNumbers.includes(generatedNumber) ){
                generatedNumbers.push(generatedNumber);
                bingoCardNumber[gameName.charAt(i-1)] = generatedNumber;
            } else {
                i--;
            }
        }

        bingoCardNumbers.push(bingoCardNumber);
    }
    
    return bingoCardNumbers;
}

/**
 * Generates a dashed line as long as the space occupied by the width of the bingo card
 * @param {number} tableLength bingo card width
 * @return {string} the dashed line
 */
function designDashedLine(tableLength){
    let dashedLine = '';
    for (let i = 0; i < tableLength; i++) {
        dashedLine += '-';
    }

    return dashedLine;
}

/**
 * Generates the head of the Bingo card containing BINGO divided by pipes and spaces
 * @return {string} the head of the bingo card
 */
function designBingoCardHead(){
    let tableHead = '';
    const gameName = 'BINGO';

    for (let i = 0; i < gameName.length; i++) {
        tableHead += `${i === 0 ? '|' : ''}  ${gameName.charAt(i)}  |`;
    }

    return tableHead;
}

/**
 * Generates a row of the Bingo card containing the numbers divided by pipes and spaces
 * @return {string} the generated a row of the bingo card
 */
function designBingoCardRow(bingoCardNumber){
    let tableRow = '';
    let count = 0;
    
    Object.keys(bingoCardNumber).forEach( key => {
        const spaceRight = bingoCardNumber[key].toString().length === 1 ? '  ' : ' ';
        tableRow += `${count === 0 ? '\n|' : ''}  ${bingoCardNumber[key]}${spaceRight}|`;
        count++;
    });

    return tableRow;
}

/**
 * Generates the Bingo card
 * @param {Array} bingoCardRecords all the numbers of the Bingo card
 * @return {string} the bingo Card complete and filled out with head and rows
 */
function designBingoCard(bingoCardRecords){
    const tableHead = designBingoCardHead();
    const tableLength = tableHead.length;
    const dashedLine = designDashedLine(tableLength);
    let bingoCardRows = '';

    for (let i = 0; i < bingoCardRecords.length; i++) {
        bingoCardRows += `${designBingoCardRow(bingoCardRecords[i])}\n${dashedLine}`;
    }

    return `${dashedLine}\n${tableHead}\n${dashedLine}${bingoCardRows}`;
}

// The main program only runs if the file containing your solution has not been imported into another program
import {pathToFileURL} from 'url'
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
    function init(){
        const bingoCardNumbers = generateBingoCardNumbers();
        const table = designBingoCard(bingoCardNumbers);
        console.log(table);

        return;
    } 
    init();
}

export {
    designBingoCard,
    generateBingoCardNumbers
};