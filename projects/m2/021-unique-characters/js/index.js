
let userInputString = prompt("enter the word and you will discover the unique characters", "!Hello World!*");

function uniqueCharactersSet(string){
    let checkCharacters = new Set(string);
    return checkCharacters.size;
}


let countCharacters = function (){
    let sizeCharacters = uniqueCharactersSet(userInputString);
    
    console.log(`the word ${userInputString } has ${sizeCharacters} unique characters`)
};

countCharacters();