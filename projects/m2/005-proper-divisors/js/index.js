/* 

A proper divisor of a positive integer, n, is a positive integer less than n which divides evenly into n. Write a function that computes all of the proper divisors of a positive integer. The integer will be passed to the function as its only parameter. The function will return a list containing all of the proper divisors as its only result. Complete this exercise by writing a main program that demonstrates the function by reading a value from the user and displaying the list of its proper divisors. Ensure that your main program only runs when your solution has not been imported into another file.

*/

let numberUser = 0;

do{
    numberUser = parseInt(prompt("Enter a number positive integer"));
}while(numberUser < 0);

const result = properDivisors(numberUser);
console.log(result);

function properDivisors(numberUser){

    let dividersList = [];

    for(let i = 0; i <= numberUser; i++){
        if(numberUser % i === 0 && i != numberUser){
            dividersList.push(i);
        }
    }

    return dividersList;

}