
//014
const { rejects } = require('assert');

//packages
const fs = require('fs').promises;

//files name
const file = 'input.txt'

//function to read the content of the file 
const readFileFunction = file => {
    return fs.readFile(file, {encoding:'utf-8'})
        .then((data) => {
                        
            const regx = /\w*[a]\w*[e]\w*[i]\w*[o]\w*[u]\w*[y]\w*/gi
            const word = (data.match(regx)).join('\n')
            return  (`this are the words that contains all the wovels (aeiouy) in order:\n${word}`)})

        .catch ((error) => {
            if (error.code === 'ENOENT') {
                console.error(`${file} file does not exist`)
            } else {
                console.error(`something went wrong:`, error)
            }
            })
}

readFileFunction(file).then(value => console.log(value))

