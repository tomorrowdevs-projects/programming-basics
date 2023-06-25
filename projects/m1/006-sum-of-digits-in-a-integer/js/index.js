// Develop a program that reads a four-digit integer from the user and displays the sum of its digits. 
// For example, if the user enters 3141 then your program should display 3+1+4+1=9.

// Sviluppa un programma che legge un numero intero di quattro cifre dall'utente e visualizza la somma delle sue cifre.
// Ad esempio, se l'utente inserisce 3141, il programma dovrebbe visualizzare 3+1+4+1=9.

let numbers = [];
let user;
let sum = 0;

for (let i = 0; i < 4; i++) {
     user= Number(prompt("insert the number: "));
     numbers.push(user);
     sum += numbers[i]
}
console.log(user)
console.log(numbers)
console.log(sum)
alert(sum);


