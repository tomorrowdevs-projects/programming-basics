// const prompt = require("prompt-sync")({ sigint: true}) ;
const { quickSortNumbers } = require( '../../../lib/sort-modules.js' );

function findDivisors(integer){
    const divisors = [];

    for (let i = 1 ; i <= Math. sqrt(integer); i++) {
        if( integer % i === 0 ){
            divisors.push(i);

            if( integer / i !== i ){ 
                divisors.push(integer / i);
            }
        }
    }

    return quickSortNumbers(divisors).slice(0,-1);
}

function isPerfectNumber(number){
    if( Number.isInteger(number) && number > 0){
        const divisors = findDivisors(number);
        let divisorsSum = 0;

        if( Array.isArray(divisors) && divisors.length > 0){
            for (let i = 0; i < divisors.length; i++) {
                divisorsSum += divisors[i];
            }

            if( divisorsSum == number ){
                return true;
            }
        }
    }

    return false;
}


function init(){
    for (let i = 1; i <= 10000; i++) {
        if( isPerfectNumber(i) === true ){
            console.log(i);
        }
    }

    return;
} 
init();