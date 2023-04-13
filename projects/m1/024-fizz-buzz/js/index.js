function playFizzBuzz(){
    let phrases = '';

    for (let i = 1; i <= 100; i++) {

        if ( i % 3 === 0 ){
            phrases += 'fizz' + '\n';
        } else if ( i % 5 === 0 ){
            phrases += 'buzz' + '\n';
        } else if ( i % 3 === 0 && i % 5 === 0 ){
            phrases += 'fizz and buzz' + '\n';
        } else {
            phrases += i + '\n';
        }

    }

    return phrases.replace( /\n$/, '' );
}

function init(){
    console.log( playFizzBuzz() );
    return;
}
init();