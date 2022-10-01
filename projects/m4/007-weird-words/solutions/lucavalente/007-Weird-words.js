const fs = require('fs');
const file = process.argv.slice(2)[0];
const isLetter = (character) => {
    return character && character.length === 1 && character.toLowerCase() !== character.toUpperCase();
};

let charList = [];
let correctWords = [];
let weirdWords = [];

if (arguments.length == 0){
    throw "You have to specify a file!";
}

function ruleCheck(wordList){
    wordList.forEach(word => {
        for(let i = 0; i < word.length-2; i++){
            if ((word[i] == "c" && word[i+1] == "i" && word[i+2] == "e")){
                if (!weirdWords.includes(word)){
                    weirdWords.push(word);
                }                
            }

            if ((word[i] != "c" && word[i+1] == "i" && word[i+2] == "e") || (word[i] == "c" && word[i+1] == "e" && word[i+2] == "i")){
                if (!correctWords.includes(word)){
                    correctWords.push(word);
                }                
            }
        }
    });
}

fs.promises.readFile(file, "utf-8")
.then((content) => {

    for(let i = 0; i < content.length; i++){
        if (isLetter(content[i])){
            charList.push(content[i].toLowerCase());        
        }else{
            charList.push(" ");          
        }
    }

    temp = charList.join("");
    temp = temp.split(" ");  
    
    ruleCheck(temp)

    console.log("Correct words: ", correctWords, "\n", "Weird words: ", weirdWords);
})
.catch((err) => {
    console.log(err);
});