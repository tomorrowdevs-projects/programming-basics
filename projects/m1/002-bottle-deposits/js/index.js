function insert_container( starting_session = true, current_total_refund = 0 ){

    let message = 'new_container';
    if( starting_session === true ) {
        message = 'hello';
    }

    let container = prompt( messages_service( message ), messages_service( 'example' ) );

    if ( container !== 'No' ) {
        let total_refund = calculate_total_refund( container, current_total_refund );
        console.log( messages_service( 'refound_amount' ) + total_refund );

        return insert_container( false, total_refund );
    } 

    console.log( messages_service( 'bye' ) );
    return ;
}

function verify_container_value( value ){
    if ( ! Number.isNaN( value ) ){
        return true;
    }

    console.log( messages_service( 'error' ) );
    return false ;
}

function calculate_refund( container ) {
    let deposit = 0 ;
    container = parseFloat( container );

    if( verify_container_value( container ) ){
        container = parseFloat( container )
        deposit = 0.10 ;

        if ( container === 0) {
            deposit = 0 ;
            console.log( messages_service( 'empty' ) )
        } else if( container > 1 ) {
            deposit = 0.25;
        }
    }

    return deposit;
}

function calculate_total_refund( container, current_total_refund = 0 ) {
    current_total_refund = parseFloat( current_total_refund );
    refund = calculate_refund( container ) ;

    return (current_total_refund + refund).toFixed(2);

}

function messages_service( message ){
    let output_message = '' ;

    switch ( message ) {
        case 'bye':
            output_message = 'Thank you, bye.';
        break;

        case 'hello':
            output_message = 'Hi, please insert the container and enter the quantity held by it in liters ';
            break;

        case 'empty':
            output_message = 'Please enter a non-empty value';
            break;

        case 'error':
            output_message = 'Please enter a valid value';
            break;

        case 'example':
            output_message = 'Example: 10';
            break;

        case 'new_container':
            output_message = 'If you have another container insert it and enter the quantity held by it in liters, otherwise type No ';
            break;

        case 'refound_amount':
            output_message = 'Your refund amount to ';
            break;

        default:
            break;
    }

    return output_message;
}

insert_container() ;