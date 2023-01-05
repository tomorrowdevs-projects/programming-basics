var priceFreshBread = 3.49;
let numberOldBreadPurchased,
  priceDiscountOldBread,
  discountedOldBread,
  totalOldBreadPurchased;

//numberOldBreadPurchased = 10;
numberOldBreadPurchased = prompt(
  "Please enter the number of the Old Bread to be purchased."
);

priceFreshBread = priceFreshBread;

discountedOldBread = ((priceFreshBread / 100) * priceFreshBread).toFixed(2);

priceDiscountOldBread = priceFreshBread - discountedOldBread;

totalOldBreadPurchased = (
  numberOldBreadPurchased * priceDiscountOldBread
).toFixed(2);

console.log(
  "Number of Old Bread             " + "N    ",
  numberOldBreadPurchased
);
console.log("Price of fresh bread            " + "€  ", priceFreshBread);
console.log("Discount 60% Olod Bread         " + "€  ", discountedOldBread);
console.log("Price of Old Bread              " + "€  ", priceDiscountOldBread);
console.log("Total Old Bread Bread Purchased " + "€ ", totalOldBreadPurchased);

/* 
# Pane vecchio di un giorno

Un panificio vende 
- pagnotte a 3,49 euro l'una.
- pane raffermo scontato del 60%.

Scrivere un programma che inizi leggendo
- numero di pagnotte di pane raffermo acquistate dall'utente.

Quindi il tuo programma dovrebbe visualizzare
- prezzo normale per il pane, 
- lo sconto perché è vecchio di un giorno 
- il prezzo totale.

Ciascuno di questi importi deve essere visualizzato 
- su una propria riga
- con un'etichetta appropriata.

Tutti i valori devono essere visualizzati 
- utilizzando due cifre decimali 
- i punti decimali in tutti i numeri devono essere allineati quando l'utente immette valori ragionevoli.
*/
