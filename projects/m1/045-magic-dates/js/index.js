// const { parseOrdinalNummber } = require( '../../../lib/modules.js' ); // For CommonJS environment
import { isLeapYear } from '../../../lib/modules.js'; // For ES module environment (see the imported file for additional informations)

function findMagicDateByYear( year, maxMonthsDuration ){

    if( Number.isInteger( year ) && year > 0 ){
        
        year = year % 100; // to use the only last 2 digits

        let magicDates = '';
        let counter = 1;

        for (const month in maxMonthsDuration) {
            if( year / counter < maxMonthsDuration[month] && year % counter === 0 ){
                magicDates += year / counter + ' ' + month + '\n';
            }
    
            counter++;
        }

        if( magicDates !== '' ){
            magicDates = magicDates.replace(/\n$/, '' );
        }

        return magicDates;
    }
    console.log( 'Wrong data type.' );
    return false;
}

function init(){
    const maxMonthsDuration = {
        'January': 31,
        'February': 28,
        'March': 31,
        'April': 30,
        'May': 31,
        'June': 30,
        'July': 31,
        'August': 31,
        'September': 30,
        'October': 31,
        'November': 30,
        'December': 31
    };

    let magicDates = '';

    for (let i = 1900; i < 2000; i++) {
        maxMonthsDuration['February'] = isLeapYear( i ) ? 29 : 28;
        magicDates = findMagicDateByYear( i, maxMonthsDuration );

        if( magicDates !== '' ){
            console.log( '\n' + 'The year ' + i + ' has the following magical date/s:' + '\n' + magicDates);
        } else {
            console.log( '\n' + 'The year ' + i + ' has no magic dates.' );
        }
    }

    return;
}
init();