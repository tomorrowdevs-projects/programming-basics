import { generateBingoCardNumbers } from '../../024-create-a-bingo-card/js/index.js';
import { markOutDrawnNumber, isWinning } from '../../025-checking-for-a-winning-card/js/index.js';

// Function created using the Fisher-Yates algorithm to shuffle bingo numbers
function fisherYatesShuffle(values) {
    for (let i = values.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        [values[i], values[j]] = [values[j], values[i]];
    }

    return values;
}
// To create an ordered list of bingo numbers
function generateBingoCalls(){
    const gameName = 'BINGO';
    const bingoCalls = [];

    for (let i = 0; i < gameName.length; i++) {
        for (let j = (i*15)+1 ; j <= (i+1)*15; j++) {
            bingoCalls.push(gameName[i] + j);
        }
    }

    return bingoCalls;
}

function init(){
    // Draw several numbers
    const bingoCalls = generateBingoCalls();
    const randomBingoCalls = fisherYatesShuffle(bingoCalls);

    let minCalls = 0;
    let maxCalls = 0;
    let totalCalls = 0;
    // Creating 1,000 Bingo cards to simulate as many matches and found the minimum, maximum and average number of calls that must be made before the card wins.
    for(let i = 0; i < 1000; i++){
        const bingoCardNumbers = generateBingoCardNumbers();
        // Make a shallow copy of the Bingo card to have both the original and the marked one
        const markedBingoCard = [...bingoCardNumbers];
        // Check the Bingo card, mark the numbers that came out during the draw and return a marked Bingo Card
        let won = false;
        for (let j = 0; j < randomBingoCalls.length; j++) {
            const drawnNumber = randomBingoCalls[j];
            markOutDrawnNumber(markedBingoCard, drawnNumber); // Working on the same object change it without creating a shallow copy
            // Checks whether or not the Bingo card contain a winning line, be it horizontal, vertical or diagonal
            if(j > 3){ // Start to check if winning from fifth drawn numbers to avoid useless check
                if( isWinning(markedBingoCard) ){
                    const numberOfDrawns = j+1;

                    if(i === 0){
                        minCalls = numberOfDrawns;
                        maxCalls = numberOfDrawns;
                    }
                    if( numberOfDrawns > maxCalls){
                        maxCalls = numberOfDrawns;
                    }

                    if( numberOfDrawns < minCalls){
                        minCalls = numberOfDrawns;
                    }

                    totalCalls += numberOfDrawns;

                    won = true;
                    break;
                }
            }                
        }

        if(won === false){
            console.log('This Bingo card is not winning.');
        }
    }

    console.log('Minimum ' + minCalls);
    console.log('Max ' + maxCalls);
    console.log('Average ' + totalCalls/1000);

    return;
} 
init();