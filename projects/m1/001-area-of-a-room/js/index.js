const user_room_width = prompt( 'Please enter the width of the room in meters as floating-point numbers:', 'Example: 4.00' );
const user_room_height = prompt( 'And the height of the room in meters:', 'Example: 4.00' ); 

function room_area( room_width, room_height ) {
    room_width = parseFloat( room_width );
    room_height = parseFloat( room_height );

    if ( ! Number.isNaN( room_width ) && ! Number.isNaN( room_height ) ) {
        return room_width * room_height + ' meters' ;
    }

    return 'You entered one or more non-floating point values, please enter a valid value';
}

console.log ( room_area ( user_room_width, user_room_height ) );