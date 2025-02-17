// 007

//packages
const fs = require('fs').promises;

//file
const file = 'input.txt'

//function to read the file
const readFile = file => {

    return fs.readFile(file, {encoding: 'utf8'})
        .then((data) => {

            const singleWordsArray = data.replaceAll(/[\r]/g,'').split('\n')
            return console.log(checkWierdWords(singleWordsArray))
        })
        .catch((error) => {

            if(error.code === 'ENOENT'){
                console.error(`${file} file does not exist`)
            } else {
                console.error(`something went wrong:`, error)
            }
        })
}

readFile(file)


//function that check wierd words and return two list
const checkWierdWords = arrayOfWords => {

    const lisWords = {'list Rule': [],'list No Rule': []}
    const listRule = []
    const listNoRule = []

    let regxIE = /ie/i //rule
    let regxEI = /[^c]ei/i //no rule
    let regxCEI = /cei/i //rule

    arrayOfWords.forEach(word => {

        //alternative could be made with word.includes('ei')
        if ((regxEI.test(word))){
            listNoRule.push(word)  
        }else {
            listRule.push(word)
        }      
    });
    lisWords['list Rule'] = listRule
    lisWords['list No Rule'] = listNoRule

    return lisWords
}





