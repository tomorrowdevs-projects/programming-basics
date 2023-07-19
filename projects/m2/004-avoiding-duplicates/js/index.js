// const prompt = require("prompt-sync")({ sigint: true}) ;

function askWords(){
    const askedWords = [];
    let askedWord = prompt( 'Enter a word.' );

    while ( askedWord !== '' ) {
        askedWords.push( askedWord );
        askedWord = prompt( 'Enter a word.' );
    }

    return askedWords;
}

function removeDuplicates( words ){
    const cleanedList = [];

    if( Array.isArray(words) && words.length > 1 ){
        for (let i = 0; i < words.length; i++) {
            const word = words[i];

            if( ! cleanedList.includes(word) ){
                cleanedList.push(word);
            }
        }
    }
    
    return cleanedList;
}

function init(){
    const askedWords = askWords();
    const cleanedList = removeDuplicates(askedWords);

    for (let i = 0; i < cleanedList.length; i++) {
        console.log( cleanedList[i] );
    }

    return;
}
init();