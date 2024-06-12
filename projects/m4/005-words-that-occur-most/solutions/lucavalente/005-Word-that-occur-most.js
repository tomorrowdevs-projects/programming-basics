const fs = require('fs');
const file = process.argv.slice(2)[0];
const isLetter = (character) => {
    return character && character.length === 1 && character.toLowerCase() !== character.toUpperCase();
};

// array/dizionario utili a raccogliere dati nel tempo: 
// caratteri nel file - parole nel file - numero di occorrenze per parola
let charList = [];
let wordList = [];
let wordOccurances = {};

if (arguments.length == 0){
    throw "You have to specify a file!";
}

// data una lista di parole conta le occorrenze di ogni parola
function countOccurrences(wordList){

    if (wordList.length == 0){
        return {};
    }  
    
    wordOccurances[wordList[0]]++;    

    return {
        ...wordOccurances,
        ...countOccurrences(wordList.slice(1))
    }  
  
}

fs.promises.readFile(file, "utf-8")
.then((content) => {
    //creo una lista di caratteri: se l'elemento analizzato non 
    // fosse un carattere, inserisco nella lista uno spazio 
    // Questo meccanismo è utile per trovare in seguito la lista di parole
    for(let i = 0; i < content.length; i++){
        if (isLetter(content[i])){
            charList.push(content[i].toLowerCase());        
        }else{
            charList.push(" ");
        }
    }

    // creo la lista di parole partendo da quella di caratteri
    wordList = charList.join("");
    wordList = wordList.split(" ");

    // inizializzo il dizionario che raccoglierà il numero di occorrenze
    // per ogni parola
    Array.prototype.forEach.call(wordList, word => {
            wordOccurances[word] = 0;
    });

    // rimuovo dal risultato il numero di occorrenze per il carattere
    // "" (vuoto), non necessario
    result = countOccurrences(wordList);
    delete result[""];
    console.log(result);
})
.catch((err) => {
    console.log(err);
});