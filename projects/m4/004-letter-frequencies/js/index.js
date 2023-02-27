const fs = require('fs');
const readFile = require('./file_read');
const prompt = require(`prompt-sync`)();

const letterFrequencies = () => {

    const fileName = prompt(`Insert the name of a file, to see the frequencies of all of it's letters: `);
    
    readFile(fileName)
    .then((data) =>  {
        return data.toLowerCase().replace(/\W|_/g, '');
    })
    .then((string) => {
        const freq = {};
        
        for (i = 0; i < string.length; i++) {
            const character = string.charAt(i);
            if (freq[character]) freq[character]++;
            else freq[character] = 1;
            };
        
        console.log(`LETTER FREQUENCIES =>`, Object.entries(freq).sort());
    })
    .catch((err) => console.error(err));   
};

letterFrequencies();