// # Taxi Fare

// In a particular jurisdiction, taxi fares consist of a base fare of €4.00, plus €0.25 for every 140 meters travelled.
//  Write a function that takes the distance travelled (in kilometers) as its only parameter and returns the total fare as its only result.
//   Write a main program that demonstrates the function.

// # Tariffa del taxi

// In una particolare giurisdizione, le tariffe dei taxi consistono in una tariffa base di € 4,00, più € 0,25 per ogni 140 metri percorsi.
// Scrivi una funzione che prenda la distanza percorsa (in chilometri) come unico parametro e restituisca la tariffa totale come unico risultato.
// Scrivere un programma principale che dimostri la funzione.

function taxiPay(kilometers){
    let taxiFares = 4;
    let extraTaxiFares = 0.25;
    let metersTravelled = kilometers / 0.14;
    let finallyPayment = taxiFares + extraTaxiFares * (metersTravelled)
    return alert(`you will have to pay ${finallyPayment.toFixed(2)}€`)
}

taxiPay(+prompt(`how many kilometers do you have to travel?:`));