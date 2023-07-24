// const prompt = require("prompt-sync")({ sigint: true}) ;

function pigLatin(text){
    if(typeof text === 'string' && text.length > 0){
        const vowels = ['a','e','i','o','u'];

        let consonantsBeforeVowel = '';
        for (let i = 0; i < text.length; i++) {
            const letter = text[i];

            if( ! vowels.includes( letter ) ){
                consonantsBeforeVowel += letter;
                
            } else {
                break;
            }
        }

        if( consonantsBeforeVowel === '' ){
            text += 'way';
        } else {
            text += consonantsBeforeVowel + 'ay';
            text = text.slice(consonantsBeforeVowel.length);
        }
    }

    return text;
}

function init(){
    const text = prompt('Enter a line of text.');
    console.log( pigLatin(text) );

    return;
} 
init();