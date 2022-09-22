//008-word-by-word-palindromes

function palindromSentence(words){

    words = (words.replace(/[^\p{L}\s]/gu,"")).toLowerCase();
    let listOfWords = words.split(' ');

    if (listOfWords.toString() === (listOfWords.reverse()).toString()){
        return true;
        
    }else {
        return false;
    }
};

let input = prompt('Enter a sentence of words:','');

console.log (input);
console.log('The word/sentence is considered cosidered a palindrom? ' + palindromSentence(input));
