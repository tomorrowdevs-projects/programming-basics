// const prompt = require("prompt-sync")({ sigint: true}) ;

const { askDay, askMonth, askYear, isDayValue, isMonthValue, isYearValue, calculateFebruaryDays, verifyDay } = require( '../../../lib/modules.js' );

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