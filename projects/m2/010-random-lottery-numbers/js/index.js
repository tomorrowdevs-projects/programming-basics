const { quickSortNumbers } = require( '../../../lib/sort-modules.js' );

function generateLotteryNumbers(){
    const lotteryNumbersDrawn = [];

    for (let i = 0; i < 6; i++) {
        const lotteryNumberDrawn = Math.floor( Math.random() * 49 ) + 1;
        if( ! lotteryNumbersDrawn.includes( lotteryNumberDrawn ) ){
            lotteryNumbersDrawn.push( lotteryNumberDrawn );
        } else {
            i--;
        }       
    }

    return lotteryNumbersDrawn;
}

function init(){
    const lotteryNumbersDrawn = quickSortNumbers( generateLotteryNumbers() );

    for (let i = 0; i < lotteryNumbersDrawn.length; i++) {
        console.log(lotteryNumbersDrawn[i]);
    }

    return;
} 
init();