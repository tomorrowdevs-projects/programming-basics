// const prompt = require("prompt-sync")({ sigint: true}) ;

function askInteger(){
    let askedInteger;

    while ( isNaN( askedInteger ) ) {
        askedInteger = parseInt( prompt( 'Enter an integer number:', 'Example: 6' ) );

        if( isNaN( askedInteger ) ){
            console.log( 'Please enter a valid integer number.' );
        }
    }

    return askedInteger;
}

function collatzConjecture( integerNumber ){

    const integersSequence = [];

    if ( integerNumber > 0 ){

        while ( integerNumber !== 1 ) {
            if ( integerNumber % 2 === 0 ){
                // JavaScript hasn't a floor division operator like in Python (Double Slash Operator //) , then we apply Math.trunc to the division result.
                integerNumber = Math.trunc( integerNumber / 2 );
            } else {
                integerNumber = ( integerNumber * 3 ) + 1 ;
            }

            integersSequence.push( integerNumber );
        }

    }

    return integersSequence;
}

function init(){
    let askedInteger = askInteger();

    while ( askedInteger > 0 ) {
        const integersSequence = collatzConjecture( askedInteger );
        for (let i = 0; i < integersSequence.length; i++) {
            console.log( integersSequence[i] );
        }

        askedInteger = askInteger();
    }

    return;
}
init();