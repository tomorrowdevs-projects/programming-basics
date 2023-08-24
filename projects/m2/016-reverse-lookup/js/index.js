// # Reverse Lookup

// Write a function named reverseLookup that finds all the keys in a dictionary that map to a specific value. 
// The function will take the dictionary and the value to search for as its only parameters. 
// It will return a (possibly empty) list of keys from the dictionary that map to the provided value.
// Include a main program that demonstrates the reverseLookup function as part of your solution to this exercise. 
// Your program should create a dictionary and then show that the reverseLookup function works correctly when 
// it returns multiple keys, a single key, and no keys. 
// Ensure that your main program only runs when the file containing your solution to this exercise has not been imported into another program.

// # Ricerca inversa

// Scrivere una funzione denominata reverseLookup che trovi tutte le chiavi in un dizionario mappate su un valore specifico.
// La funzione prenderà il dizionario e il valore da cercare come suoi unici parametri.
// Restituirà un elenco (possibilmente vuoto) di chiavi dal dizionario che mappano al valore fornito.
// Includere un programma principale che dimostri la funzione reverseLookup come parte della soluzione a questo esercizio.
// Il tuo programma dovrebbe creare un dizionario e quindi mostrare che la funzione reverseLookup funziona correttamente quando
// restituisce più chiavi, una singola chiave e nessuna chiave.
// Assicurarsi che il programma principale venga eseguito solo quando il file contenente la soluzione a questo esercizio non è stato importato in un altro programma.

const KEY_PLAYER_FOR_THE_TEAM = {
    Koopmeiners: "Atalanta",
    Orsolini: "Bologna",
    Nandez: "Cagliari",
    Baldanzi: "Empoli",
    Nico: "Fiorentina",
    Caso: "Frosinone",
    Malinovskyi: "Genoa",
    Ngonge: "Hellas Verona",
    Lautaro: "Inter",
    Chiesa: "Juvenus",
    'Luis Alberto': "Lazio",
    Strefezza: "Lecce",
    Leao: "Milan",
    Pessina: "Monza",
    Kvara: "Napoli",
    Dybala: "Roma",
    Dia: "Salernitana",
    Berardi: "Sassuolo",
    Ilic: "Torino",
    Beto: "Udinese"



};
function reverseLookup(obj,value){

    let keyOfValue = [];

    for (let key in obj) {
        if (obj[key] === value) {
            keyOfValue.push(key);
        }
    }

    let showString =  keyOfValue.join('');
    return showString
}
let regExpNumber = /[0-9]/g;
let inputValue = String(prompt("Enter the soccer team and you will know it's best soccer player"));



if(inputValue === "" || inputValue === " " || regExpNumber.test(inputValue)=== true){
   alert("Input is not valid")
} else{
    let upperCaseFirstLetter = inputValue[0].toUpperCase();
    let replaceLetterOfTheInputValue = inputValue.replace(inputValue[0], upperCaseFirstLetter);
    console.log(upperCaseFirstLetter)
    console.log(replaceLetterOfTheInputValue)
    alert(reverseLookup(KEY_PLAYER_FOR_THE_TEAM, replaceLetterOfTheInputValue))
}

