// const prompt = require("prompt-sync")({ sigint: true}) ;

function hex2int( hexDigits ){
    let result = 0;
    hexDigits = hexDigits.toUpperCase();

    const hexTable = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    const digitsLength = hexDigits.length;

    for (let i = 0; i < digitsLength; i++) {
        if( hexTable.indexOf( hexDigits[i] ) !== -1 ){
            const convertedDigit = hexTable.indexOf( hexDigits[i] );
            result += convertedDigit * Math.pow(16, digitsLength - i - 1 );
        } else {
            console.warn( 'You entered a wrong value, you can use only decimal numeral system\'s number and letters from A to F (uppercase or lowercase). Closing the program...' );
            return false;
        }
    }

    return result;
}

function int2hex( dividend ){
    let result = '';

    const hexTable = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

    if( Number.isInteger( dividend ) ){
        while( dividend !== 0 ){
            result += hexTable[ dividend % 16 ];
            dividend = Math.trunc( dividend / 16 );
        }
    } else {
        console.warn( 'You entered a wrong value, please insert an integer number. Closing the program...' );
        return false;
    }

    return result;
}

function init(){
    const askedHexadecimal = prompt( 'Please enter a/an hexadecimal digit/s to convert to a integer value.' );
    console.log( hex2int( askedHexadecimal ) );

    const askedInteger = parseInt( prompt( 'Please enter an integer number to convert to a hexadecimal value.' ) );
    console.log( int2hex( askedInteger ) );

    return;
}
init();