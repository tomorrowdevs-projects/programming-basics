/* 

Write a program that reads integers from the user and stores them in an array. Your program should continue reading values until the user enters 0. Then it should display all of the values entered by the user (except for the 0) in ascending order, with one value appearing on each line. Use either the sort method or the sorted function to sort the array.

*/

const listOfNumbers = []
let number = 0;
let isValidate = false;

do {
    number = parseInt(prompt("Insert a number integer"));
    isValidate = number != 0;

    if (isValidate){
        listOfNumbers.push(number);
    }

} while (isValidate)

console.log(listOfNumbers.sort());