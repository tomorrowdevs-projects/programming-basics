const prompt = require('prompt-sync')();
let valueArray = [];

while (true) {
    const valueChoise = parseInt(prompt('Inserisci il primo valore di cui vuoi calcolare la media: '), 10);
    if (valueChoise !== 0) {
        valueArray.push(valueChoise);
        break;
    } else {
        console.log("Come primo dato devi inserire un valore superiore allo zero. Successivamente scrivi 0 per interrompere l'immissione dei valori.");
    }
}

while (true) {
    const valueChoise = parseInt(prompt('Inserisci il nuovo valore: '), 10);
    if (valueChoise !== 0) {
        valueArray.push(valueChoise);
    } else {
        break;
    }
}

function calcMedia(array) {
    let somma = 0;
    const lunghezza = array.length;
  
    for (let i = 0; i < lunghezza; i++) {
      somma += array[i];
    }
  
    return somma / lunghezza;
}

const media = calcMedia(valueArray);
console.log(`La media dei valori inseriti nell'Array è ${media}`)
