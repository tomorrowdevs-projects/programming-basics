// const prompt = require("prompt-sync")({ sigint: true}) ;

function verifyBase( base, rangeFrom, rangeTo ){
    if ( base < rangeFrom || base > rangeTo ){
        console.warn( 'You entered a wrong value, you can use base from ' + rangeFrom + ' to ' + rangeTo + '.' );
        return false;
    }

    return true;
}

function arbitraryBaseToDecimal( digits, base ){
    let result = 0;
    digits = digits.toUpperCase();

    const baseTable = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'].slice(0, base);
    console.log(baseTable);

    const digitsLength = digits.length;

    for (let i = 0; i < digitsLength; i++) {
        if( baseTable.indexOf( digits[i] ) !== -1 ){
            const convertedDigit = baseTable.indexOf( digits[i] );
            result += convertedDigit * Math.pow( base, digitsLength - i - 1 );
        } else {
            console.warn( 'You entered a wrong value for this base. Closing the program...' );
            return false;
        }
    }

    return result;
}

function decimalToArbitraryBase( dividend, base ){
    let result = '';

    const baseTable = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'].slice(0, base);

    if( Number.isInteger( dividend ) ){
        while( dividend !== 0 ){
            result += baseTable[ dividend % base ];
            dividend = Math.trunc( dividend / base );
        }
    } else {
        console.warn( 'You entered a wrong value, please insert an integer number. Closing the program...' );
        return false;
    }

    return result;
}

function init(){
    const askedDigitsToDecimal = prompt( 'Please enter a digit/s to convert to a decimal base value.' );
    const askedBaseToDecimal = parseInt( prompt( 'Please enter the base to convert from.' ) );

    if ( verifyBase( askedBaseToDecimal, 2, 16 ) ){
        console.log( arbitraryBaseToDecimal( askedDigitsToDecimal, askedBaseToDecimal ) );
    }

    const askedDigitsFromDecimal = parseInt( prompt( 'Please enter a decimal base value to convert.' ) );
    const askedBaseFromDecimal = parseInt( prompt( 'Please enter the base to convert to.' ) );

    if ( verifyBase( askedBaseFromDecimal, 2, 16 ) ){
        console.log( decimalToArbitraryBase( askedDigitsFromDecimal, askedBaseFromDecimal ) );
    }

    return;
}
init();