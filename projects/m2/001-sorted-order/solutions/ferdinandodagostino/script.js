//Write a program that reads integers from the user and stores them in an array. Your program should continue reading values until the user enters 0. Then it should display all of the values entered by the user (except for the 0) in ascending order, with one value appearing on each line. Use either the sort method or the sorted function to sort the array.

let userInt;
const intArray = [];

do {
  userInt = parseInt(prompt('Inserisci un numero'));
  if (userInt !== 0) {
    intArray.push(userInt);
  }
} while (userInt > 0);

intArray.sort(function (a, b) {
  return a - b;
});

console.log(intArray);
