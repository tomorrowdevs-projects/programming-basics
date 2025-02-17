import {designBingoCard} from '../../024-create-a-bingo-card/js/index.js';

/**
 *  To mark the potential drawn numbers on the Bingo card, it's a void function, the received parameter is modified directly
 * @param {Array} bingoCardNumbers bingo card containing a series of 5 lines which in turn contain 5 numbers
 * @param {string} drawnNumber the drawn number to check among the bingo card numbers, consisting of a letter and one or two numbers, i.e. B5 or I18
 * @return {undefined} an undefined value because it's working directly on the received parameter without creating a copy
 */
function markOutDrawnNumber(bingoCardNumbers, drawnNumber){
    // Mark the numbers drawn on the Bingo card replacing them with a 0
    for (let i = 0; i < bingoCardNumbers.length; i++) {
        const bingoCardRow = bingoCardNumbers[i];

        Object.keys(bingoCardRow).forEach( key => {
            if(drawnNumber === key + bingoCardRow[key]){
                bingoCardRow[key] = 0;
            }
        });
    }

    return;
}

/**
 *  Check if a horizontal line of the Bingo card is winning, i.e. if it contains only zeros
 * @param {string} gameName name of the game where each letter is assigned as a name to a column
 * @param {Array} bingoCardLine the list of numbers to check that make up the horizontal line
 * @return {boolean} if the line wins, the returned value is true, otherwise false
 */
function checkHorizontalLine(gameName, bingoCardLine){
    for (let i = 0; i < gameName.length; i++) {
        if(bingoCardLine[gameName[i]] !== 0){
            return false;
        }
    }

    return true;
}

/**
 *  Check if the Bingo card has a winning vertical line, i.e. contains only zeros
 * @param {string} bingoCardColumn the column in which to search for numbers
 * @param {Array} markedBingoCard the bingo Card to check
 * @return {boolean} if a winning line is found, the returned value is true, otherwise false
 */
function checkVerticalLine(bingoCardColumn, markedBingoCard){
    for (let i = 0; i < markedBingoCard.length; i++) {
        if(markedBingoCard[i][bingoCardColumn] !== 0){
            return false;
        }
    }

    return true;
}

/**
 *  Check if the Bingo card has a winning diagonal line starting at the top left and ending at the bottom right, i.e. contains only zeros
 * @param {string} gameName name of the game where each letter is assigned as a name to a column
 * @param {Array} markedBingoCard the bingo Card to check
 * @return {boolean} if a winning line is found, the returned value is true, otherwise false
 */
function checkFirstDiagonalLine(gameName, markedBingoCard){
    for (let i = 0; i < gameName.length; i++) {
        if(markedBingoCard[i][gameName[i]] !== 0){
            return false;
        }
    }

    return true;
}

/**
 *  Check if the Bingo card has a winning diagonal line starting at the top right and ending at the bottom left, i.e. contains only zeros
 * @param {string} gameName name of the game where each letter is assigned as a name to a column
 * @param {Array} markedBingoCard the bingo Card to check
 * @return {boolean} if a winning line is found, the returned value is true, otherwise false
 */
function checkSecondDiagonalLine(gameName, markedBingoCard){
    for (let i = 0; i < gameName.length; i++) {
        if(markedBingoCard[i][gameName[gameName.length -i -1]] !== 0){
            return false;
        }
    }
    return true;

}

/**
 * Check if the Bingo card has a line of five zeros (vertical, horizontal or diagonal), the zeros represent the numbers drawn.
 * @param {Array} markedBingoCard the bingo Card to check
 * @return {boolean} true if a line of 5 zeros is found, false otherwise
 */
function isWinning(markedBingoCard){
    const gameName = 'BINGO';
    let lineType = '';
    let won; // This uninitialized control boolean is used to determine if the winning line has been found, it will be set to true at the start of each cycle and to false whenever a non-zero number is found.

    for (let i = 0; i < gameName.length; i++) {
        if( won = checkHorizontalLine(gameName, markedBingoCard[i]) ){
            lineType = 'horizontal';
            break;
        }

        if( won = checkVerticalLine(gameName[i], markedBingoCard) ){
            lineType = 'vertical';
            break;
        }
        // To avoid further cycles, the diagonal check is performed only on the main first cycle
        if(i === 0){
            if( won = checkFirstDiagonalLine(gameName, markedBingoCard) ){
                lineType = 'diagonal (from left to right)';
                break;
            }

            if( won = checkSecondDiagonalLine(gameName, markedBingoCard) ){
                lineType = 'diagonal (from right to left)';
                break;
            }
        }
    }

    if(won === true){
        console.log('The winning line is ' + lineType + '.');
    } 
    return won;
}

function init(){
    // Creates a list of numbers to drawn to verify that the program finds the winning cards for horizontal, vertical, diagonal and non-winning lines
    const horizontalWinningCalls = ['B8', 'I17', 'N39', 'G53', 'O74'];
    const verticalWinningCalls = ['I22', 'I21', 'I17', 'I26', 'I18'];
    const diagonalLRWinningCalls = ['B9', 'I21', 'N39', 'G48', 'O72'];
    const diagonalRLWinningCalls = ['O67', 'G47', 'N39', 'I26', 'B6'];
    const horizontalLosingCalls = ['O68', 'G47', 'N39', 'I26', 'B6'];
    
    const bingoCalls = [
        horizontalWinningCalls,
        verticalWinningCalls,
        diagonalLRWinningCalls,
        diagonalRLWinningCalls,
        horizontalLosingCalls
    ];
    
    // At each drawn it is checked if the Bingo card is winner
    for(let i = 0; i < bingoCalls.length; i++){
        const bingoCardNumbers = [
            { B: 9, I: 22, N: 40, G: 49, O: 67 },
            { B: 2, I: 21, N: 41, G: 47, O: 68 },
            { B: 8, I: 17, N: 39, G: 53, O: 74 },
            { B: 1, I: 26, N: 31, G: 48, O: 66 },
            { B: 6, I: 18, N: 45, G: 60, O: 72 }
        ];
        
        const table = designBingoCard(bingoCardNumbers);
        console.log(table);
        // Make a shallow copy of the Bingo card to have both the original and the marked one
        const markedBingoCard = [...bingoCardNumbers];
        let won = false;
        // Check the Bingo card, mark the numbers that came out during the draw and return a marked Bingo Card
        for (let j = 0; j < bingoCalls[i].length; j++) {
            const drawnNumber = bingoCalls[i][j];
            markOutDrawnNumber(markedBingoCard, drawnNumber);
            
            if(j > 3){ // Start to check if winning from fifth drawn numbers to avoid useless check
                if( isWinning(markedBingoCard) ){
                    console.log('The last Bingo number to be drawn which led to the win is ' + drawnNumber);
                    console.log((j+1) + ' numbers have been drawn.');
                    won = true;
                    break;
                }
            }
        }

        if(won === false){
            console.log('This Bingo card is not winning.');
        }

        console.log(designBingoCard(markedBingoCard) + '\n');
    }

    return;
} 
init();

export {
    markOutDrawnNumber,
    isWinning
};