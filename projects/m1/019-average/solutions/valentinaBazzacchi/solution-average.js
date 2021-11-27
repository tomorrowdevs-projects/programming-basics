// Chiedo una stringa di numeri all'utente e la divido (tenendo conto degli spazi bianchi tra i numeri) in un array di sottostringhe
let numbers = prompt("Insert a collection of values with 0 to mark the end of the input").split(" ");

// Dichiaro la variabile che conterrà la somma con valore iniziale = 0
let sum = 0;

// Sommo gli elementi dell'array numbers con il ciclo For (visto che numbers è di tipo stringa lo converto in numero per poterlo sommare a sum)
for (let i = 0; i < numbers.length; i++) {
sum += +numbers[i];
}

// Pongo la condizione per stampare 2 diversi alert, se il primo elemento è diverso da 0 procedo con il calcolo della media
if (numbers[0] == 0) {
alert("Error! The first value can't be equal to 0!");
} else {
alert( `The average is: ${+(sum / (numbers.length - 1)).toFixed(2)}` );
}