// Write a program that reads integers from the user and stores them in an array. 
// Use 0 as a sentinel value to mark the end of the input. 
// Once all the values have been read your program should display them (except for the 0) in reverse order, 
// with one value appearing on each line.

// Scrivere un programma che legga numeri interi dall'utente e li memorizzi in un array.
// Usa 0 come valore sentinella per contrassegnare la fine dell'input.
// Una volta che tutti i valori sono stati letti, il tuo programma dovrebbe visualizzarli (tranne lo 0) in ordine inverso,
// con un valore che appare su ogni riga.

let numberArray = [];
let insertNumber = parseInt(prompt(`Insert the number. the program ends when you enter 0: `))


function showValue(insertNumber){
    numberArray.push(insertNumber)

while(insertNumber > 0){
    insertNumber = parseInt(prompt(`Insert the number. the program ends when you enter 0: `))
    if(isNaN(insertNumber)){
        alert(`input is not valid`)}
    else{
        numberArray.push(insertNumber);
    }    
};


    REVERSE_AND_SHIFT(numberArray)

    for (let i = 0; i < numberArray.length; i++) {
        console.log(numberArray[i])
        
    }
    
};

const REVERSE_AND_SHIFT = (array) => {
    array.reverse();
    array.shift();
}

showValue(insertNumber);