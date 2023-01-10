const prompt = require("prompt-sync")({ sigint: true});

function print_note_frequency( note ){


    let frequency = 0;

    if ( find_frequency( note ) ){
        frequency = find_frequency( note );
    }

    console.log( 'The frequency of the note ' + note + ' is equal to ' + frequency + ' Hz');
}

function find_frequency( note ){
    const starting_notes_frequencies = {
        'C4': 261.63,
        'D4': 293.66,
        'E4': 329.63,
        'F4': 349.23,
        'G4': 392.00,
        'A4': 440.00,
        'B4': 493.88
    };

    const letter_note = note[0];
    const number_note = note[1];

    for (const starting_note in starting_notes_frequencies) {

        if ( note === starting_note ){
            const frequency = starting_notes_frequencies[starting_note];
            return frequency;
        } else if ( letter_note === starting_note[0] ){
            const frequency = starting_notes_frequencies[letter_note + '4'] / Math.pow( 2, ( 4 - number_note ) ) ;
            return frequency.toFixed(2);
        }
        

    }

    return false;
}

function ask_user_note(){
    let asked_note = prompt( 'Which note, from C0 to B8, do you want to know the frequency of? ' );
    asked_note = format_value( asked_note );

    if ( check_valid_values( asked_note ) ){
        return asked_note;
    }

    console.log( 'Please eneter a valid note from C0 to B8.' );
    return false;
}


function format_value( value ){
    value = value.trim();
    value = value[0].toUpperCase() + value[1];
    
    return value;
}

function check_valid_values( value ){

    const valid_letters = 'CDEFGAB';
    const valid_numbers = '012345678';

    for ( i = 0; i < valid_letters.length; i++ ){
        for ( j = 0; j < valid_numbers.length; j++ ){

            if ( valid_letters[i] + valid_numbers[j] === value ){
                return true;
            }
        }
    }

    return false;
}

print_note_frequency( ask_user_note() );