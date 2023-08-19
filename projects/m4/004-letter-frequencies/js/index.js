const fs = require ('fs')

function letterFrequencies(file){
    const alphabet = {
        "a": 0,
        "b": 0,
        "c": 0,
        "d": 0,
        "e": 0,
        "f": 0,
        "g": 0,
        "h": 0,
        "i": 0,
        "j": 0,
        "k": 0,
        "l": 0,
        "m": 0,
        "n": 0,
        "o": 0,
        "p": 0,
        "q": 0,
        "r": 0,
        "s": 0,
        "t": 0,
        "u": 0,
        "v": 0,
        "w": 0,
        "x": 0,
        "y": 0,
        "z": 0
      }
      const array = [
        ".",
        ",",
        "!",
        "?",
        "-",
        "'",
        "\"",
        ":",
        ";",
        "(",
        ")"
      ]
      const arrayNumber = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
      ]
    fs.promises.readFile(file,'utf-8')
    .then(data => {
        for (let i = 0; i<data.length;i++){
            if(!array.includes(data[i]) && !arrayNumber.includes(data[i]) && data[i] != ' ' ){
                const toLower = data[i].toLowerCase()
                alphabet[toLower] += 1
                
            }
        }
        console.log(alphabet)
    }).catch(error => {
        console.log(error)
    })


}


const file1 = "file1.txt"
letterFrequencies(file1)