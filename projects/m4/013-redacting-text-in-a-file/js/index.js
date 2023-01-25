const fs = require(`fs`);
const prompt = require(`prompt-sync`)();
const readFile =  require(`./read_file`);


readFile(getFileName())
.then((data) => {

    const sentiveWordsArray = inputSensitiveWords();

    return [getTextArray(data), sentiveWordsArray];
})
.then((resultArray) => replaceSensitiveWords(resultArray[1],  resultArray[0])) 
.catch((err) => console.log(err));



function getFileName() {

    return prompt(`Please, enter the name of the file you'd like to correct: `)

};




const inputSensitiveWords = () => {

    let sensitiveWords = prompt(`Please, enter the sensitive words to replace in the text (or a list, if there are more than one): `);
    
    if (sensitiveWords.length <= 0) {
        console.log(`There are no words to censor, your text is ready to be released!`)
        process.exit();
    };

    sensitiveWords = sensitiveWords.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ").match(/\b(\w|')+\b/gim);


    return sensitiveWords;
};




const getTextArray = text => {

    const textArray = text.replace(/,\s+/g).split(/[\n,\s+]/)

    return textArray;

};




const replaceSensitiveWords = (wordsArray, textArray) => {

    let redactedText = [];

    for (word of textArray) {
        
        const cleanedWord = word.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

            if (wordsArray.includes(cleanedWord)) {

                    const sensitiveWord = wordsArray.indexOf(cleanedWord);
                    const censorship =  Array(wordsArray[sensitiveWord].length + 1).join("*")
                    const censuredWord = word.replace(`${wordsArray[sensitiveWord]}`, `${censorship}`);
                    redactedText.push(censuredWord);
            } else {
                redactedText.push(word);
            };
                    
        
    };

    console.log(`Here is your redacted text:\n${redactedText.join(` `)}`);

};


