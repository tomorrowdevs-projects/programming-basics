let integer = prompt("Please, enter a four-digit integer:");

integer = integer.toString();

let integerOne = Number(integer.slice(0, 1));
let integerTwo = Number(integer.slice(1, 2));
let integerThree = Number(integer.slice(2, 3));
let integerFour = Number(integer.slice(3, 4));

let sum = integerOne + integerTwo + integerThree + integerFour;


alert("The sum of " + integerOne + " + " + integerTwo + " + " + integerThree + " + " + integerFour + " is equal to " + sum + ".");



// ovviamente il programma è limitato al solo calcolo di un numero composto da quattro cifre, la soluzione a questo passerebbe, secondo  me, attraverso l'utilizzo di un array ed una funzione,
// per far ripeter l'operazione di addizione per ogni singola cifra data.

