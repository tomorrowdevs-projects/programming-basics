let giorno = prompt("Inserisci numero giorni");
let ore = prompt("Inserisci numero ore");
let minuti = prompt("Inserisci numero minuti");
let secondi = prompt("Inserisci numero secondi");

let giornoUtenteInt = isNaN(parseInt(giorno)) ? parseInt(0) : parseInt(giorno);
let oreUtenteInt = isNaN(parseInt(ore)) ? parseInt(0) : parseInt(ore);
let minutiUtenteInt = isNaN(parseInt(minuti)) ? parseInt(0) : parseInt(minuti);
let secondiUtenteInt = isNaN(parseInt(secondi)) ? parseInt(0) : parseInt(secondi);

// Trasforma munuti in secondi
let calcolaMinuti = minutiUtenteInt * 60;

// Trasforma le ore in secondi
let calcolaOre = oreUtenteInt * 60 * 60;

// Trasforma i giorni in secondi
let calcolaGiorno = giornoUtenteInt * 24 * 60 * 60;

// Totale data in secondi
let total = calcolaGiorno + calcolaOre + calcolaMinuti + secondiUtenteInt;

alert("Il totale dei secondi è " + total);