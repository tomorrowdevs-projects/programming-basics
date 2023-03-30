// const prompt = require("prompt-sync")({ sigint: true}) ;

function askInteger(){
    const askedInteger = parseInt( prompt( 'Enter an integer number greater than or equal to 2:', 'Example: 6' ) );

    if ( ! isNaN( askedInteger ) ){
        if ( askedInteger < 2 ){
            console.log( 'The entered number is an integer but is is less than 2.' );
            return askInteger();
        }

         return askedInteger;
    }

    console.log( 'Please enter a valid integer number greater than or equal to 2.' );
    return askInteger();
}

function primeFactorization( integerNumber ){

    let factor = 2;

    while ( factor <= integerNumber ) {
        if ( integerNumber % factor === 0 ){
            console.log( factor );
            // JavaScript hasn't a floor division operator like in Python (Double Slash Operator //) , then we apply Math.floor to the division result.
            integerNumber = Math.floor( integerNumber / factor );
        } else {
            factor++;
        }

    }

    console.log( 'Closing the program...' );
    return;
}

function init(){
    const askedInteger = askInteger();
    primeFactorization( askedInteger );
    return;
}

init();