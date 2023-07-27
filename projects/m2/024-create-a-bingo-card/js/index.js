function generateBingoCardNumber(){
    const bingoCardNumber = {};
    const gameName = 'BINGO';

    for (let i = 1; i <= gameName.length; i++) {
        const pointsForColumn = 15
        const minValueForThisColumn = i*pointsForColumn - (pointsForColumn - 1);
        const maxValueForThisColumn = i*pointsForColumn;

        bingoCardNumber[gameName.charAt(i-1)] = Math.floor( Math.random()*(maxValueForThisColumn - minValueForThisColumn + 1) + minValueForThisColumn);
    }

    return bingoCardNumber;
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
        const setOf5BingoCards = [];
        for(let i = 0; i < 5; i++){
            setOf5BingoCards.push( generateBingoCardNumber() );
        }

        const table = designBingoCard(setOf5BingoCards);
        console.log(table);

        return;
    } 
    init();
}