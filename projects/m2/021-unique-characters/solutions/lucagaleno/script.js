// 021-unique-characters

const text = 'Hello, world!'; //prompt se voglio scegliere l'input ogni volta.

function tokenizeString(string){
    const tokenization = string.match(/([\w])/g); // solo lettere, se tutti (/(.)/g)
    return tokenization;
}

function countUniqueLetter() {
    const letters = new Set(); // array di valori unici!
    tokenizeString(text).forEach(element => { 
        letters.add(element)    
    });
    return letters.size
}

console.log('Number of unique characters: ' + countUniqueLetter());