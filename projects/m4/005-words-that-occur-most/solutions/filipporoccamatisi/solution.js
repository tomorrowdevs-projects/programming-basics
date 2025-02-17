const prompt = require("prompt-sync")();
const fs = require("fs/promises");

const countWordFrequencies = async function (fileName) {
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

        let word = "";
        // à, á, è, é, ì, í, ò, ó, ù, ú
        let AccentedCharactersInASCIICode = [224, 225, 232, 233, 237, 238, 242, 243, 249, 250]

        for (let char of data) {

            // this code is not case sensitive
            const formattedChar = char.toLowerCase();
            const FormattedCharInASCII_code = formattedChar.charCodeAt()

            // check if it is a "normal" letter
            if ((FormattedCharInASCII_code > 96) && (FormattedCharInASCII_code < 123)) {
                word = word.concat(formattedChar);
            }
             // check if it is an accented letter
            else if (AccentedCharactersInASCIICode.includes(FormattedCharInASCII_code)) {
                word = word.concat(formattedChar);
            }
            // check if the word is formed
            else if (word.length > 0) {
                counter[word] ? (counter[word] += 1) : (counter[word] = 1);
                word = "";
            };
        };
        
        console.log(counter)
    } catch (err) {
        console.log(err.message)
    }
}


const fileName = prompt("Enter the file name: ");

countWordFrequencies(fileName);


