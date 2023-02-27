const fs = require('fs');
const readFile = require('./file_read');
const prompt = require(`prompt-sync`)();

const wordsFrequencies = () => {

    const fileName = prompt(`Insert the name of a file, to see the frequencies of all of it's words: `);

    readFile(fileName)
    .then((data) => data.toLowerCase().replace(/[^\w\s]/gi, "").split(" "))
    .then((string) => {

        const freq = {};

        for (i = 0; i < string.length; i++) {
            const character = string[i];
            if (freq[character]) freq[character]++;
            else freq[character] = 1;
            };

            const arr = [];
            Object.keys(freq).forEach(function(item){
              if(freq[item] > 5) arr.push(`${item} => ${freq[item]} times`);
            }); 

         console.log(`The most used words in your file are:\n${arr.join(`,\n`)}`);
    })
    .catch((err) => console.error(err));   
};

wordsFrequencies();