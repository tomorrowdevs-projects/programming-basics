const fs = require('fs');
const file = process.argv.slice(2)[0];
const isLetter = (character) => {
    return character && character.length === 1 && character.toLowerCase() !== character.toUpperCase();
};

let charList = [];
let charOccurances = {};

if (arguments.length == 0){
    throw "You have to specify a file!";
}

function countOccurrences(charList){

    if (charList.length == 0){
        return {};
    }  
    
    charOccurances[charList[0].toLowerCase()]++;    

    return {
        ...charOccurances,
        ...countOccurrences(charList.slice(1))
    }  
    
    
}

fs.promises.readFile(file, "utf-8")
.then((content) => {
    for(let i = 0; i < content.length; i++){
        if (isLetter(content[i])){
        charList.push(content[i].toLowerCase());
        charOccurances[content[i].toLowerCase()] = 0;
        }
    }
    console.log(countOccurrences(charList));
})
.catch((err) => {
    console.log(err);
});
