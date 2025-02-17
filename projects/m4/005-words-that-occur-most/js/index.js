const fs = require("fs")

function countWords(file){
    const punctuation = /[.,!?;]/g;
    const count = {}
    fs.promises.readFile(file,"utf-8")
    .then(data => {
        data = data.replace(punctuation, "").toLowerCase()
        const wordsToLine = data.split(" ")
        for(let i = 0; i < wordsToLine.length; i++){
            if (!count.hasOwnProperty(wordsToLine[i])){
                count[wordsToLine[i]] = 1
            }else{
                count[wordsToLine[i]] += 1
            }   
        }
        const value = Object.values(count)
        const maxValue = Math.max(... value)
        const maxKey = Object.keys(count).find(key => count[key] === maxValue)
        console.log(`The most used word "${maxKey}" with ${maxValue} occurrences`)
    })
    .catch(error => {
        console.log(error)
    })

}


const file1 = "file1.txt"

countWords(file1)