// avoiding-duplicates

let wordInput;
const wordsList = [];

while (wordInput != ''){
    wordInput = prompt('eneter words: ','')
    if ((!(wordsList.includes(wordInput))) && (wordInput != '')) {
    wordsList.push(wordInput);
    };
};
console.log(wordsList);