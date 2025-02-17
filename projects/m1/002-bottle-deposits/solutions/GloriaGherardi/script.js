const depositomenoLitro = 0.10;
const depositopiùLitro = 0.25;

const numeroBottPiccole = prompt('Quante bottiglie piccole devi restituire?');
const numeroBottGrandi = prompt('Quante bottiglie grandi devi restituire?');

const totale = (numeroBottPiccole * depositomenoLitro) + (numeroBottGrandi * depositopiùLitro);

alert("Devi ricevere" + totale.toFixed(2)+ " $");