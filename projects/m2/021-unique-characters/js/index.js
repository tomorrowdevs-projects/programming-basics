// const prompt = require("prompt-sync")({ sigint: true}) ;

function calculateUniqueCharacters(text){
    let uniqueCharactersCount = 0;
    const uniqueCharactersDictionary = [];

    for (let i = 0; i < text.length; i++) {
        const character = text.charAt(i);

        if( ! uniqueCharactersDictionary.includes(character) ){        
            uniqueCharactersDictionary.push(character);
        } 
    }

    uniqueCharactersCount = uniqueCharactersDictionary.length;

    return uniqueCharactersCount;
}

function init(){
    const askedText = prompt('Enter a text.');
    const uniqueCharactersCount = calculateUniqueCharacters(askedText);

    console.log(uniqueCharactersCount);

    return;
} 
init();