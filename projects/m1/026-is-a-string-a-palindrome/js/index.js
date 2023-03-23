const prompt = require("prompt-sync")({ sigint: true}) ;

function isPalindrome( text ){

    const textLength = text.length;

    for (let i = 0; i < Math.floor(textLength / 2); i++) {

        const character = text[i];
        const lastCharacter = textLength - 1;

        if ( character !== text[lastCharacter - i] ){
            return false;
        }

    }

    return true;
}

function init(){
    const askedText = prompt( 'Enter a text.', 'Example: Lorem ipsum dolor sit amet' );
    if ( isPalindrome( askedText ) ){
        console.log( 'The entered text is a palindrome.' )
    } else {
        console.log( 'The entered text isn\'t a palindrome.' );
    }

    return;
}

init();