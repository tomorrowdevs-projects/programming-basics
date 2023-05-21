const prompt = require("prompt-sync")({ sigint: true});

function consonant_or_a_vowel(){

    const alphabet = generate_letters_list( 'abcdefghijklmnopqrstuvwxyz' );
    const vowels = generate_letters_list( 'aeiou' );
    const special_vowel = 'y';

    const letter = ask_user_letter( alphabet );

    let message = 'The letter is a consonant';

    if ( find_letter( letter, special_vowel ) ){
        message = 'Sometimes this letter is a vowel, sometimes is a consonant';
    } else if ( find_letter( letter, vowels ) ){
        message = 'The letter is a vowel';
    } else {
        message = 'The letter is a consonant';
    }

    console.log( message );
}


function find_letter( letter_searched, letters_list ){
    if ( Array.isArray( letters_list ) ){
        for (let i = 0; i < letters_list.length; i++) {
            if ( letter_searched === letters_list[i] ) {
                return true;
            }
        }
    } else {
        if ( letter_searched === letters_list ){
            return true;
        }
    }

    return false;
}

function ask_user_letter( alphabet ){
    const example = 'Example: a';
    
    let asked_letter = prompt( 'Which letter do you want to know if it\'s a consonant or a vowel? ', example );

    if ( asked_letter.length === 1 && find_letter( asked_letter, alphabet ) ){
        return asked_letter;
    }

    console.log( 'Please enter a single alphabet\'s letter', example);
    return ask_user_letter( alphabet );
}

function generate_letters_list( given_string ){
    let generated_array = [];
    for (let i = 0; i < given_string.length; i++) {
        const current_character = given_string[i];
        generated_array.push( current_character );
    }

    return generated_array;
}

consonant_or_a_vowel();