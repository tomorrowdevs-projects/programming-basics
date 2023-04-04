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
function parseOrdinalNummber( number ){
    const textualOrdinalNumbers = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'];

    if ( number < 1 || number > 12 ){
        return '';
    }

    return textualOrdinalNumbers[number - 1];
}


function askDay(){
    const askedDay = parseInt ( prompt( 'Enter a day.', 'Example: 12' ) );

    if ( isDayValue( askedDay ) ){
        return askedDay;
    }

    return askDay();
}

function askMonth(){
    const askedMonth = parseInt ( prompt( 'Enter a month.', 'Example: 04' ) );

    if ( isMonthValue( askedMonth ) ){
        return askedMonth;
    }

    return askMonth();
}

function askYear(){
    const askedYear = parseInt ( prompt( 'Enter a year.', 'Example: 2021' ) );

    if ( isYearValue( askedYear ) ){
        return askedYear;
    }

    return askYear();
}

function isDayValue( day ){
    if ( ! isNaN( day ) && day > 0 && day <= 31 ){
        return day;
    }

    console.log( 'The day entered is not correct, enter a positive number between 1 and 31.' );
    return false;
}

function isMonthValue( month ){
    if ( ! isNaN( month ) && month > 0 && month <= 12 ){
        return month;
    }

    console.log( 'The month entered is not correct, enter a positive integer number between 1 and 12.' );
    return false;
}

function isYearValue( year ){
    if ( ! isNaN( year ) && year >= 0 ){
        return year;
    }

    console.log( 'The year entered is not correct, enter a positive integer number from 0 and above.' );
    return false;
}

function verifyDay( day, month, year ){

    if ( isDayValue( day ) && isMonthValue( month ) && isYearValue( year ) ){
        const maxMonthsDuration = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if ( ! isLeapYear( year ) ){
            maxMonthsDuration[1] = 28;
        }
        
        if( day <= maxMonthsDuration[month -1] ){
            return day;
        }

        console.log( 'The day exceeds the number of days in the month.' );
    } 
    
    return false;
}

function calculateFebruaryDays( year ){
    if ( isYearValue( year ) ){
        return isLeapYear( year ) ? 29 : 28;
    } 

    return false;
}


// verifica il leap per il month


module.exports = {
    isBoolean,
    isLeapYear,
    parseOrdinalNummber,
    askDay,
    askMonth,
    askYear,
    isDayValue,
    isMonthValue,
    isYearValue,
    verifyDay,
    calculateFebruaryDays
};