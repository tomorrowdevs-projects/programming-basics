// const { calculateFebruaryDays } = require( '../../../lib/modules.js' ); // For CommonJS environment
import { isMonthValue, isYearValue, isLeapYear } from '../../../lib/modules.js'; // For ES module environment (see the imported file for additional informations)

// const prompt = require("prompt-sync")({ sigint: true}) ; // For CommonJS environment
import promptSync from 'prompt-sync'; // For ES module environment (tou need to import "prompt-sync" and assign it to a constant as is done in the following line)
const prompt = promptSync({ sigint: true});  // For ES module environment

function getMonthDays( month, year ){
    
    if( isMonthValue( month ) && isYearValue( year ) ){
        const monthsDuration = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if ( ! isLeapYear( year ) ){
            monthsDuration[1] = 28;
        }
    
        return monthsDuration[month - 1];
    }

    return false;
}

function init(){
    const askedMonth = parseInt( prompt( 'Please enter a month as an integer value between 1 and 12.' ) );
    const askedYear = parseInt( prompt( 'Please enter a year as an integer value.' ) );
    
    console.log( getMonthDays( askedMonth, askedYear ) );

    return;
}
init();