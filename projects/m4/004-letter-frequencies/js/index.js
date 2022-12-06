//m4-004-letter-frequencies

//package
const fs = require('fs').promises;

const file = 'input.txt'

// function promise to open the file
const letterFrequencies = file => {
    return data = fs.readFile(file, {encoding:'utf-8'})
        .then((data) => {
            data = data.toLocaleLowerCase().replaceAll(/\s+/g,'') //to cancel all the white spaces
            return counter(data)})
        .catch (() => {console.error(`this file does not exixt`) & reject()});
}

const array = letterFrequencies(file)
    .then((result) => {console.log(result)})
    .catch(() => console.error(`an error occured`))


//function to count letters (potente! Da approfondire)
const counter = string => {
    return string.split('').reduce((total, letter) => {
        if (total[letter]) {
            total[letter]++;
        } else {
            total[letter] = 1;
        }
        return total;
    },{}); //studiare questa riga!
  };


