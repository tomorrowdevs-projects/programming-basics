alert("Convertiamo tutto il tempo trascorso in secondi, inserisci i dati richiesti.");
giorni = prompt("Inserisci i giorni trascorsi");
ore = prompt("Inserisci le ore trascorsi");
minuti = prompt("Inserisci i minuti trascorsi");
secondi = prompt("Inserisci i secondi trascorsi");

convGGinSS = giorni * 24 * 60 * 60;
convHHinSS = ore * 60 * 60;
convMMinSS = minuti * 60;

totSS = convGGinSS + convHHinSS + convMMinSS + secondi;

alert(giorni + "GG " + ore + "HH " + minuti + "MM " + secondi + "SS" + " corrispone a " + totSS + "secondi");