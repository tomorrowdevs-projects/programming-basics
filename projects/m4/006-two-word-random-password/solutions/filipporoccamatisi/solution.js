const prompt = require("prompt-sync")();
const fs = require("fs/promises");

const wordsInTheFile = async function (fileName, words) {
    // read file 
    const result = await fs.readFile(fileName);
    const data = result.toString();

    // frequency counter
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
        // check if the word is formed and if the word is valid
        else if (word.length > 0) {
            if (!(word.length < 3) && !(word.length > 7)) {
                words.push(word);
            }
            word = "";
        };
    };
}

const TwoWordRandomPassword = async function (fileName) {
    try {
        // if the fileName is empty throw an error
        if (!fileName) {
            throw new Error("The file name cannot be omitted")
        }
        // read the words in the file
        const words = [];
        await wordsInTheFile(fileName, words);

        // first part of the password
        let firstRandomWord;
        // second part of the password
        let secondRandomWord;

        let theTwoWordsAreValid = false;

        while (!theTwoWordsAreValid) {
            // two indexes to randomly choose two words from the list
            const firstRandomWordIndex = Math.trunc(Math.random() * words.length) + 0;
            const secondRandoWordIndex = Math.trunc(Math.random() * words.length) + 0;
            // two random words
            firstRandomWord = words[firstRandomWordIndex];
            secondRandomWord = words[secondRandoWordIndex];
            // check validity of words
            if ((firstRandomWord.length + secondRandomWord.length) >= 8 && (firstRandomWord.length + secondRandomWord.length) <= 10) {
                theTwoWordsAreValid = true;
            }
        }
        // create password
        const password = firstRandomWord.charAt(0).toUpperCase() + firstRandomWord.slice(1) +
            secondRandomWord.charAt(0).toUpperCase() + secondRandomWord.slice(1);

        console.log("Your password : ", password);
    } catch (err) {
        if (err.code === "ENOENT") err.message = "file does not exist"
        console.log(err.message)
    }
}

const fileName = prompt("Enter the file name: ");

TwoWordRandomPassword(fileName)