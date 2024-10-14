const fs = require("fs/promises");
const prompt = require("prompt-sync")({sigint: true});

function getLetterFrequencies(text) {
    fs.readFile(text, "utf-8")
    .then( text => {
            const letterFrequencies = {};

        text.toUpperCase().split("").forEach( letter => {
            if (letter in letterFrequencies) {
                letterFrequencies[letter] += 1;
            }
            else {
                letterFrequencies[letter] = 1;
            }

        });

        for (const key in letterFrequencies) {
            letterFrequencies[key] /= text.length;
        }

        const frequencies = JSON.stringify(letterFrequencies).split("").slice(1, -1).join("");

        console.log(`Each letter frequeny is:\n${frequencies.split(",").join("\n")}`);    
    })
    .catch( () => console.log("Failed to open the file"));
    
}

const text = prompt("Enter the file name: ");

getLetterFrequencies(text);