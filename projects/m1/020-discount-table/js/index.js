// # Discount Table

// A particular retailer is having a **60 percent off sale** on a variety of discontinued products.   
// The retailer would like to help its customers determine the reduced price of the merchandise 
// by having a printed discount table on the shelf that shows the original prices 
// and the prices after the discount has been applied. 

// Write a program that uses a loop to generate a table for  $4.95, $9.95, $14.95, $19.95 and $24.95 that shows:
// - the original price
// - the discount amount
// - the new price for purchases 

// Ensure that the discount amounts and the new prices are **rounded to 2 decimal places** when they are displayed.

// #TabellaSconti

// Un particolare rivenditore ha uno sconto del **60%** su una varietà di prodotti fuori produzione.
// Il rivenditore vorrebbe aiutare i propri clienti a determinare il prezzo ridotto della merce
// avendo una tabella degli sconti stampata sullo scaffale che mostra i prezzi originali
// e i prezzi dopo l'applicazione dello sconto.

// Scrivi un programma che utilizza un ciclo per generare una tabella per $ 4,95, $ 9,95, $ 14,95, $ 19,95 e $ 24,95 che mostri:
// - il prezzo originale
// - l'importo dello sconto
// - il nuovo prezzo per gli acquisti

// Assicurati che gli importi dello sconto e i nuovi prezzi siano **arrotondati a 2 cifre decimali** quando vengono visualizzati.

const priceBeforeDiscount = [4.95, 9.95, 14.95, 19.95, 24.95];
const priceAfterDiscount = [];

for(let i = 0 ; i <= priceBeforeDiscount.length; i++){
    priceAfterDiscount.push((priceBeforeDiscount[i] * 60) / 100).toFixed(2);
}

for(let x = 0; x < priceBeforeDiscount.length && priceAfterDiscount.length; x++){
    alert(`the full price: $${priceBeforeDiscount[x]}`)
    alert(`the discount price: $${priceAfterDiscount[x]}`)
    
}

// alert(`I show you the full prices and with discounts:
// first full price  : $${priceBeforeDiscount[0]}
// first discount price: $${priceAfterDiscount[0]}
// second full price : $${priceBeforeDiscount[1]}
// second discount price : $${priceAfterDiscount[1]}
// third full price : $${priceBeforeDiscount[2]}
// third discount price : $${priceAfterDiscount[2]}
// fourth full price : $${priceBeforeDiscount[3]}
// fourth discount price: $${priceAfterDiscount[3]}
// fifth full price : $${priceBeforeDiscount[4]}
// fifth discount price : $${priceAfterDiscount[4]}`)
