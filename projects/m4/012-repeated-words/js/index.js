//012

//packages
const fs = require('fs').promises;

const file = 'input.txt'

//function to read the content of the file
const readFile = file => {
    return data = fs.readFile(file, {encoding:'utf-8'})
    .then((data) => {
        rowData = data.split('\n')
        return  console.log(checkRepeatedWords(rowData))  })

    .catch (() => {console.error(`this file does not exixt`) /*& reject()*/});
}

//function to check repeated words in a sentece, input is a array of sentences
const checkRepeatedWords = sentences => {

    const output = []

     for(let s=0; s < sentences.length; s++) {

        const sentenceFormatted1 = sentences[s].replaceAll(/[^a-zA-Z0-9 ]/g,'')
        const words1 = sentenceFormatted1.split(' ')

        if (s < sentences.length-1) {
            const sentenceFormatted2 = sentences[s+1].replaceAll(/[^a-zA-Z0-9 ]/g,'')
            const words2 = sentenceFormatted2.split(' ')
            const lastWord1 = words1[words1.length - 1];
            const firstWord2 = words2[0];

            if(lastWord1 === firstWord2) {
                output.push(`"${lastWord1}" is repeated on end of line ${s} and beginning of line ${s+1}`)
            }
        }

        for (let w = 0; w < words1.length; w++){
            if((words1[w] === words1[w-1])){
                output.push(`"${words1[w]}" is repeated at line: ${s+1}`)
            }       
        }   
    } 
    return output.join('\n')
}

readFile(file)