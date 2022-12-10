// valori di riferimento
let ssINdd = 86400;
let ssINhh = 3600;
let ssINmm = 60;

// funzione per ripulire ore e minuti
function validazioneOreMinSec(datoHhMmSs){
  if (datoHhMmSs < 1) {
    datoHhMmSs = "00";
  } else if (datoHhMmSs >= 1 && datoHhMmSs < 10) {
    datoHhMmSs = "0" + datoHhMmSs;
  } else {
    datoHhMmSs = datoHhMmSs;
  }
  return datoHhMmSs;
}

// richiesta dato all'utente
let secondi = prompt("Inserisci i secondi da convertire");

// CALCOLO GIORNI
let ddINinput = Math.floor(secondi / ssINdd);
if (ddINinput < 1) {
  ddINinput = 0;
} else {
  ddINinput = ddINinput;
}
secondi = secondi - (ddINinput * ssINdd);

// CALCOLO ORE -> 13600
let hhINinput = validazioneOreMinSec(Math.floor(secondi / ssINhh));
secondi = secondi - (hhINinput * ssINhh);

// CALCOLO MINUTI
let mmINinput = validazioneOreMinSec(Math.floor(secondi / ssINmm));
secondi = secondi - (mmINinput * ssINmm);

alert("I secondi indicati corrpisono a: " + ddINinput + ":" + hhINinput + ":" + mmINinput + ":" + secondi);