const duration_types_seconds = {
    'days':     86400,
    'hours':    3600,
    'minutes':  60,
    'seconds':  1
};

let total_duration = 0;
const duration_types_seconds_size = Object.keys(duration_types_seconds).length; 
let for_counter = 0;

for (const duration_type_seconds in duration_types_seconds) {

    let duration_in_seconds = calculate_duration_seconds( duration_type_seconds, duration_types_seconds ) ;
    
    total_duration += duration_in_seconds;

    if( for_counter === (duration_types_seconds_size - 1) ) {
        console.log( 'The total duration in seconds is: ' + total_duration ) ;
    }
    
    for_counter++;
}

function calculate_duration_seconds( type, types ){
    let ask_duration_value = prompt( 'How many ' + type + ' do you want to calculate ', 'Example: 20' );
    ask_duration_value = parseInt( ask_duration_value ) ;

    if( ! isNaN( ask_duration_value ) && ask_duration_value >= 0 ){
        return ask_duration_value * types[type];
    }

    console.log( 'Please enter a valid integer value greater or equal to 0.' ) ;
    return calculate_duration_seconds( type, types );
}