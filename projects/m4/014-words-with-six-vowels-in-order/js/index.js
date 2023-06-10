const fs = require('fs');
const prompt = require(`prompt-sync`)();
const fileName = prompt(`Please, enter the name of the file you'd like to inspect to search for words with the six vowels in order: `);

function getFile(file) {
    return new Promise ((resolve, reject) => {
        fs.readFile (`./files/${file}`, 'utf-8', (err, data) => {
            if (err) reject (`ERROR: The is no file named "${file}" in the selected folder!`);
            resolve (data);
        });
    });
}; 

async function findSpecificWords(fileName) {
    try {
        const text = await getFile(fileName);
        const textList = text.toLowerCase().match(/\b(\w+)\b/g);
        const found = [];
        const exampleArray = [`a`, `e`, `i`, `o`, `u`, `y`];

        textList.forEach(word => {
            let onlyVowels = word.match(/[aeiouy]+/g);
            onlyVowels = onlyVowels.join(``).split(``).sort();
            
            if (onlyVowels.join(``) === exampleArray.join(``))  found.push(word);
        });

        const output = (found.length >= 1) ? `The words with the six vowels in order in your file are: ${found.join(`, `)}` : `There are no words with the six vowels in order in your file!`

    console.log(output);
    } catch (error) {
        console.log(error)
    }
};

findSpecificWords(fileName);
