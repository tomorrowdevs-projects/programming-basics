let guest = [];

let x = prompt("Inserisci l'età del primo visitatore:");

guest.push(parseInt(x));

do {
  x = prompt("Inserisci l'età di un nuovo visitatore (lascia vuoto per uscire):");
  if (x !== '') {
    guest.push(parseInt(x));
  }
} while (x !== '');

let totalPrize = 0;

for (let i = 0; i < guest.length; i++) {
    if (guest[i] <= 2) {
        totalPrize +=0;
    } else if (guest[i] >= 3 && guest[i] <= 12) {
        totalPrize +=14;
    } else if (guest[i] >= 13 && guest[i] <= 64) {
        totalPrize +=23;
    } else {
        totalPrize +=18;
    }
}

console.log(`Il prezzo totale da pagare è pari a $ ${totalPrize.toFixed(2)}`)

