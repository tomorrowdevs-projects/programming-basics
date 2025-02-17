const prompt = require("prompt-sync")({ sigint: true}) ;

function multiplyCharacters( width, character ){

    let characters = '';
    for (let i = 0; i < width; i++) {
        characters += character;
    }
    
    return characters;
}

function centerString( s, w ){
    /**
     * @param {string} s The string to convert 
     * @param {number} w The width of the window in characters
     * @return {string} The centered string
     */

    const stringLength = s.length;

    if( stringLength >= w ){
        return s;
    } else {
        const leftSpaces = multiplyCharacters( (w - stringLength) / 2 , ' ' );
        return leftSpaces + s;
    }

}

function askWidth(){

    const askedWidth = prompt( 'Enter window\'s width.' );

    if( ! isNaN( askedWidth ) && askedWidth >= 0 ){
        return askedWidth;
    }

    console.log( 'The entered value isn\'t a positive integer value.' );
    return false;
}

function askStrings( strings = [] ){
    const askedString = prompt( 'Enter a text (if you want to close the program leave the field blank).' );
    
    if( askedString.trim() === '' ){
        return strings;
    }

    strings.push( askedString );
    return askStrings( strings );
}

function init(){
    const askedStrings = askStrings();

    if( askedStrings && askedStrings.length > 0 ){
        const askedWidth = askWidth();

        if( askedWidth ){
            console.log( multiplyCharacters( askedWidth, '-' ) );

            for (let i = 0; i < askedStrings.length; i++) {
                console.log( centerString( askedStrings[i], askedWidth ) );
            }
        }
    }

    console.log( 'Closing the program...' );
    return;
}
init();