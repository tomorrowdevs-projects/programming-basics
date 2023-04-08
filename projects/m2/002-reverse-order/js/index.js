//calcolo numero contenitori totali prelevati dall'utente
let bottleOneL = 2;
let bottlePlusOneL = 5;
let cashRefoundOneL = 0.10;
let cashRefoundPlusOneL = 0.25;
let cashRefoundTotal = 0;

//calcolo rimborso generale
let totalRefoundOneL = 0;
let totalRefoundPlusOneL = 0;
let totalBottle = bottleOneL + bottlePlusOneL;

if (bottleOneL >= 1) {
    totalRefoundOneL = bottleOneL * cashRefoundOneL;
    console.log("Il numero dei contenitori da un litro che hai prelevato è " + bottleOneL);
}
if (bottlePlusOneL >= 1){
    totalRefoundPlusOneL = bottlePlusOneL * cashRefoundPlusOneL;
    console.log("il numero dei contenitori che eccedono un litro che hai prelevato è " + bottlePlusOneL);
}
cashRefoundTotal = totalRefoundOneL + totalRefoundPlusOneL;
console.log("Il totale del tuo rimborso previsto in caso di restituzione di " + totalBottle + " contenitori " + "sarà pari a " + cashRefoundTotal.toFixed(2) + " $");