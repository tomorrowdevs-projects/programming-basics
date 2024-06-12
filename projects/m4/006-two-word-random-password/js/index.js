//006-m4-two-word-random-password

//package
const fs = require('fs').promises;

const file = 'input.txt'

// function promise to open the file
const pswConcatenation = file => {
    return data = fs.readFile(file, {encoding:'utf-8'})
        .then((data) => {
            data = data.split(/\W+/) //split everytime there is any non-word character

            if(data[data.length-1]===''){data.pop()}
            return randomWords(data,2)})
        .catch (() => {console.error(`this file does not exixt`) & reject()});
}

pswConcatenation(file)
    .then((result) => {console.log(result)})
    .catch(() => console.error(`an error occured`))

//function to randomly chouse 2 words of a text
const randomWords = (arrayWords, numberOfWords) => {

    let psw = ''
    let randomIndex = 0
    let pswLength = psw.length

    while(!((pswLength>=8) && (pswLength<=10))){
        psw = ''
        for (n=1;n<=numberOfWords;n++){
            randomIndex = Math.floor(Math.random() * arrayWords.length)
            arrayWords[randomIndex] = arrayWords[randomIndex].replace(arrayWords[randomIndex][0],arrayWords[randomIndex][0].toLocaleUpperCase())
            psw += arrayWords[randomIndex]
        }
        pswLength = psw.length
    }
    return psw
}




