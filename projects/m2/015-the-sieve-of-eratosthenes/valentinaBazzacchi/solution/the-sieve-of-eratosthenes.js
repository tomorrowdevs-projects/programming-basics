// MAIN PROGRAM
let limit = 1000000;
let range = [];
let primeNumbers;

// Generate a range of integers from 2 to the entered limit
for (let i = 2; i <= limit; i++) {
    range.push(i);
}

// Set p equal to 2 (the first prime number)
let p = 2;

// Call the function to report all the prime numbers of the range
// console.time("Function");
primeNumbers = sieveOfEratosthenes(p, limit, range);
console.log(primeNumbers);
// console.timeEnd("Function"); --> 938.174072265625 ms

// MAIN FUNCTION ---> Replaces the non-prime numbers of the list with 0
function sieveOfEratosthenes(p, limit, range) {
    // The outer loop runs until p <= the square root of the limit
    while (p <= Math.floor(Math.sqrt(limit))) {
        
        // The inner loop runs for each number of the range 
        for (let i = 0; i < range.length; i++) {
            
            // If the visited number is > p and if it is a divisor of p ...
            if (range[i] > p && range[i] % p == 0) {
                // ...set its value equal to 0
                range[i] = 0;
            }
        
        } // end for loop
    
    // Filter the array "range" and return a new array with only the non-zero values and the values > p
    let nextP = range.filter(function(value){
        return value > p && value != 0;
    }) // end filter
    // Set *p* equal to the first number of the filtered list
    p = nextP[0];
    
    }// end while loop
    
    // The function returns the array "range" filtered --> all values ​​replaced with 0 are deleted (the multiples)
    return range.filter(function(value){
        return value != 0;
    }) // end filter

} // end function

//////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
I tried to simulate crossing out a number by removing it directly from the list
but this solution is much less efficient on the high limits
*/

let limit = 1000;
let range = [];
let primeNumbers = [];

for (let i = 2; i <= limit; i++) {
    range.push(i);
}

let p = 2;

// console.time("Function");
sieveOfEratosthenes(p, limit, range);
console.log(range);
// console.timeEnd("Function");


function sieveOfEratosthenes(p, limit, range) {
    
    while (p <= Math.floor(Math.sqrt(limit))) {
    
        for (let i = 0; i < range.length; i++) {
    
            if (range[i] > p && range[i] % p == 0) {
                range.splice(i, 1);
            }
    
        }// end for

    p = range[range.indexOf(p)+1];
    
    } // end while
    
    return range;  
  
} // end function
