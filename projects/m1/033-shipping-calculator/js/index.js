// # Shipping Calculator

// An online retailer provides express shipping for many of its items at a rate of €10.99 for the first item in an order,
//  and €2.99 for each subsequent item in the same order. 

// Write a function that takes the number of items in the order as its only parameter. 

// Return the shipping charge for the order as the function’s result. 

// Include a main program that reads the number of items purchased from the user and displays the shipping charge.

// # Calcolatore di spedizione

// Un rivenditore online offre la spedizione espressa per molti dei suoi articoli a una tariffa di € 10,99 per il primo articolo di un ordine,
// e € 2,99 per ogni articolo successivo dello stesso ordine.

// Scrivi una funzione che prenda il numero di elementi nell'ordine come unico parametro.

// Restituisce le spese di spedizione per l'ordine come risultato della funzione.

// Include un programma principale che legge il numero di articoli acquistati dall'utente e visualizza le spese di spedizione.

let itemsPurchased = +prompt(`How many items have you purchased?`);

while(itemsPurchased == "" ||  isNaN(itemsPurchased)){
    itemsPurchased = +prompt(`enter only the number of items thanks!`)
}

function ShippingCalculator(items){
    let oneItem = 10.99;
    let addItems = 2.99;
    let moreThanOneItems = ((items - 1) * addItems) + oneItem
    if(items == 1){
        return alert(`your shipping costs: ${oneItem} €`)
    } else if( items > 1){
        return alert(`your shipments cost: ${moreThanOneItems.toFixed(2)}`)
    } 
}

ShippingCalculator(itemsPurchased);