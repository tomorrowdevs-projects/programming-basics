const prompt = require("prompt-sync")({ sigint: true}) ;


function isBoolean( value ) {
  return typeof value === 'boolean';
}

/** Function from exercise m1/015-is-it-a-leap-year  */
function isLeapYear( value ){
    if ( value % 400 === 0){
        return true;
    }

    if ( value % 100 !== 0 && value % 4 === 0 ){
        return true;
    }

    return false;
}

/** Function from exercise m1/034-integer-to-ordinal  */
function parseOrdinalNumber( number ){
    const textualOrdinalNumbers = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'];

    if ( number < 1 || number > 12 ){
        return '';
    }

    return textualOrdinalNumbers[number - 1];
}

/** Function from exercise m1/034-integer-to-ordinal  */
function parseOrdinalNumberNew( number, maxValue ){

    let currentNumber = '';

    for (let i = 1; i <= maxValue; i++) {
        if( number % 10 === 1 ){
            currentNumber = number + 'st';
        } else if( number % 10 === 2 ){
            currentNumber = number + 'nd';
        } else if( number % 10 === 3 ){
            currentNumber = number + 'rd';
        } else {
            currentNumber = number + 'th';
        }
    }

    return currentNumber
}

function isDayValue( day ){
    if ( ! isNaN( day ) && day > 0 && day <= 31 ){
        return true;
    }

    console.warn( 'The day entered is not correct, enter a positive number between 1 and 31.' );
    return false;
}

function isMonthValue( month ){
    if ( ! isNaN( month ) && month > 0 && month <= 12 ){
        return true;
    }

    console.warn( 'The month entered is not correct, enter a positive integer number between 1 and 12.' );
    return false;
}

function isYearValue( year ){
    if ( ! isNaN( year ) && year >= 0 ){
        return true;
    }

    console.warn( 'The year entered is not correct, enter a positive integer number from 0 and above.' );
    return false;
}

function verifyDay( day, month, year ){

    if ( isDayValue( day ) && isMonthValue( month ) && isYearValue( year ) ){
        const maxMonthsDuration = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if ( ! isLeapYear( year ) ){
            maxMonthsDuration[1] = 28;
        }

        if( day <= maxMonthsDuration[month -1] ){
            return true;
        }

        console.warn( 'The day exceeds the number of days in the month.' );
    } 

    return false;
}

function calculateFebruaryDays( year ){
    if ( isYearValue( year ) ){
        return isLeapYear( year ) ? 29 : 28;
    } 

    return false;
}

module.exports = { // For CommonJS environment
// export { // For ES module environment. In addition for Visual Studio Code two package.json files must be created, one in this file folder, the other one in the application file folder, they must contain the following code { "type": "module" }
    isBoolean,
    isLeapYear,
    parseOrdinalNumber,
    parseOrdinalNumberNew,
    isDayValue,
    isMonthValue,
    isYearValue,
    verifyDay,
    calculateFebruaryDays
};