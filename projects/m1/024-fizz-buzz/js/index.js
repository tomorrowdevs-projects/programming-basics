function playFizzBuzz(){
    let phrases = '';

    const length = 100;

    for (let i = 1; i <= length; i++) {
        let phrase = i;

        if ( i % 3 === 0 ){
            phrase = 'fizz';
        } else if ( i % 5 === 0){
            phrase = 'buzz';
        } else if ( i % 3 === 0 && i % 5 === 0){
            phrase = 'fizz and buzz';

        }

        phrases += i === length ? phrase : phrase + '\n';
    }

    return phrases;
}

function init(){
    console.log( playFizzBuzz() );
    return;
}
init();