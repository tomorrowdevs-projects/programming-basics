// # Average

// In this exercise you will create a program that **computes the average of a collection of values entered by the user**.   
// The user will enter **0 as a sentinel value** to indicate that no further values will be provided. 

// Your program should **display an appropriate error message if the first value entered by the user is 0**.  
// **Hint**: Because the 0 marks the end of the input it should not be included in the average.


// # Documentation

// For this project solution you may use:

// - Variables, expressions, statements
// - Conditionals and recursion
// - Iteration
// - Strings

// # Media

// In questo esercizio creerai un programma che **calcola la media di una raccolta di valori inseriti dall'utente**.
// L'utente inserirà **0 come valore sentinella** per indicare che non verranno forniti ulteriori valori.

// Il tuo programma dovrebbe **visualizzare un messaggio di errore appropriato se il primo valore immesso dall'utente è 0**.
// **Suggerimento**: poiché lo 0 segna la fine dell'input, non dovrebbe essere incluso nella media.


// # Documentazione

// Per questa soluzione di progetto puoi usare:

// - Variabili, espressioni, istruzioni
// - Condizionali e ricorsione
// - Iterazione
// - Stringhe

let count = -1;
let sum = 0;
let userInputValue;
let value = []


while( userInputValue != 0){
     userInputValue = +prompt(`enter the values ​and then you will receive the results:`);
    value.push(userInputValue);
    sum += userInputValue;
    count ++;
    
}
console.log(count)
let arithmeticAverage = sum / count ;
if(value[0]==0){
    alert(`if you enter "0" the program ends`) 
    alert(`
Your value enter: ${value}
Your sum is: ${sum.toFixed(2)}
Your average is: ${arithmeticAverage = 0}`)
} else{
alert(`
Your value enter: ${value}
Your sum is: ${sum.toFixed(2)}
Your average is: ${arithmeticAverage.toFixed(2)}`)
}