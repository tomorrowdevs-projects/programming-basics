// const prompt = require("prompt-sync")({ sigint: true}) ;

const { isDayValue, isMonthValue, isYearValue, calculateFebruaryDays, verifyDay } = require( '../../../lib/modules.js' );

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

function calculateOrdinalDay( day, month, year ){
    if ( isDayValue( day ) && isMonthValue( month ) && isYearValue( year ) ){
        const februaryDays = calculateFebruaryDays( year );

        if( februaryDays ){
            const maxMonthsDuration = [31, februaryDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            let ordinalDay = day;

            for (let i = 0; i < month - 1; i++) {
                ordinalDay += maxMonthsDuration[i];
            }

            return ordinalDay;
        }

    }

    return false;
}

function init(){
    const askedDay = askDay();
    const askedMonth = askMonth();
    const askedYear = askYear();

    if( verifyDay( askedDay, askedMonth, askedYear ) ){
        const convertedOrdinalDay = calculateOrdinalDay( askedDay, askedMonth, askedYear );
        console.log( convertedOrdinalDay );
    } else {
        console.log( 'Closing the program...' );
    }

    return;
}
init();