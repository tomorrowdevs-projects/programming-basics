const priceBread = 3.49;
const priceBreadOld = (3.49 * 60) / 100;
let numberBreadOldBuy = prompt("Inserire il numero di pagnotte del giorno precedente acquistate");

while (isNaN(parseInt(numberBreadOldBuy))) {
  numberBreadOldBuy = prompt("Il valore inserito non corrisponde a un numero. \nInserire un numero");
}

let priceBreadBuyUser = (priceBread * numberBreadOldBuy);
let priceBreadOldBuyUser = (priceBreadOld * numberBreadOldBuy);
let moneySaved = (priceBreadBuyUser - priceBreadOldBuyUser);

priceBreadBuyUser = priceBreadBuyUser.toLocaleString("it-IT", {style: "currency",currency: "EUR",});
priceBreadOldBuyUser = priceBreadOldBuyUser.toLocaleString("it-IT", {style: "currency",currency: "EUR",});
moneySaved = moneySaved.toLocaleString("it-IT", {style: "currency",currency: "EUR",});

alert("Il prezzo totale del pane è di: " + priceBreadBuyUser + "\nIl prezzo del pane scontato è di: " + priceBreadOldBuyUser + "\nIl prezzo da saldare è di: " + moneySaved);