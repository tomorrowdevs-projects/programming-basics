const prompt = require("prompt-sync")({ sigint: true});

function ask_user_integer(){
    let question_four_digit = prompt( 'Hi, please insert the four-digit integer of which you want to know the sum of the individual digits. ', 'Example: 3141' );

    question_four_digit = parseInt( question_four_digit );

    if( ! isNaN( question_four_digit ) && question_four_digit >= 1000 && question_four_digit <= 9999 ){
        return question_four_digit ;
    }

    console.log( 'Please enter a valid integer value greater or equal to 0.' ) ;

    return ask_user_integer();
}

function print_four_digit_sum( four_digit ){

    let total_sum = 0;
    let message = '';
 
    four_digit = String( four_digit );

    for (let i = 0; i < four_digit.length; i++) {

        if ( i > 0 ) {
            message += '+';
        }

        message += four_digit[i];

        total_sum += Number( four_digit[i] ) ;

        if ( i === (four_digit.length - 1) ) { // last one
            message += '=' + total_sum;
            console.log( message );
        }
    }

    return;
}

print_four_digit_sum( ask_user_integer() );