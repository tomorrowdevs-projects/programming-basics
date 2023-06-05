const prompt = require("prompt-sync")({ sigint: true});

function print_month_days(){

    const all_months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const months_of_30_days = ['April', 'June', 'September', 'November'];
    const months_of_28_29_days = 'February';

    const month = ask_user_month_name( all_months );

    days = '31';

    if ( month === months_of_28_29_days ){
        days = '28 or 29';
    } else {
        for (let i = 0; i < months_of_30_days.length; i++) {

            if ( month === months_of_30_days[i] ){
                days = '30';
            }
        }
    }

    console.log( 'This month has ' +  days + ' days' );

}


function ask_user_month_name( months_list ){
    asked_month = prompt( 'Which month do you want to know days number? ', 'Example: May' );

    asked_month = capitalize_month_name( asked_month );

    for (let i = 0; i < months_list.length; i++) {
        if ( asked_month === months_list[i] ){
            return asked_month;
        }
    }

    console.log( 'Please enter a valid month name. ');
    return ask_user_month_name( months_list );
}

function capitalize_month_name( name ){

    name = name.trim();
    capitalized_name = '';

    for (let i = 0; i < name.length; i++) {

        if ( i === 0){
            capitalized_name += name[i].toUpperCase();
        } else {
            capitalized_name += name[i].toLowerCase();
        }

    }

    return capitalized_name;
}




print_month_days();