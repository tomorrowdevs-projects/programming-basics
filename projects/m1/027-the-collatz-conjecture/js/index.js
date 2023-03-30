// const prompt = require("prompt-sync")({ sigint: true}) ;

function askInteger(){
    const askedInteger = parseInt( prompt( 'Enter an integer number:', 'Example: 6' ) );

    if ( ! isNaN( askedInteger ) ){
        return askedInteger;
    }

    console.log( 'Please enter a valid integer number.' );
    return askInteger();
}

function collatzConjecture( integerNumber ){

    if ( integerNumber > 0 ){

        while ( integerNumber !== 1 ) {
            if ( integerNumber % 2 === 0 ){
                // JavaScript hasn't a floor division operator like in Python (Double Slash Operator //) , then we apply Math.floor to the division result.
                integerNumber = Math.floor( integerNumber / 2 );
            } else {
                integerNumber = ( integerNumber * 3 ) + 1 ;
            }

            console.log( integerNumber );
        }

        return collatzConjecture( askInteger() );
    }

    console.log( 'Closing the program...' );
    return;
}


function init(){
    const askedInteger = askInteger();
    collatzConjecture( askedInteger );
    return;
}

init();