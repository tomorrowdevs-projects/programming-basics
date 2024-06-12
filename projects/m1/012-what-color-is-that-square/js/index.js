const prompt = require("prompt-sync")({ sigint: true});

function ask_user_chess_position(){
    let asked_chess_position = prompt( 'Please enter a chess board position ', 'Example: a1' );
    return asked_chess_position;
}

function find_starting_square_color( letter ){
    const black_columns_start = ['A','C','E','G'];
    const white_columns_start = ['B','D','F','H'];

    letter = letter.toUpperCase();

    if ( black_columns_start.includes( letter ) ){
        starting_square = 'black';
    } else if ( white_columns_start.includes( letter ) ){
        starting_square = 'white';
    } else {
        return;
    }

    return starting_square;
}

function odd_or_even( number ){
    let parity = 'odd';

    if ( ! isNaN ( number ) ) {
        if ( number % 2 === 0 ) {
            parity = 'even';
        }
    } else {
        return;
    }

    return parity;
}


function print_chess_position_color( position ){

    position = position.trim();
    let square_color = 'white';

    const starting_square_color = find_starting_square_color( position[0] );
    const number_parity = odd_or_even( position[1] );


    if( ( starting_square_color === 'black' && number_parity === 'odd' ) || ( starting_square_color === 'white' && number_parity === 'even' ) ){
        square_color = 'black';
    }
    /* I think a more concise way is to set 'odd' instead of 'black' and 'even' instead of 'white'
    in 'find_starting_square_color' function and compare 'starting_square_color' with 'number_parity',
    if they are equal the square color is black, otherwise is white */

    console.log('The entered square position color is ' + square_color );
    return;
}

print_chess_position_color( ask_user_chess_position() );