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

function designDashedLine(tableLength){
    let dashedLine = '';
    for (let i = 0; i < tableLength; i++) {
        dashedLine += '-';
    }

    return dashedLine;
}

function designBingoCardHead(){
    let tableHead = '';
    const gameName = 'BINGO';

    for (let i = 0; i < gameName.length; i++) {
        tableHead += `${i === 0 ? '|' : ''}  ${gameName.charAt(i)}  |`;
    }

    return tableHead;
}

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

if (require.main === module) { 
    function init(){
        const bingoCardNumbers = generateBingoCardNumbers();
        const table = designBingoCard(bingoCardNumbers);
        console.log(table);

        return;
    } 
    init();
}

module.exports = { // For CommonJS environment
    // export { // For ES module environment. In addition for Visual Studio Code two package.json files must be created, one in this file folder, the other one in the application file folder, they must contain the following code { "type": "module" }
    designBingoCard,
    generateBingoCardNumbers
};