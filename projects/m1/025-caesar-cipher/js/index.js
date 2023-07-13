// const prompt = require("prompt-sync")({ sigint: true}) ;

function generateCharactersList( characters, uppercase = false ){

    const charactersList = [];

    for (let i = 0; i < characters.length; i++) {
        
        let currentCharacter = characters[i];
        if( uppercase === true ){
            currentCharacter = currentCharacter.toUpperCase();
        }
        charactersList.push( currentCharacter );
    }

    return charactersList;
}


function moveIndex( index, shiftAmount, alphabetLength ){
  
    shiftAmount = shiftAmount % alphabetLength;

    const indexShift = index + shiftAmount < 0 ? alphabetLength + shiftAmount : shiftAmount ;

    return index + indexShift;
}

function cryptText( text, shiftAmount ){
    let cryptedText = '';

    const alphabet = generateCharactersList( 'abcdefghijklmnopqrstuvwxyz' );
    const uppercaseAlphabet = generateCharactersList( alphabet, true );

    for (let i = 0; i < text.length; i++) {

        let currentCharacter = text[i];

        if ( alphabet.includes( currentCharacter ) ){
            currentCharacter = alphabet[ moveIndex( alphabet.indexOf( currentCharacter ), shiftAmount, alphabet.length ) ];
        } else if ( uppercaseAlphabet.includes( currentCharacter ) ){
            currentCharacter = uppercaseAlphabet[ moveIndex( uppercaseAlphabet.indexOf( currentCharacter ), shiftAmount, uppercaseAlphabet.length ) ];
        }

        cryptedText += currentCharacter ;
    }

    return cryptedText;
}

function askShiftAmount(){

    const shiftAmount = parseInt( prompt( 'Enter the shift amount.', 'Example: 3') );

    if( ! isNaN ( shiftAmount ) ){
        return shiftAmount;
    } else {
        console.log( 'Please enter an integer number.' );
    }

    return askShiftAmount();
}

function init(){
    const askedText = prompt( 'Enter a text.', 'Example: Lorem ipsum dolor sit amet' );
    const askedShiftAmount = askShiftAmount();
    const cryptedText = cryptText( askedText, askedShiftAmount );

    console.log( cryptedText );

    return;
}

init();