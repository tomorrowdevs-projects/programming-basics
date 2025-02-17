const fs = require("fs/promises")

const getFiles = async (text, sensitive) => {
    const getText = await fs.readFile(text, "utf-8")
    const getSensitive = await fs.readFile(sensitive, "utf-8")

    const getTextArray = getText.split(" ")
    const getSensitiveArray = new Set(getSensitive.split("\n"));
    const newText = []
    for (let word of getTextArray) {
       
        if (getSensitiveArray.has(word)) {
            word = "*".repeat(word.length);
        }
        newText.push(word);
    }
    console.log(newText.join(" "))
}



getFiles("../text.txt", "../sensitivewords.txt")