function generateRandomNumber( min, max ) {
    return Math.floor ( Math.random()*( max - min + 1 ) ) + min;
}

function generatePassword(){
    const passwordLength = generateRandomNumber( 7, 10 );
    let password = '';

    for (let i = 0; i < passwordLength; i++) {
        password += String.fromCharCode( generateRandomNumber( 33, 126 ) );
    }

    return password;
}

function init(){
    console.log( generatePassword() );
    return;
}
init();