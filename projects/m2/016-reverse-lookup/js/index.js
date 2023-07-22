const prompt = require('prompt-sync')();

let dizionario = {};

while (true) {
    let chiave = prompt("Inserisci un allievo (lascia vuoto per terminare): ");

    
    if (chiave === '') {
        break;
    }

    let valore = prompt("Inserisci il voto per " + chiave + ": ");
    
    
    if (valore === '') {
        break;
    }
    
    dizionario[chiave] = valore;
}

let valoreDaCercare = prompt("Inserisci il voto da cercare: ");

function reverseLookup(dizionario, valore) {
    let chiaviTrovate = [];

    for (let chiave in dizionario) {
        if (dizionario[chiave] === valore) {
            chiaviTrovate.push(chiave);
        }
    }

    return chiaviTrovate;
}

let chiaviTrovate = reverseLookup(dizionario, valoreDaCercare);

if (chiaviTrovate.length > 0) {
    console.log("Il voto " + valoreDaCercare + " è stato trovato nei seguenti allievi: " + chiaviTrovate.join(", "));
} else {
    console.log("Il voto " + valoreDaCercare + " non è stato trovato in nessun allievo.");
}
