import {generateBingoCardNumbers} from '../../024-create-a-bingo-card/js/index.js';
import {markOutDrawnNumber, isWinning} from '../../025-checking-for-a-winning-card/js/index.js';

/**
 * Created using the Fisher-Yates algorithm to shuffle bingo numbers
 * @param {Array} values bingo numbers to be shuffle
 * @return {Array} bingo number shuffled
 */
function fisherYatesShuffle(values) {
    if( Array.isArray(values) ){
        for (let i = values.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i+1));
            [values[i], values[j]] = [values[j], values[i]];
        }
    }

    return values;
}

/**
 * Create an ordered list of bingo numbers from B1 to O75
 * @return {Array} ordered list of bingo numbers
 */
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

/**
 * Calculate the minimum, maximum and average number of calls that must be made before a Bingo card wins playing a fixed number of times
 * @param {number} numberOfSimulations how many times to create and check a Bingo card
 * @param {Array} callsList a list of Bingo numbers
 * @return {Array} minimum, maximum and average number of calls made before a Bingo card wins
 */
function calculateStatisticsCalls(numberOfSimulations, callsList){
    let minCalls = 0;
    let maxCalls = 0;
    let totalCalls = 0;

    for(let i = 0; i < numberOfSimulations; i++){
        const bingoCardNumbers = generateBingoCardNumbers();
        // Make a shallow copy of the Bingo card to have both the original and the marked one
        const markedBingoCard = [...bingoCardNumbers];
        // Check the Bingo card, mark the numbers that came out during the draw and return a marked Bingo Card
        let won = false;
        for (let j = 0; j < callsList.length; j++) {
            const drawnNumber = callsList[j];
            markOutDrawnNumber(markedBingoCard, drawnNumber);
            
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

    return [minCalls, maxCalls, totalCalls/numberOfSimulations];
}

function init(){
    const bingoCalls = generateBingoCalls();
    const randomBingoCalls = fisherYatesShuffle(bingoCalls);
    const [minCalls, maxCalls, averageCalls] = calculateStatisticsCalls(1000, randomBingoCalls);

    console.log('Minimum ' + minCalls);
    console.log('Max ' + maxCalls);
    console.log('Average ' + averageCalls);

    return;
} 
init();