const fs = require(`fs`);
const prompt =  require(`prompt-sync`)();
const readFile =  require(`./file_read`);

readFile(getFileName())
.then((data) => getTextArray(data))
.then((textArray) => checkText(textArray))
.then((errors) => showTextErrors(errors))
.catch((err) => console.log(err));

function getFileName() {
    return prompt(`Please, enter the name of the file you'd like to correct: `)
};


const getTextArray = text => {
    const splitText = text.replace(/(?:\r\n|\r|\n)/g, '').split(`.`);
    const textArray = [];
    splitText.forEach(string => textArray.push(string.split(` `)));

    return textArray;
};


const checkText = textArray => {

    const linesWithErrors = [];
    const textArrayObj = {
        flatted: textArray.flat(),
        nested: textArray,
    };

    for (i = 0; i < textArrayObj.flatted.length; i++) {
            const tempWord = textArrayObj.flatted[i].toString().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
            const nextWord = String(textArrayObj.flatted[i + 1]).toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
        
            if (tempWord == nextWord) { 
            const errorLine = textArrayObj.nested.find(line => line.includes(textArrayObj.flatted[i]));
            linesWithErrors.push(errorLine.join(` `));
            };
    };

    return linesWithErrors;
};


const showTextErrors = errorsArray => {

    if (errorsArray.length <= 0) console.log(`There are no repeated words in your text!`);
    else {
        console.log(`The line with errors in your text are:\n${errorsArray.join(`\n`)}`)
    };

};

