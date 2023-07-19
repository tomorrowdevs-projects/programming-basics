// const prompt = require("prompt-sync")({ sigint: true}) ;
const { quickSortNumbers } = require( '../../../lib/sort-modules.js' );

function properDivisors( integer ){
    const divisors = [];
    // To reduce loop's iterations we use square root of "integer" instead "integer" or "integer" / 2
    // If a number is not divisible by iteration values ​​less than the square root, then it cannot be divisible by values ​​greater than the square root.
    for (let i = 1 ; i <= Math.sqrt(integer); i++) {

        if( integer % i === 0 ){
            divisors.push(i);

            // To find remaining divisors not present in the range from 1 to the square root of i we can divide "integer" by i and use only the quotient different from i to avoid counting divisors that are perfect squares twice
            if( integer / i !== i ){ 
                divisors.push(integer / i);
            }
        }
    }
    // Since the dividers have not been added to the list in ascending order, it is necessary to sort them and remove the higher value because it's the number itsleft and we want proper divisors
    return quickSortNumbers(divisors).slice(0,-1);
}

function askPositiveInteger(){
    const askedPositiveInteger = parseInt( prompt( 'Please enter an integer positive number' ) );

    if(Number.isInteger( askedPositiveInteger ) && askedPositiveInteger > 0){
        return askedPositiveInteger;
    }

    console.log('You entered an invalid value, closing the ')
    return askPositiveInteger();
}
// This check ensure that the main program only runs when the solution has not been imported into another file.
// i.e. if require.main is the current module, then the current module was loaded from the node command line and not from other file
if (require.main === module) { 
    function init(){
        const askedPositiveInteger = askPositiveInteger();
        const divisors = properDivisors( askedPositiveInteger );

        if( Array.isArray(divisors) && divisors.length > 0){
            for (let i = 0; i < divisors.length; i++) {
                console.log(divisors[i]);
            }
        } else {
            console.log('No divisor found');
        }

        return;
    } 
    init();
}