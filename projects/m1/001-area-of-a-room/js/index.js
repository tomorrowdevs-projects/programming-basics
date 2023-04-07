// richiesta del tipo di dato

let sceltaScala = "metri";

// dichiarazione misure
let larghezza = 1;
let altezza = 1;
let misuraFinale = 1;

// calcolo stanza
if (sceltaScala == "metri") {
    misuraFinale = larghezza * altezza;
    console.log("la tua stanza misura "+ misuraFinale +" metri");
} else if (sceltaScala == "piedi") {
    misuraFinale = larghezza * altezza;
    console.log("la tua stanza misura "+ misuraFinale +" piedi");
} else {
    console.log("Devi inserire la scala di misura")
}

