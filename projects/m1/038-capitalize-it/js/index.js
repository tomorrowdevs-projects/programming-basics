// const prompt = require("prompt-sync")({ sigint: true}) ;

function capitalizeText( text ){
    let uppercase = true;

    const endPhraseDelimiter = ['.', '!', '?'];
    const iDelimiter = [' ', '.', '?', '!', '\''];

    let editedText = '';

    for (let i = 0; i < text.length; i++) {
        const character = text[i];

        if ( character === 'i' && i > 0 && i < text.length - 1 ){
            if ( text[i - 1] === ' ' && iDelimiter.includes( text[i + 1] ) ){
                editedText += character.toUpperCase();
                continue;
            }
        }

        if ( endPhraseDelimiter.includes( character ) ){
            editedText += character;
            uppercase = true;
            continue;
        }

        if( uppercase === true && character !== ' ' ){
            editedText += character.toUpperCase();
            uppercase = false;
            continue;
        }

        editedText += character;
    }

    return editedText;
}


function init(){
    const askedText = prompt( 'Enter a text to capitalize correctly.' );
    console.log( capitalizeText( askedText ) );
    return;
}
init();
