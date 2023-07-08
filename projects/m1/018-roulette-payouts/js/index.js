function generateRouletteElements( specialValues, lowestValue, highestValue ){
    const elementsList = [ ...specialValues ]

    for( i = lowestValue; i < highestValue; i++ ){
            elementsList.push( i );
    }

    return elementsList;
}

function spinRoulette( rouletteElements ){
    const extractedValue = Math.floor(Math.random() * rouletteElements.length);
    return rouletteElements[extractedValue];
}
// I prefer to create this function instead using "includes" built-in function (like in previous exercies) to have better compatibility.
function isInArray( element, array ){
    if( array.indexOf(element) !== -1 ){
        return true;
    }
     
    return false;
}

function checkBet( extractedValueToCheck, reds, greens ){
    let parity = '';
    let range = '';
    let color = 'Black';
    
    if( isInArray( extractedValueToCheck, greens ) ){
        color = 'Green';
    } else {
        parity = 'Even';
        range = '1 to 18';

        if( isInArray( extractedValueToCheck, reds ) ){
            color = 'Red';
        }

        if ( extractedValueToCheck % 2 != 0 ){
            parity = 'Odd';
        }

        if ( extractedValueToCheck > 18 ){
            range = '19 to 36';
        }
    }

    return [extractedValueToCheck, color, parity, range];
}

function analyzeBet( bet ){

    const [ extractedValueNumber, extractedValueColor, extractedValueParity, extractedValueRange ] = bet;

    let message = `The spin resulted in ${extractedValueNumber} \n` +
                  `Pay ${extractedValueNumber}`;

    if( extractedValueColor !== 'Green' ){
        message += `\n` +
                   `Pay ${extractedValueColor} \n` +
                   `Pay ${extractedValueParity} \n` +
                   `Pay ${extractedValueRange}`;
    }

    return message;
}

function init(){

    const greenSpaces = [0, '00'];
    const lowestPositiveNumber = 1;
    const highestPositiveNumber = 36;

    const redSpaces = [lowestPositiveNumber, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, highestPositiveNumber];
    
    const rouletteElements = generateRouletteElements( greenSpaces, lowestPositiveNumber, highestPositiveNumber );

    const extractedValue = spinRoulette( rouletteElements );
    const winningsBet = checkBet( extractedValue, redSpaces, greenSpaces );

    console.log( analyzeBet( winningsBet ) );
}

init();