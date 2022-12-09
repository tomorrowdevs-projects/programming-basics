alert("Convertiamo tutto il tempo trascorso in secondi, inserisci i dati richiesti.");
giorni = prompt("Inserisci i giorni trascorsi");
ore = prompt("Inserisci le ore trascorsi");
minuti = prompt("Inserisci i minuti trascorsi");
secondi = prompt("Inserisci i secondi trascorsi");

//verifica numeri

let giorniUtente = isNaN(parseInt(giorni)) ? parseInt(0) : parseInt(giorni);
let oreUtente = isNaN(parseInt(ore)) ? parseInt(0) : parseInt(ore);
let minutiUtente = isNaN(parseInt(minuti)) ? parseInt(0) : parseInt(minuti);
let secondiUtente = isNaN(parseInt(secondi)) ? parseInt(0) : parseInt(secondi);


convGGinSS = giorniUtente * 24 * 60 * 60;
convHHinSS = oreUtente * 60 * 60;
convMMinSS = minutiUtente * 60;

totSS = convGGinSS + convHHinSS + convMMinSS + secondiUtente;

alert(giorni + "GG " + ore + "HH " + minuti + "MM " + secondi + "SS" + " corrispone a " + totSS + "secondi");