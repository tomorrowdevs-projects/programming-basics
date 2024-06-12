const fs = require('fs').promises;
const prompt = require('prompt-sync')({sigint: true});

console.log('\nFind words that contain aeiouy only once in this order in it\n');
console.log('Which file do you want to analyze? write the file with the full path:\n');
const filePath = prompt('> ');

//Read the file
const readText = async (filePath) => {
    return fs.readFile(filePath, 'utf8', (err, data) => {
        if (err)
            throw err;
        return data;
    });
}

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

//filters all words in content, returns string with result
function wordsFound (content) {
    //create an array with the single words
    const result = content.replaceAll(',', ' ').split(/\s+/);
    
    const filteredWords = searchAeiouy(result);

    if (result[0] === '' && result.length === 1) return '\n! there are no words in your file !\n'
    else {
        const result = filteredWords.length !== 0 ? filteredWords.join(' - ') : ' ! no words match !'
        const separator = '-'.padStart(result.length, '-');
        return `\nWords found in the file :\n${separator}\n${result}\n${separator}`;
    }
};

//when the file is read create an array with the single words
readText(filePath).then(content => {
    console.log(wordsFound(content));
}).catch(err => console.log(err))
