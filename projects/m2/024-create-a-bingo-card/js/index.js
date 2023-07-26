function generateBingoCardNumber(){
    const bingoCardNumber = {};
    const gameName = 'BINGO';

    for (let i = 1; i <= gameName.length; i++) {
        const minValueForThisColumn = i*15 - 14;
        const maxValueForThisColumn = i*15;

        bingoCardNumber[gameName.charAt(i-1)] = Math.floor( Math.random()*(maxValueForThisColumn - minValueForThisColumn + 1) + minValueForThisColumn);

    }

    return bingoCardNumber;

}

function designBingoCard(bingoCardNumber){
    let table = '';
    
    Object.keys(bingoCardNumber).forEach( key => {
        table += `|  ${key}  |  ${bingoCardNumber[key].toString().padStart(2, ' ')}  |\n`;
    });

    return table;
}

if (require.main === module) { 
    function init(){
        const randomBingoCardNumber = generateBingoCardNumber();
        const table = designBingoCard(randomBingoCardNumber);
        
        console.log(table);

        return;
    } 
    init();
}