//Write a program that reads integers from the user and stores them in an array. Use 0 as a sentinel value to mark the end of the input. Once all of the values have been read your program should display them (except for the 0) in reverse order, with one value appearing on each line.

let userInt;
const intArray = [];

do {
  userInt = parseInt(prompt('Inserisci un numero'));
  if (userInt !== 0) {
    intArray.push(userInt);
  }
} while (userInt > 0);

const reversed = intArray.reverse();

console.log(reversed);
