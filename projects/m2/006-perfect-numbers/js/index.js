// # Perfect Numbers

// An integer, *n*, is said to be perfect when the sum of all of the proper divisors of *n* is equal to *n*. 
// For example, 28 is a perfect number because its proper divisors are 1, 2, 4, 7 and 14, and 1 + 2 + 4 + 7 + 14 = 28.
// Write a function called "is perfect number" that determines whether or not a positive integer is perfect. 
// Your function will take one parameter. If that parameter is a perfect number then your function will return True. 
// Otherwise it will return False. 
// In addition, write a main program that uses your function to identify and display all of the perfect numbers between 1 and 10,000.

// # Numeri perfetti

// Un numero intero, *n*, si dice perfetto quando la somma di tutti i divisori propri di *n* è uguale a *n*.
// Ad esempio, 28 è un numero perfetto perché i suoi divisori propri sono 1, 2, 4, 7 e 14, e 1 + 2 + 4 + 7 + 14 = 28.
// Scrivi una funzione chiamata "è un numero perfetto" che determina se un numero intero positivo è perfetto o meno.
// La tua funzione prenderà un parametro. Se quel parametro è un numero perfetto, la tua funzione restituirà True.
// Altrimenti restituirà False.
// Inoltre, scrivi un programma principale che utilizzi la tua funzione per identificare e visualizzare tutti i numeri perfetti compresi tra 1 e 10.000.

let userInputNumber = +prompt(`enter the number and you will know its perfect: `);
let divisorsNumberList = [];

function properDivisor(number){
    for(let i = 1; i < number ; i++){
        if(number % i === 0){
            divisorsNumberList.push(i)
        }
    }
}
function sumTheDivisor(numberList){
    let sum = 0;

    for(let number of numberList){
        sum += number;
    }

    if (sum === userInputNumber) {
         return console.log(`The number is perfect, because ${numberList.join(" + ")} it's equality to ${userInputNumber}`)
            
       } else {
        return console.log(`The number is not perfect, because ${numberList.join(" + ")} added together they do ${sum} it's not equality to ${userInputNumber}`)
       }
}

if(isNaN(userInputNumber) ||  !Number.isInteger(userInputNumber)){
    alert(`the number you entered is not valid`);
} else{
    properDivisor(userInputNumber);
    sumTheDivisor(divisorsNumberList);
}
