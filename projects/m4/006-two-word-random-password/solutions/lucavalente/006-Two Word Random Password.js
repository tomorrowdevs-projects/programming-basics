const fs = require('fs');
const file = process.argv.slice(2)[0];
const isLetter = (character) => {
    return character && character.length === 1 && character.toLowerCase() !== character.toUpperCase();
};

let randomWord_1;
let randomWord_2;
let resultOfConcat;
let charList = [];
let wordList = [];

if (arguments.length == 0){
    throw "You have to specify a file!";
}

function checkLength(wordList){
    let count = 0;
    wordList.forEach(word => {
        if (word.length >= 4){
            count++;
        }
    });

    return count >= 2;
}

function generatePassword(wordList){

    if (wordList.length == 0 || !checkLength(wordList)){
        return "It is not possible to generate e password.";
    }

    randomWord_1 = wordList[Math.floor(Math.random() * wordList.length)];
    randomWord_2 = wordList[Math.floor(Math.random() * wordList.length)];

    randomWord_1 = randomWord_1[0].toUpperCase() + randomWord_1.slice(1);
    randomWord_2 = randomWord_2[0].toUpperCase() + randomWord_2.slice(1);

    resultOfConcat = randomWord_1 + randomWord_2;

    if (resultOfConcat.length >= 8 && resultOfConcat.length <= 10 && 
        randomWord_1.length >= 3 && randomWord_2.length >= 3 &&
        randomWord_1 != randomWord_2){
        return resultOfConcat;
    }else{
        return generatePassword(wordList);
    }
}

fs.promises.readFile(file, "utf-8")
.then((content) => {

    for(let i = 0; i < content.length; i++){
        if (content[i] != "\n"){
            charList.push(content[i].toLowerCase());        
        }
    }

    wordList = charList.join("");
    wordList = wordList.split(" ");

    console.log(generatePassword(wordList))
})
.catch((err) => {
    console.log(err);
});