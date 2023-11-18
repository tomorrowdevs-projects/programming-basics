const fs = require("fs/promises")


const readFile = async (path) => {
    const getFile = await fs.readFile(path, "utf-8")
    const toArray = getFile.split("\n")

    for (phrase of toArray){
        const phraseToArray = phrase.split(" ")
        for (let i = 0; i<phraseToArray.length;i++){
            if (phraseToArray[i] === phraseToArray[i-1]){
                console.log(`the word ${phraseToArray[i]} is duplicate on this: ${phrase}`)
            }
        }
    }
}


readFile("../text.txt")