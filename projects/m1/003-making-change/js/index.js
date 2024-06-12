let prezzo = prompt("Qual è l'importo da pagare?") * 100;
let soldiInseriti = prompt("Quanto denaro hai inserito?") * 100;
let resto = soldiInseriti - prezzo;

alert("Il tuo resto è di " + resto/100 + "€");


let message;

let mon2eur = 200;
let mon1eur = 100;
let mon50cent = 50;
let mon20cent = 20;
let mon10cent = 10;
let mon5cent = 5;
let mon2cent = 2;
let mon1cent = 1;


let restoMon2eur = Math.floor((resto / mon2eur));
let valoreResto2Eur = restoMon2eur * mon2eur;
resto -= valoreResto2Eur;

let restoMon1eur = Math.floor((resto / mon1eur));
let valoreResto1Eur = restoMon1eur * mon1eur;
resto -= valoreResto1Eur;

let restoMon50cent = Math.floor((resto / mon50cent));
let valoreResto50centEur = restoMon50cent * mon50cent;
resto -= valoreResto50centEur;

let restoMon20cent = Math.floor((resto / mon20cent));
let valoreResto20centEur = restoMon20cent * mon20cent;
resto -= valoreResto20centEur;

let restoMon10cent = Math.floor((resto / mon10cent));
let valoreResto10centEur = restoMon10cent * mon10cent;
resto -= valoreResto10centEur;

let restoMon5cent = Math.floor((resto / mon5cent));
let valoreResto5centEur = restoMon5cent * mon5cent;
resto -= valoreResto5centEur;

let restoMon2cent = Math.floor((resto / mon2cent));
let valoreResto2centEur = restoMon2cent * mon2cent;
resto -= valoreResto2centEur;

let restoMon1cent = Math.floor((resto / mon1cent));
let valoreResto1centEur = restoMon1cent * mon1cent;
resto -= valoreResto1centEur;

if(restoMon2eur >= 1){
    message = "N° monete da 2,00€: " + restoMon2eur;
}

if(restoMon1eur >= 1){
  message += "\n N° monete da 1,00€: " + restoMon1eur;
}

if(restoMon50cent >= 1){
  message += "\n N° monete da 0.50€: " + restoMon50cent;
}

if(restoMon20cent >= 1){
  message += "\n N° monete da 0.20€: " + restoMon20cent;
}

if(restoMon10cent >= 1){
  message += "\n N° monete da 0.10€: " + restoMon10cent;
}

if(restoMon5cent >= 1){
  message += "\n N° monete da 0.05€: " + restoMon5cent;
}

if(restoMon2cent >= 1){
  message += "\n N° monete da 0.02€: " + restoMon2cent;
}

if(restoMon1cent >= 1){
  message += "\n N° monete da 0.01€: " + restoMon1cent;
}

if(soldiInseriti < prezzo){
  alert("L'importo inserito non è sufficente al completamente dell'acquisto")
} else if (soldiInseriti == prezzo){
  alert("Acquisto completato. Resto 0");
} else{
  alert("Erogazione resto in corso: \n " + message);
}