const numberBread = parseInt(prompt('Quante pagnotte hai acquistato?'));

const price = 1.50;

const discount = 60;

const total = (numberBread * price).toFixed(2);
const totalDiscount = parseFloat((total/100) * discount).toFixed(2);

alert('Il prezzo è ' + total + " ma essendo del giorno prima hai diritto ad uno sconto del " + discount + "%. Il prezzo finale è quindi di Euro " + totalDiscount);