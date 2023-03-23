// const prompt = require("prompt-sync")({ sigint: true}) ;

function playFizzBuzz(){
    for (let i = 1; i <= 100; i++) {
        let phrase = i;

        const divisbleBy3 = i % 3 == 0 ? true: false;
        const divisbleBy5 = i % 5 == 0 ? true: false;

        if ( divisbleBy3 ){
            phrase = 'fizz';
        }

        if ( divisbleBy5 ){
            phrase = 'buzz';
        }

        if ( divisbleBy3 && divisbleBy5 ){
            phrase = 'fizz and buzz';
        }

        console.log( phrase );
    }

    return;
    
}

function init(){
    playFizzBuzz();
    return;
}

init();