//007-only-the-words

 function extractWords(words){

    let listOfWords = words.split(' ');

    let lastWord = listOfWords.slice(-1); //identifco l'ultimo elemnto dell'arry
    listOfWords.pop() // elimino ultimo elemento array
    lastWord = lastWord[0].replace(/[^\p{L}\s]/gu,""); //rimpiazzo ogni punteggaitura con '' nell'ultimo elemento
    listOfWords.push(lastWord); //inserisco ultimo elemento corretto.

    return listOfWords
};

let input = prompt('Enter a sentence of words:','');

console.log (input);
console.log(extractWords(input));

