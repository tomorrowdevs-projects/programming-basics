/*
Words like *first*, *second* and *third* are referred to as ordinal numbers. 
In this exercise, you will write a function that takes an integer as its only parameter and returns a string containing the appropriate English ordinal number as its only result. 
Your function must handle the integers between 1 and 12 (inclusive). 
It should return an empty string if the function is called with an argument outside of this range. 
Include a main program that demonstrates your function by displaying each integer from 1 to 12 and its ordinal number. 
Your main program should only run when your file has not been imported into another program.
*/

function parseOrdinalNummber( number ){
    const textualOrdinalNumbers = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'];

    if ( number < 1 || number > 12 ){
        return '';
    }

    return textualOrdinalNumbers[number - 1];
}

function init(){
    for (let i = 1; i <= 12; i++){
        console.log( parseOrdinalNummber( i ) );
    }

    return;
}
init();