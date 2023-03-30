// const prompt = require("prompt-sync")({ sigint: true}) ;

function askInteger(){
    const askedInteger = parseInt( prompt( 'Enter an integer number:', 'Example: 6' ) );

    if ( ! isNaN( askedInteger ) ){
         return askedInteger;
    }

    console.log( 'Please enter a valid integer number.' );
    return askInteger();
}

function convertDecimalNumberToBinaryNumber( q ){
    /**
     * @param {number} q The number to convert 
     * @return {string} The result of the conversion
     */

    let result = '';

    while ( q !== 0 ) {
        const r = q % 2;

        result = String( r ) + result;
        q = Math.trunc( q / 2 );
    }

    return result;
}

function init(){
    const askedInteger = askInteger();
    const convertedInteger = convertDecimalNumberToBinaryNumber( askedInteger );
    console.log( convertedInteger );
    return;
}
init();