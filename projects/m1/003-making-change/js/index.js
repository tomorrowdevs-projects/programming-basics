const coins_types_in_cents = {
    'toonies':  200,
    'loonies':  100,
    'quarters': 25,
    'dimes':    10,
    'nickels':  2,
    'pennies':  1
};

function insert_change_amount(){
    let question_change_amount = prompt( 'How much amount of cash need to be changed? ', 'Example: 3.45' ) ;
    question_change_amount = parseInt( question_change_amount * 100);

    if ( ! isNaN(question_change_amount) && question_change_amount > 0 ){
        return question_change_amount;
    }

    console.log( 'Please enter a valid positive integer value.' );
    return insert_change_amount();
}

function calculate_coins_quantity( change_amount, coins_type ){
    if( change_amount === 0 ){
        console.log( 'The change amount is 0' );
    } else {
        for (const coin_type in coins_type) {

            let coin_quantity = 0;

            if( change_amount >= coins_type[coin_type] ){

                if( coin_type !== 'pennies' ){
                    coin_quantity = Math.floor( change_amount / coins_type[coin_type] );
                    change_amount = change_amount % coins_type[coin_type] ;
                } else {
                    coin_quantity = change_amount;
                }
                
            }

            print_coin_quantity( coin_type, coin_quantity );
        }
    }

    return;
}

function print_coin_quantity( type, quantity ){
    console.log( 'Number of ' + type + ': ' + quantity ) ;
    return;
}

calculate_coins_quantity( insert_change_amount(), coins_types_in_cents);