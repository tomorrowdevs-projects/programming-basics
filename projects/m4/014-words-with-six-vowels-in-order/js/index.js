const fs = require("fs/promises")

const readFile = async (path) => {
    const vowels = ["a", "e", "i", "o", "u", "y"]
    try {
        const getFile = await fs.readFile(path, "utf-8")
        const getFileArray = getFile.split("\n")

        for (let word of getFileArray) {
            let arrayCheck = []
            for (let letter of word) {
                if (vowels.includes(letter)) {
                    arrayCheck.push(letter)
                }
            }
            if (arrayCheck.join("") === vowels.join("")) {
                console.log(word)
            }
            arrayCheck = []
        }
    } catch (error) {
        console.error("Error file not valid", error)
    }
}

readFile("../text.txt")