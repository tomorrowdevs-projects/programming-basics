// 1. creare funzione che restituisca le parole di una stringa senza la punteggiatura () 2. creare un input 3. creare programma per dimostrare la funzione

function justWords(string) {
    const regex = /[!"#$%&()*+,-./:;<=>?@[\]^_`{|}~]/g;
    const result = string.replace(regex, '');
    const splitString = result.split(" ");
    return splitString;
}

let text = prompt('Write something');
console.log(justWords(text));