/* 

An integer, n, is said to be perfect when the sum of all of the proper divisors of n is equal to n. For example, 28 is a perfect number because its proper divisors are 1, 2, 4, 7 and 14, and 1 + 2 + 4 + 7 + 14 = 28. Write a function that determines whether or not a positive integer is perfect. Your function will take one parameter. If that parameter is a perfect number then your function will return True. Otherwise it will return False. In addition, write a main program that uses your function to identify and display all of the perfect numbers between 1 and 10,000.

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

    // console.log(dividersList);

    const result = dividersList.length !== 0 ? dividersList.reduce((sum, current) => sum + current) : 0;

    if(result === numberUser){
        return true;
    }else {
        return false;
    }

}