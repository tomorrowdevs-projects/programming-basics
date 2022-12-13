//In this exercise you will create a program that computes the average of a collection of values entered by the user. The user will enter 0 as a sentinel value to indicate that no further values will be provided. Your program should display an appropriate error message if the first value entered by the user is 0.

//Hint: Because the 0 marks the end of the input it should not be included in the average.

let userValue = 0;
const valueCollection = [];

do {
  userValue = parseInt(prompt('Inserisci un valore numerico'));

  valueCollection.push(userValue);
  if (valueCollection[0] == 0) {
    alert('Non puoi inserire 0 come valore iniziale');
    valueCollection.splice(0, 1);
  }
} while (userValue > 0);

// filtro via lo 0 dall'array
const filteredArray = valueCollection.filter(filterArray);

function filterArray(value) {
  return value > 0;
}

//uso il meteodo reduce per sommare tutti gli elementi nell'array, il metodo reduce viene chiamato per ogni elemento nell'array, a ogni iterazione il totale viene accumulato
const total = filteredArray.reduce(calculateTotal);

function calculateTotal(total, num) {
  return total + num;
}

const totalAverage = total / filteredArray.length;

alert(`${totalAverage}`);
