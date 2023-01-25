const fs = require(`fs`);
const prompt = require(`prompt-sync`)();
const readFile = require(`./read_file`);

readFile(getFileName())
.then((data) => getWords(data))
.then((textArray) => findSpecificWords(textArray))
.catch((err) => console.log(err));



const getWords = text => {

    const textArray = text.toLowerCase().match(/\b(\w+)\b/g);

    return textArray;
};


function getFileName() {

    return prompt(`Please, enter the name of the file you'd like to inspect to search for words with the six vowels in order: `)

};


const findSpecificWords = wordsArray => {

    const found = [];
    const exampleArray = [`a`, `e`, `i`, `o`, `u`, `y`];

    wordsArray.forEach(word => {

        let onlyVowels = word.match(/[aeiouy]+/g);
        onlyVowels = onlyVowels.join(``).split(``).sort();
        
        if (onlyVowels.join(``) === exampleArray.join(``))  found.push(word);

    });

    const output = (found.length >= 1) ? `The words with the six vowels in order in your file are: ${found.join(`, `)}` : `There are no words with the six vowels in order in your file!`

   console.log(output);

};


