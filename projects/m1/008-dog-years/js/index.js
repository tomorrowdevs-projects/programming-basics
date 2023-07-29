// It is commonly said that one human year is equivalent to 7 dog years.   
// However, this simple conversion fails to recognize that dogs reach adulthood in approximately two years. 

// As a result, some people believe that it is better to **count each of the first two human years as 10.5 dog years**,
// and then **count each additional human year as 4 dog years.**  

// Write a program that implements the conversion from human years to dog years described in the previous paragraph.   
// Ensure that your program works correctly for:
// - conversions of less than two human years
// - conversions of two or more human years

// Your program should display an appropriate error message if the user enters a negative number.

// Example:   
// 48 human years = 205.0 dog year

// Si dice comunemente che un anno umano equivale a 7 anni canini.
// Tuttavia, questa semplice conversione non riconosce che i cani raggiungono l'età adulta in circa due anni.

// Di conseguenza, alcune persone credono che sia meglio **contare ciascuno dei primi due anni umani come 10,5 anni canini**,
// e poi **conta ogni anno umano in più come 4 anni canini.**

// Scrivere un programma che implementi la conversione da anni umani a anni canini descritta nel paragrafo precedente.
// Assicurati che il tuo programma funzioni correttamente per:
// - conversioni inferiori a due anni umani
// - conversioni di due o più anni umani

// Il tuo programma dovrebbe visualizzare un messaggio di errore appropriato se l'utente immette un numero negativo.

// Esempio:
// 48 anni umani = 205,0 anni canini
let userInput = Number(prompt("You insert the age: "));
console.log(typeof userInput);

let dogAgeBefore2Years = 10.5;
let dogAgeAfter2Years = 4;


let conversion = userInput * dogAgeBefore2Years;
let conversion2 =((userInput - 2) * dogAgeAfter2Years) +  (2 * dogAgeBefore2Years);

if(userInput< 0){
    alert(`you can't enter a negative age!`);
    throw new Error;
}

if(userInput <= 2){
    alert(`The conversion from human in dog is: ${conversion} `); 
} else if(userInput >2){
    alert(`The conversion from human in dog after two years is: ${conversion2}`);
}



