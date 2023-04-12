/* 

Write a program that reads integers from the user and stores them in an array. 
Use 0 as a sentinel value to mark the end of the input. Once all of the values have been read your program should display them (except for the 0) in reverse order, with one value appearing on each line.

*/

const listOfNumbers = [];
let number = "";


while (number !== 0) {
    number = parseInt(prompt("Insert a number integer"));

    if(number !== 0){
        listOfNumbers.push(number);
    }

}

const listOfNumbersReverse = listOfNumbers.reverse();

for(let i = 0; i < listOfNumbersReverse.length; i++){
    console.log(listOfNumbersReverse[i]);
}