const prompt = require("prompt-sync")({ sigint: true});

function ask_user_years(){
    let asked_years = prompt( 'How many human years do you want to convert in dog years? ', 'Example: 5' );
    asked_years = parseInt( asked_years );
    if ( ! isNaN( asked_years ) && asked_years > 0 ){
        return asked_years;
    }

    console.log( 'Please enter a positive integer value' );
    return ask_user_years();
}

function print_dog_years( human_years ) {
    let converted_years = 0;

    for (let i = 0; i < human_years; i++) {
        if ( i <= 1 ){
            converted_years += 10.5;
        } else {
            converted_years += 4;
        }
    }

    console.log( 'The entered human years correponds to ' + converted_years + ' dog years' );

    return;
}

print_dog_years( ask_user_years() );