
//014
const { rejects } = require('assert');

//packages
const fs = require('fs').promises;

//files name
const file = 'input.txt'

//function to read the content of the file 
const readFile = file => {
    return fs.readFile(file, {encoding:'utf-8'})
        .then((data) => {
                        
            const regx = /\w*[a]\w*[e]\w*[i]\w*[o]\w*[u]\w*[y]\w*/gi
            const word = data.match(regx)
            return  console.log(`this are the words that contains all the wovels (aeiouy) in order:`) , console.log(word)})

        .catch ((error) => {
            if (error.code === 'ENOENT') {
                console.error(`${file} file does not exist`)
              } else {
                console.error(`something went wrong:`, error)
              }
            })
}

readFile(file)

