const fs = require("fs/promises")

function checkNumberOfWord(separator,array){
    return array.split(separator)
}

function aBookWithNoE(file) {
    const alphabet = {
        "A": 0,
        "B": 0,
        "C": 0,
        "D": 0,
        "E": 0,
        "F": 0,
        "G": 0,
        "H": 0,
        "I": 0,
        "J": 0,
        "K": 0,
        "L": 0,
        "M": 0,
        "N": 0,
        "O": 0,
        "P": 0,
        "Q": 0,
        "R": 0,
        "S": 0,
        "T": 0,
        "U": 0,
        "V": 0,
        "W": 0,
        "X": 0,
        "Y": 0,
        "Z": 0
    }
    fs.readFile(file, 'utf-8')
        .then(data => {
            let numberWords = data.replace(/\n/g, ' ')
            numberWords = checkNumberOfWord(" ", numberWords)
            data = checkNumberOfWord("\n",data)
            for (const word of data) {
                for (let char of word) {
                    char = char.toUpperCase()
                    if (alphabet.hasOwnProperty(char)) {
                        alphabet[char] += 1
                    }
                }
            }
            for ( const letter in alphabet){
                alphabet[letter] += ' => ' + ((alphabet[letter] / numberWords.length)*100).toFixed(2) + '%'
                
            }
            console.log(alphabet)
        })
        .catch(e => {
            console.log(e)
        })
}

const file1 = "file.txt"
aBookWithNoE(file1)