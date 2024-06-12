// When analysing data collected as part of a science experiment it may be desirable to remove the most extreme values before performing other calculations. Write a function that takes a list of values and an non-negative integer, n, as its parameters. The function should create a new copy of the list with the n largest elements and the n smallest elements removed. Then it should return the new copy of the list as the function’s only result. The order of the elements in the returned list does not have to match the order of the elements in the original list. Write a main program that demonstrates your function. It should read a list of numbers from the user and remove the two largest and two smallest values from it by calling the function described previously. Display the list with the outliers removed, followed by the original list. Your program should generate an appropriate error message if the user enters less than 4 values.

let userInt;
const intArray = [];
let counter = 0;

do {
  userInt = parseInt(prompt('Inserisci un numero'));
  counter++;
  if (userInt !== 0) {
    intArray.push(userInt);
  }
} while (userInt > 0);

if (counter < 4) {
  alert('Inserisci almeno 4 valori');
} else {
  intArray.sort(function (a, b) {
    return a - b;
  });

  console.log(intArray);
  const maxValues = intArray.slice(-2);
  const minValues = intArray.slice(0, 2);

  const resultArray = maxValues.concat(minValues);

  console.log(resultArray);

  //console.log(resultArray);
}
