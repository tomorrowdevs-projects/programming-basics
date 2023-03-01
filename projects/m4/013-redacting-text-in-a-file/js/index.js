const fs = require(`fs`);
const prompt = require(`prompt-sync`)();
const fileToRedact = `text.txt`;
const sensiveWordsFile = `sensitive_words.txt`;

Promise.all([getFile(fileToRedact), getFile(sensiveWordsFile)])
.then((texts) => {
    const textToRedact = texts[0];
    const sensitiveWords = texts[1];

    if (sensitiveWords.length <= 0) return console.error(`There are no sensitive words in the given file!`);
    if (textToRedact.length <= 0) return console.error(`There are no words to redact in the given file!`)

    const sensitiveWordsList = sensitiveWords.toLowerCase().match(/\b(\w|')+\b/gim);
    const redactedText  = replaceSensitiveWords(sensitiveWordsList, textToRedact);  
    
    fs.writeFileSync(`./files/redacted_file.txt`, redactedText);
    console.log(`File succesfully redacted! You can find it in the selected folder!`)
})
.catch((error) => console.log(error));

function getFile(file) {
    return new Promise ((resolve, reject) => {
        fs.readFile (`./files/${file}`, 'utf-8', (err, data) => {
            if (err) reject (`ERROR: The is no file named "${file}" in the selected folder!`);
            resolve (data);
        });
    });
}; 

function replaceSensitiveWords(wordsArray, text) {

    const redactedText = [];
    const textList = text.replace(/,\s+/g, "").split(/[\n,\s+]/);

    for (word of textList) {
        const cleanedWord = word.toLowerCase().match(/\b(\w|')+\b/gim);
            if (wordsArray.includes(cleanedWord.join(``))) {
                    const sensitiveWord = wordsArray.indexOf(cleanedWord.join(``));
                    const censorship = Array(wordsArray[sensitiveWord].length + 1).join("*")
                    const censuredWord = word.replace(`${wordsArray[sensitiveWord]}`, `${censorship}`);
                    redactedText.push(censuredWord);
            } else {
                redactedText.push(word);
            };
    };
    return redactedText.join(` `);
};


