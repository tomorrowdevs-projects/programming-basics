const prompt = require('prompt-sync')();

function isSublist(larger, smaller) {
    larger = larger.split(',').map(Number);
    smaller = smaller.split(',').map(Number);
    
    const smallerLength = smaller.length;

    for (let i = 0; i <= larger.length - smallerLength; i++) {
        const slice = larger.slice(i, i + smallerLength);
        
        if (slice.length === smaller.length && slice.every((value, index) => value === smaller[index])) {
            return true;
        }
    }

    return false;
}

let larger = prompt("Inserisci la lista più grande (es. '1,2,3,4'): ");

let smaller = prompt("Inserisci la lista più piccola (es. '2,3'): ");

let result = isSublist(larger, smaller);

if(result) {
    console.log("La lista più piccola è una sottolista della lista più grande.");
} else {
    console.log("La lista più piccola non è una sottolista della lista più grande.");
}


