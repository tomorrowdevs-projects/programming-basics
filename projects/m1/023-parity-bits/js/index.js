// const prompt = require("prompt-sync")({ sigint: true}) ;

function findParityType( bitString ){

    let ones = 0;
    let parityBit = 1;

    for (let i = 0; i < bitString.length; i++) {
        const bitValue = bitString.charAt(i);

        if ( bitValue !== '0' ){
            if ( bitValue === '1' ){
                ones++;
            } else {
                return false;
            }
        }
    }

    if ( ones % 2 === 0 ){
        parityBit = 0;
    } 

    return parityBit;
}

function init(){
    let askedBitString;

    while( askedBitString !== '' ){

        askedBitString = prompt( 'Please enter a 8-bit value.' );

        if ( askedBitString.length === 8 ){

            const parityBit = findParityType( askedBitString );

            if( parityBit !== false ){
                console.log( 'Parity bit is ' + parityBit );
            } else {
                console.log( 'Wrong value.' );
            }

        } else {
            console.log( 'Wrong bit string length.' );
        }

    }

    console.log( 'Closing the program...' );
    return;
}
init();