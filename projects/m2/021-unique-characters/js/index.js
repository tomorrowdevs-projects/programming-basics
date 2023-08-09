// const prompt = require("prompt-sync")({ sigint: true}) ;

function calculateUniqueCharacters(text){
    const uniqueCharactersDictionary = new Set();

    for (let i = 0; i < text.length; i++) {
        const character = text.charAt(i);

        uniqueCharactersDictionary.add(character);
    }

    const uniqueCharactersCount = uniqueCharactersDictionary.size;

    return uniqueCharactersCount;
}

function init(){
    const askedText = prompt('Enter a text.');
    const uniqueCharactersCount = calculateUniqueCharacters(askedText);

    console.log(uniqueCharactersCount);

    return;
} 
init();