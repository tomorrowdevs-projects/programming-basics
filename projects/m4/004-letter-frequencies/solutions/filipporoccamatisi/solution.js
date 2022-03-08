const prompt = require("prompt-sync")();
const fs = require("fs/promises");

const countLetterFrequencies = async function (fileName) {
    try {
        // if the fileName is empty throw an error
        if (!fileName) {
            throw new Error("The file name cannot be omitted")
        }

        // read file 
        const result = await fs.readFile(fileName);
        const data = result.toString();

        // frequency counter
        const counter = {};
        for (let char of data) {
            let formattedChar = char.toLowerCase();
            // check the ascii code, ignore spaces, punctuation marks, and digits
            if (formattedChar.charCodeAt() > 96 && formattedChar.charCodeAt() < 123) {
                counter[formattedChar] ? (counter[formattedChar] += 1) : (counter[formattedChar] = 1);
            }
        }
        // result 
        console.log(counter);
    } catch (err) {
        // customize the error message
        if (err.code === "ENOENT") err.message = "file does not exist"
        console.log(err.message)
    }
}


const fileName = prompt("Enter the file name: ");
countLetterFrequencies(fileName)


