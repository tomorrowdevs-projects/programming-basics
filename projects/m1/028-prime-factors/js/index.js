// const prompt = require("prompt-sync")({ sigint: true}) ;

function askInteger(){
    const askedInteger = parseInt( prompt( 'Enter an integer number greater than or equal to 2:', 'Example: 6' ) );

    if ( ! isNaN( askedInteger ) ){
         return askedInteger;
    }

    console.log( 'Please enter a valid integer number greater than or equal to 2.' );
    return;
}

function primeFactorization( integerNumber ){

    const factorsSequence = [];
    let factor = 2;

    while ( factor <= integerNumber ) {
        if ( integerNumber % factor === 0 ){
            factorsSequence.push( factor );
            // JavaScript hasn't a floor division operator like in Python (Double Slash Operator //) , then we apply Math.trunc to the division result.
            integerNumber = Math.trunc( integerNumber / factor );
        } else {
            factor++;
        }
    }

    return factorsSequence;
}

function init(){
    const askedInteger = askInteger();

    if ( askedInteger < 2 ) {
        console.log( 'The entered number is an integer but is is less than 2.' );
    } else {
        const factorsSequence = primeFactorization( askedInteger );

        for (let i = 0; i < factorsSequence.length; i++) {
            console.log( factorsSequence[i] );
        }
    }

    return;
}
init();