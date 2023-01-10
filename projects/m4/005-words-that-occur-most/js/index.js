// m4-005-words-that-occur-most


//package
const fs = require('fs').promises;

const file = 'input.txt'

// function promise to open the file
const letterFrequencies = file => {
    return data = fs.readFile(file, {encoding:'utf-8'})
        .then((data) => {
            data = data.toLocaleLowerCase() //to cancel all the white spaces
            data = data.split(/\W+/) //split everytime there is any non-word character
            data.pop()
            return counter(data)})
        .catch (() => {console.error(`this file does not exixt`) & reject()});
}

const array = letterFrequencies(file)
    .then((result) => {console.log(result)})
    .catch(() => console.error(`an error occured`))


//function to count words (potente! Da approfondire)
const counter = word => {
    return word.reduce((total, word) => {
        if (total[word]) {
            total[word]++;
        } else {
            total[word] = 1;
        }
        return total;
    },{}); 
  };