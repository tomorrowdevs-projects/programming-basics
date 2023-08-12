// # Sorted Order

// Write a program that reads integers from the user and stores them in an array. 
// Your program should continue reading values until the user enters 0. 
// Then it should display all the values entered by the user (except for the 0) in ascending order, with one value appearing on each line. 
// Use either the sort method or the sorted function to sort the array.

// # Ordine ordinato

// Scrivere un programma che legga numeri interi dall'utente e li memorizzi in un array.
// Il tuo programma dovrebbe continuare a leggere i valori finché l'utente non inserisce 0.
// Quindi dovrebbe visualizzare tutti i valori immessi dall'utente (tranne lo 0) in ordine crescente, con un valore che appare su ogni riga.
// Utilizzare il metodo sort o la funzione sorted per ordinare l'array.

// let insertNumber = parseInt(prompt(`Insert the number. the program ends when you enter 0: `));
let numberArray = [];



function showValue (){
    let insertNumber = 1

while(insertNumber > 0){
    insertNumber = parseInt(prompt(`Insert the number. the program ends when you enter 0: `))
    if(isNaN(insertNumber)){
        alert(`input is not valid`)}
    else{
        numberArray.push(insertNumber);
    }    
};


    SORTED(numberArray)

    for (let i = 0; i < numberArray.length; i++) {
        console.log(numberArray[i])
        
    }
    
};

const SORTED = (array) => {
    array.sort(function(a, b){return a-b});
}

showValue();