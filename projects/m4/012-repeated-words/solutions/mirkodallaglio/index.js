// Include fs module
const fs = require('fs').promises;

//I read the contents of the file asynchronously
async function readText (file, cod='utf-8') {
    return fs.readFile(file, cod, (err,data) => {
        if (err) throw err;  
        return data;
    });
};

//searches for repeated words within a string by analyzing line by line
//the output is an array [ [word, repeated number of times, line] , [etc ...] ]
function lookMultipleWord (textString) {
    let result = [];
    const numRepeat = 2;

    //I transform the text into an array, each element is a line of the text
    const textToLineArray = textString.split(/\r?\n|\r|\n/g);
    //loop all lines
    textToLineArray.forEach((line, index) => {
        //divide into single words
        const lineToWord = line.replace(/[^\w\s\']|_/g, '').split(/\s+/);
        const tempResult = [];
        //loop all word
        lineToWord.forEach((word, idx) => {
            //if it is repeated twice, save it in tempResult, if it is repeated several times, increase its counter
            if (word === lineToWord[idx+1] && !tempResult.includes(word))
                tempResult.push(word,2,index+1)
            else if (word === lineToWord[idx+1]) {
                const indexWord = tempResult.indexOf(word);
                tempResult[indexWord+1] += 1
            }
        })
        //if that line has words repeated then I save it in result
        if (tempResult.length !== 0) result.push(tempResult)
    })
    return result
};

//I display the result and transform it into a string
function showResult (arr) {
    let result = '';
    arr.forEach(line => {
        for (let i=0; i < line.length; i+=3) {
            result += `\nLine ${line[i+2]}: The word "${line[i]}" is repeated ${line[i+1]} times\n`
        }
    })
    return result
};

//when the file is loaded it will be analyzed and shown the result
readText('Helo.txt').then(content => {
   const result = lookMultipleWord(content);
   console.log(showResult(result));
}).catch(error => console.log(error))
