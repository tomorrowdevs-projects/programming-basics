const prompt = require("prompt-sync")({ sigint: true}) ;

function askInteger(){
    const askedInteger = Math.abs( prompt('Enter a non-negative integer number: ') );

    if ( ! isNaN( askedInteger ) ){
         return askedInteger;
    }

    console.log( 'Please enter a valid integer number.' );
    return askInteger();
}

/**
 * Converts a non-negative integer from decimal to binary
 * @param {number} q The number to convert 
 * @return {string} The result of the conversion
 */
function convertDecimalNumberToBinaryNumber(q){
    if (q === 0){
        return '0';
    } else if (q === 1){
        return '1';
    }

    return convertDecimalNumberToBinaryNumber(Math.trunc(q / 2)) + q % 2;
}

function init(){
    const askedInteger = askInteger();
    const convertedInteger = convertDecimalNumberToBinaryNumber(askedInteger);

    console.log(convertedInteger);

    return;
}
init();