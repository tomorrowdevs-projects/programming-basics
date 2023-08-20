// # The Sieve of Eratosthenes

// The Sieve of Eratosthenes is a technique that was developed more than 2,000 years ago to easily find all the 
// prime numbers between 2 and some limit, say 100. A description of the algorithm follows:

// Write down all the numbers from 0 to the limit Cross out 0 and 1 because they are not prime

// Set *p* equal to 2

// While *p* is less than the limit do
//     Cross out all multiples of *p* (but not *p* itself)
//     Set *p* equal to the next number in the list that is not crossed out

// Report all the numbers that have not been crossed out as prime

// The key to this algorithm is that it is relatively easy to cross out every nth number on a piece of paper. This is also an easy task for a computer—a for loop can 
// simulate this behavior when a third parameter is provided to the *range* function. 

// When a number is crossed out, we know that it is no longer prime, but it still occupies space on the piece of paper,
//  and must still be considered when computing later prime numbers. As a result, you should not simulate crossing out a number by removing it from the list. Instead,
//   you should simulate crossing out a number by replacing it with 0. Then, once the algorithm completes, all of the non-zero values in the list are prime.

// Create a program that uses this algorithm to display all of the prime numbers between 2 and a limit entered by the user. 
// If you implement the algorithm correctly you should be able to display all of the prime numbers less than 1,000,000 in a few seconds.

// # Il crivello di Eratostene

// Il Crivello di Eratostene è una tecnica sviluppata più di 2000 anni fa per trovare facilmente tutti i
// numeri primi compresi tra 2 e un certo limite, diciamo 100. Segue una descrizione dell'algoritmo:

// Annota tutti i numeri da 0 al limite Cancella 0 e 1 perché non sono primi

// Imposta *p* uguale a 2

// Mentre *p* è minore del limite do
// Cancella tutti i multipli di *p* (ma non *p* stesso)
// Imposta *p* uguale al numero successivo nell'elenco che non è barrato

// Riporta tutti i numeri che non sono stati cancellati come primi

// La chiave di questo algoritmo è che è relativamente facile cancellare ogni ennesimo numero su un pezzo di carta. Anche questo è un compito facile per un computer: un ciclo for può
// simula questo comportamento quando viene fornito un terzo parametro alla funzione *range*.

// Quando un numero viene cancellato, sappiamo che non è più primo, ma occupa ancora spazio sul pezzo di carta,
// e deve ancora essere considerato quando si calcolano i numeri primi successivi. Di conseguenza, non dovresti simulare la cancellazione di un numero rimuovendolo dall'elenco. Invece,
// dovresti simulare la cancellazione di un numero sostituendolo con 0. Quindi, una volta completato l'algoritmo, tutti i valori diversi da zero nell'elenco sono primi.

// Crea un programma che utilizzi questo algoritmo per visualizzare tutti i numeri primi compresi tra 2 e un limite inserito dall'utente.
// Se implementi correttamente l'algoritmo dovresti essere in grado di visualizzare tutti i numeri primi inferiori a 1.000.000 in pochi secondi.

let p = 2;

let rangeMax = +prompt("enter a number as range", 100)

function checkPrimeNumbers(init, end){
    let primeNumbers = [];
    let booleanPrimeConfirm;

    for(let i = init; i <= end; i++){
         booleanPrimeConfirm = true;

         for(let y = init; y < i; y++){
            if(i % y === 0){
                booleanPrimeConfirm = false;
                break;
            }
         }

         if(booleanPrimeConfirm){
            primeNumbers.push(i)
         }
    }

    return alert(primeNumbers.join(','))


}

checkPrimeNumbers(p,rangeMax);


