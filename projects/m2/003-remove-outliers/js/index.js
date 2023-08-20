// # Remove Outliers

// When analysing data collected as part of a science experiment it may be desirable to remove the most extreme values 
// before performing other calculations. 

// Write a function called "remove outliers" that takes a list of values and a non-negative integer, n, as its parameters.
// The function should create a new copy of the list with the n the largest elements and the n the smallest elements removed. 
// Then it should return the new copy of the list as the function’s only result. 
// The order of the elements in the returned list does not have to match the order of the elements in the original list.

// Write a main program that demonstrates your function. It should read a list of numbers from the user and remove 
// the two largest and two smallest values from it by calling the function described previously. 
// Display the list with the outliers removed, followed by the original list. 
// Your program should generate an appropriate error message if the user enters less than 4 values.


// # Rimuove i valori anomali

// Quando si analizzano i dati raccolti come parte di un esperimento scientifico, potrebbe essere desiderabile rimuovere i valori più estremi
// prima di eseguire altri calcoli.

// Scrivi una funzione chiamata "rimuovi valori anomali" che accetta un elenco di valori e un numero intero non negativo, n, come parametri.
// La funzione dovrebbe creare una nuova copia della lista con n gli elementi più grandi e n gli elementi più piccoli rimossi.
// Quindi dovrebbe restituire la nuova copia dell'elenco come unico risultato della funzione.
// L'ordine degli elementi nell'elenco restituito non deve corrispondere all'ordine degli elementi nell'elenco originale.

// Scrivi un programma principale che dimostri la tua funzione. Dovrebbe leggere un elenco di numeri dall'utente e rimuovere
// i due valori più grandi e due più piccoli da esso chiamando la funzione descritta in precedenza.
// Visualizza l'elenco con gli outlier rimossi, seguito dall'elenco originale.
// Il tuo programma dovrebbe generare un messaggio di errore appropriato se l'utente inserisce meno di 4 valori.

let originalNumbersArray = [];
let outliersNumbersArray = [];
let userInput = parseInt(prompt(`add a number:`))

function addNumbers (numbers){
 originalNumbersArray.push(numbers);

 while(numbers > 0){
    if(isNaN(numbers)){
        console.log(`parameter is not valid`)
    }else {
        numbers= parseInt(prompt(`add a number:`))
        originalNumbersArray.push(numbers)
    }
 }
 
 if(originalNumbersArray.length < 4){
     console.log(`You have not entered enough parameters`)
     location.reload();
  } else{
     originalNumbersArray.sort(function(a,b){
         return a - b;
     })
  }

}
function removeOutliers(originalArray){
    outliersNumbersArray = [...originalArray];
    let removed = outliersNumbersArray.splice(-2);
    console.log(removed)

    let removed2 = outliersNumbersArray.splice(0, 2);
    console.log(removed2)

//    outliersNumbersArray.pop();
//    outliersNumbersArray.shift();
//    outliersNumbersArray.pop();
//    outliersNumbersArray.shift();



}

function showParameters(){
    for(let i = 0; i < originalNumbersArray.length; i++){
        console.log(originalNumbersArray[i])
        
    }
    console.log("\n")
    for(let x = 0; x < outliersNumbersArray.length; x++){
        console.log(outliersNumbersArray[x])
    }
}


addNumbers(userInput);
removeOutliers(originalNumbersArray);
showParameters()