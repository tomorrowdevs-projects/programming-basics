const durations_types_in_seconds = {
    'days':     86400,
    'hours':    3600,
    'minutes':  60,
    'seconds':  1
};

function insert_seconds_amount(){
    let question_seconds_amount = prompt( 'How many seconds do you want to output in the form D:HH:MM:SS? ', 'Example: 20' );
    question_seconds_amount = parseInt( question_seconds_amount ) ;

    if ( ! isNaN(question_seconds_amount) && question_seconds_amount > 0 ){
        return question_seconds_amount;
    }

    console.log( 'Please enter a valid integer value greater or equal to 0.' ) ;
    return insert_seconds_amount();
}

/* To complete the task "determine what additional character needs to be included in the format specifier so that leading zeros are used instead of leading spaces when a number is formatted to a particular width", 
I found that only Firefox support string subsitions in a printf-like way: https://developer.mozilla.org/en-US/docs/Web/API/Console#using_string_substitutions,
Chrome and other browsers can substitute simple numeric values ( %d ) or string ( %s ), but only Firefox can use precision formatting ( %.2d ) like Python ( %02d ),
so I chose to detect the browsers different from Firefox and use padStart to achieve a similar result (it works also with Firefox but for exercise purpose I used both different ways).*/
function print_duration_quantity( container ) {

    let message = 'The duration in seconds is: '; 

    let numeric_values = ':%s';

    let precision_formatting = false;
    if ( navigator.userAgent.includes('Firefox') ) {
        numeric_values = ':%.2d';
        precision_formatting = true;
    }

    for (let i = 0; i < container.length; i++) {
 
        if( i > 0 ) {
            message += numeric_values ;

            if ( precision_formatting === false ) {
                container[i] = container[i].toString().padStart(2, '0');
            }
        } else {
            message += '%s' ;
        }
            
    }

    console.log( message, ... container ) ;

    return;
}

function calculate_seconds_amount( seconds_amount, durations_type ){
    if( seconds_amount === 0 ){
        console.log( 'The seconds amount is 0' );
    } else {

        let durations_container = [];

        for (const duration_type in durations_type) {

            let duration_quantity = 0;

            if( seconds_amount >= durations_type[duration_type] ){

                if( duration_type !== 'seconds' ){
                    duration_quantity = Math.floor( seconds_amount / durations_type[duration_type] );
                    seconds_amount = seconds_amount % durations_type[duration_type];
                } else {
                    duration_quantity = seconds_amount;
                }
                
            }

            durations_container.push( duration_quantity );

        }

        print_duration_quantity( durations_container );
    }

    return;
}

calculate_seconds_amount( insert_seconds_amount(), durations_types_in_seconds);