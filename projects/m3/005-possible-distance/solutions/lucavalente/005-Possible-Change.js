
let prompt = require("prompt-sync")();

let importo = parseInt(prompt("inserisci l'importo: ")); // importo richiesto
let nTagliUtilizzabili = parseInt(prompt("inserisci il numero massimo di tagli utilizzabili: ")); // numero di tagli utilizzabili per ottenere l'importo 
let tagli = [25, 10, 5, 1]; //valore dei tagli utilizzabili per ottenere l'importo
let cambio = []; // lista di tagli che sommati forniscono l'importo
let logCambi = [] //log di tutte le possibili soluzioni provate

console.log("\n"); 

function possiblecambio(importo, nTagliUtilizzabili, sommaTagli = 0, numeroTagliUsati = 0, tagli){

    // soluzione corretta, con il numero di tagli richiesto si è ottenuto l'importo.
    // oppure caso limite: ci si trova con n-1 tagli utilizzabili ma ne basterebbe uno (contenuto nella lista di tagli utilizzabili)
    // per ottenere l'importo. Aggiungo quel taglio e termino l'algoritmo.
    if (importo == sommaTagli && nTagliUtilizzabili == numeroTagliUsati || (tagli.includes(importo - sommaTagli) && numeroTagliUsati == nTagliUtilizzabili - 1)) {
        cambio.push(importo-sommaTagli);
        return true;
    }

    // non c'è soluzione, sono stati fatte tutte le prove possibili con i tagli a disposizione ma non si è trovata una combianzione corretta
    // la lista di cambi che si ha in quest'ultimo presenta solo valori uguali ad 1 al suo interno, ultimo caso analizzabile
    if (cambio.length == nTagliUtilizzabili && cambio.every( (val, i, arr) => val === arr[0] && val == 1) || (importo > sommaTagli && numeroTagliUsati == nTagliUtilizzabili)){
        return false;
    }

    // fino a che il numero di tagli usati è inferiore al numero di tagli utilizzabili sommo i tagli disponibili
    if (numeroTagliUsati < nTagliUtilizzabili){
        sommaTagli += tagli[0]; 
        numeroTagliUsati += 1;
        cambio.push(tagli[0]);
        console.log("cambio: ", cambio, "somma tagli: ", sommaTagli, "\ntagli usati: ", numeroTagliUsati, "valore tagli utilizzabili", tagli, "\n")
        return possiblecambio(importo, nTagliUtilizzabili, sommaTagli, numeroTagliUsati, tagli);
    }

    // se la somma dei tagli è maggiore dell'importo devo fare dei passi indietro e provare a sommare altri tagli
    if (importo < sommaTagli && numeroTagliUsati == nTagliUtilizzabili) {
        logCambi.push(cambio);            

        // qui verifico se ho già provato a sommare un tagli specifico il numero max di volte possibili:
        // se così fosse quel taglio posso rimuoverlo dai tagli disponibili e provare con tagli più piccoli
        if (logCambi[logCambi.length-1].every( (val, i, arr) => val === arr[0] && val === tagli[0])){
            tagli = tagli.slice(1);
            sommaTagli -= cambio[cambio.length-1]; 
            cambio = cambio.slice(0, cambio.length-1);             
            numeroTagliUsati -= 1;
        }else{
            posUltimoTaglioUtilizzato = logCambi[logCambi.length-1].indexOf(tagli[0]);

            variabileTemporanea_1 = cambio.slice(posUltimoTaglioUtilizzato-1, cambio.length);    
            variabileTemporanea_2 = 0;
            variabileTemporanea_1.forEach(x => { variabileTemporanea_2 += x                
            });

            sommaTagli -= variabileTemporanea_2;
            cambio = cambio.slice(0, posUltimoTaglioUtilizzato-1);                
            numeroTagliUsati -= (nTagliUtilizzabili - cambio.length);
        }    

        console.log("cambio: ", cambio, "sommaTagli: ", sommaTagli, "\ntagli usati: ", numeroTagliUsati, "valore tagli utilizzabili", tagli, "\n")
        return possiblecambio(importo, nTagliUtilizzabili, sommaTagli, numeroTagliUsati, tagli)
    }

}

let risultato = possiblecambio(importo, nTagliUtilizzabili, 0, 0, tagli);

if (risultato){
    console.log("Soluzione trovata! --> lista dei cambi: ", cambio);
} else{
    console.log("Non c'è soluzione");
}
