const prompt = require("prompt-sync")({ sigint: true});

function ask_user_loaves(){
    let asked_loaves = prompt( 'Hi, please insert how many loaves of bread you bought. ', 'Example: 34' );

    asked_loaves = parseInt( asked_loaves );

    if( ! isNaN( asked_loaves ) && asked_loaves > 0 ){
        return asked_loaves ;
    }

    console.log( 'Please enter a valid integer value greater or equal to 0.' ) ;

    return ask_user_loaves();
}

function parse_2_decimal_places( value ){
    return value.toFixed( 2 );
}


function count_digits( digit_value ){
    let total = 0;
    for (let i = 0; i < digit_value.length; i++) {
        total ++;
    }

    return total;
}

function find_digits_difference( current_value, max_value ){
    if( current_value < max_value ) {

        space_count = max_value - current_value;
        spaces = '';

        for (let i = 0; i < space_count; i++) {
            spaces += ' ';
        }

        return spaces;
    }

    return '';
}

function print_loaves_price( loaves ){
    const loave_price_euro = 3.49;
    const discount_percentage = 60;
    let prices = [];

    prices['total_price'] = parse_2_decimal_places( loave_price_euro * loaves );
    prices['discount_amount'] = parse_2_decimal_places( ( prices['total_price'] * discount_percentage ) / 100 );
    prices['discounted_total_price'] = parse_2_decimal_places( prices['total_price'] - prices['discount_amount'] );

    let max_digits =  count_digits( prices['total_price'] );

    for (const key in prices) {

        let price = prices[key];
        let message = '';

        if ( key === 'total_price' ){
            message = 'Total price';
        } else {
            let digits_difference = find_digits_difference( count_digits( price ), max_digits );

            if ( key === 'discount_amount' ){
                message = 'Discount amount';
            } else {
                message = 'Discounted price';
            }

            price = digits_difference + String( price );

        }

        console.log(  price + ' € - ' + message );
    }
}

print_loaves_price( ask_user_loaves() );