// const prompt = require("prompt-sync")({ sigint: true}) ;

function findCharacterFromAsciiTableInterval( character, start, end ){
    for (let i = start; i <= end; i++) {
        if( character === String.fromCharCode(i) ){
            return true;
        }
    }

    return false;
}

function verifyPassword( password ){

    const passwordLength = password.length;

    let atLeastUppercaseLetter = false;
    let atLeastLowercaseLetter = false;
    let atLeastNumber = false;

    if ( passwordLength < 8 ){
        return false;
    }

    for (let i = 0; i < password.length; i++) {
        const character = password[i];
        
        if ( findCharacterFromAsciiTableInterval( character, 65, 90 ) ){
            atLeastUppercaseLetter = true;
            continue;
        }

        if ( findCharacterFromAsciiTableInterval( character, 97, 122 ) ){
            atLeastLowercaseLetter = true;
            continue;
        }

        if ( findCharacterFromAsciiTableInterval( character, 48, 57 ) ){
            atLeastNumber = true;
        }
    }

    if( atLeastUppercaseLetter === false || atLeastLowercaseLetter === false || atLeastNumber === false ){
        return false;
    }

    return true;
}

function init(){
    const askedPassword = prompt( 'Enter the password to verify.' );

    if( verifyPassword( askedPassword ) ){
        console.log( 'Your password is good.' );
    } else {
        console.log( 'Your password is bad.' );
    }
    return;
}
init();