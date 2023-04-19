function playFizzBuzz( numberPlayed ){

        if ( numberPlayed % 3 === 0 && numberPlayed % 5 === 0 ){
            return 'fizz and buzz';
        } else if ( numberPlayed % 3 === 0 ){
            return 'fizz';
        } else if ( numberPlayed % 5 === 0 ){
            return 'buzz';
        } else {
            return numberPlayed;
        }

}

function init(){
    for (let i = 1; i <= 100; i++) {
        console.log( playFizzBuzz( i ) );
    }

    return;
}
init();

module.exports = { playFizzBuzz } // For CommonJS environment