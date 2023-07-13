const instruction = prompt("Inserisci 'Codifica il messaggio' per codificare o 'Decodifica il messaggio' per decodificare");
let userString = prompt("Inserisci la frase che vuoi codificare o decodificare");
let stringaModificata = '';

if (instruction === "Codifica il messaggio") {

for (let i = 0; i < userString.length; i++) {
    let codiceCarattere = userString.charCodeAt(i);

    if (codiceCarattere >= 65 && codiceCarattere <= 90) {
        stringaModificata += String.fromCharCode((codiceCarattere - 65 + 3) % 26 + 65);
    } else if (codiceCarattere >= 97 && codiceCarattere <= 122) {
        stringaModificata += String.fromCharCode((codiceCarattere - 97 + 3) % 26 + 97);
    } else {
        stringaModificata += userString.charAt(i);
    }
}

console.log(stringaModificata);

} else if (instruction === "Decodifica il messaggio") {
    for (let i = 0; i < userString.length; i++) {
        let codiceCarattere = userString.charCodeAt(i);
    
        if (codiceCarattere >= 65 && codiceCarattere <= 90) {
            stringaModificata += String.fromCharCode((codiceCarattere - 65 - 3 +26) % 26 + 65);
        } else if (codiceCarattere >= 97 && codiceCarattere <= 122) {
            stringaModificata += String.fromCharCode((codiceCarattere - 97 - 3 +26) % 26 + 97);
        } else {
            stringaModificata += userString.charAt(i);
        }
    }
    
    console.log(stringaModificata);

}
 
