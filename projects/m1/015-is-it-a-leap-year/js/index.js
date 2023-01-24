function askYear(){
    const askedYear = parseInt( prompt( 'Enter the year you want to know if it is a leap year.', 'Example: 1986' ) );

    if ( ! isNaN( askedYear ) && askedYear > 0 ){
        return askedYear;
    }

    console.log( 'Please enter a value greater than or equal to 1.' );
    return askYear();
}

function isLeapYear( value ){

    if ( value % 400 === 0){
        return true;
    }

    if ( value % 100 !== 0 && value % 4 === 0 ){
        return true;
    }

    return false;

}


function init(){

    const year = askYear();
    if ( isLeapYear( year ) ){
        console.log( 'The entered year is a leap year.' );
    } else {
        console.log( 'The entered year isn\'t a leap year.' );
    }

    return;
}


init();