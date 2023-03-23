// const prompt = require("prompt-sync")({ sigint: true}) ;

function askBitValues( bitStrings = [] ){

    const bitString = prompt( 'Please enter a 8-bit value.', 'Example: 01010101' );

    if ( bitString.trim() === '' ) {
        console.log( 'Closing the program...' );
        return;
    }

    if ( bitString.length === 8 ){
        console.log( findParityType( bitString ) );
    } else {
        console.log('The entered value isn\'t 8 characters long.');
    }

    return askBitValues( bitStrings );
}

function findParityType( bitString ){

    let ones = 0;
    let parityBit = 1;

    for (let i = 0; i < bitString.length; i++) {
        const bitValue = bitString.charAt(i);

        if ( bitValue !== '0' ){
            if ( bitValue === '1' ){
                ones++;
            } else {
                return 'Wrong value.';
            }
        }
    }

    if (ones % 2 === 0){
        parityBit = 0;
    } 

    return 'Parity bit is ' + parityBit;
}

function init(){
    askBitValues();
    return;
}

init();