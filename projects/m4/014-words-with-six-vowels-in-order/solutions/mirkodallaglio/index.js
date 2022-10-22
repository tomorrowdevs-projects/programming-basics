const fs = require('fs');
const prompt = require('prompt-sync')({sigint: true});

console.log('\nFind words that contain aeiouy only once in this order in it\n');
console.log('Which file do you want to analyze? write the file with the full path:\n');
const filePath = prompt('> ');

//Read the file, create an array with the single words and show the filtered result
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const result = data.replaceAll(',', ' ').split(/\s+/);
    const filteredWords = searchAeiouy(result);

    if (result[0] === '' && result.length === 1) console.log('\n! there are no words in your file !\n')
    else {
        console.log('\nWords found in the file : \n');
        console.log('---------------------------------------------------------------');
        console.log(filteredWords.length !== 0 ? filteredWords.join(' - ') : ` ! no words match !`);
        console.log('---------------------------------------------------------------');
    }
});

//filter all words using a regex
function searchAeiouy (arr) {
    //regex: with \b at the beginning and at the end delimit the word, the final i for the insensitive case
    //[^aeiouy]* any letter not in parentheses (^ negates), * means from 0 to infinite times
    const regex = /\b[^aeiouy]*a[^aeiouy]*e[^aeiouy]*i[^aeiouy]*o[^aeiouy]*u[^aeiouy]*y[^aeiouy]*\b/i;
    const wordOk = arr.filter(word => {
        if (regex.test(word)) return word
    })
    return wordOk
};
