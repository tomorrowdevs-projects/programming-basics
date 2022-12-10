// Valori in secondi di Giorni, Ore e Mesi

let ssINdd = 86400;
let ssINhh = 3600;
let ssINmm = 60;

// Funzione per ripulire ore e minuti

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

// Numero secondi richiesti dall'utente

let secondi = prompt("Inserisci i secondi da convertire");

// Calcolo Giorni
let ddINinput = Math.floor(secondi / ssINdd);

if (ddINinput < 1) {
  ddINinput = 0;
} else {
  ddINinput = ddINinput;
}
secondi = secondi - (ddINinput * ssINdd);

// Calcolo ore
let hhINinput = validazioneOreMinSec(Math.floor(secondi / ssINhh));
secondi = secondi - (hhINinput * ssINhh);

// Calcolo minuti
let mmINinput = validazioneOreMinSec(Math.floor(secondi / ssINmm));
secondi = secondi - (mmINinput * ssINmm);


alert("I secondi indicati corrpisono a: " + ddINinput + ":" + hhINinput + ":" + mmINinput + ":" + secondi);