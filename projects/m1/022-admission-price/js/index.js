// const prompt = require("prompt-sync")({sigint: true});
// Since it doesn't exist a way to have a multiline prompt in Javascript like in Python, we simulate the new line using the space, then the user can write all the ages separated by a space, and finish insert a space alone after the last age.

function askAges(){
    const ages = prompt( "Please enter members group ages, thanks. You can enter the ages one after the other separating them with a single space.", 'Example: 18 23 2 41 78 ' );
    return ages.split( ' ' );
}

function setPrice( ages ){
    let price = 23;

    switch ( true ) {
        case ( ages <= 2 ):
            price = 0;
            break;

        case ( ages >= 3 && ages <= 12 ):
            price = 14;
            break;

        case ( ages >= 65 ):
            price = 18;
            break;
    }

    return price;
}

function processAges( ages ){

    let totalPrice = 0;

    for (let i = 0; i < ages.length; i++) {

        const age = parseInt( ages[i] );

        if ( ! Number.isInteger( age ) || age < 0 ){
            console.log( 'You have entered one or more age or space in a wrong format. Closing the program...');
            return false;
        }

        totalPrice += setPrice( age );
    }

    return totalPrice;
}

function payment_message( price ){
    console.log( 'The admission cost for the group is $ ' + price.toFixed(2) );
}

function init(){
    const askedAges = askAges();  
    const priceAmount = processAges( askedAges );

    if ( priceAmount ){
        payment_message( priceAmount );
    }

    return;
}

init();