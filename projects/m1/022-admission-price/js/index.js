const prompt = require("prompt-sync")({sigint: true});

function askAges( ages = [] ){
    const askedAge = prompt( 'Enter member\'s group age.' );
    
    if( askedAge.trim() === '' ){
        return ages;
    }

    ages.push( askedAge );
    return askAges( ages );
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
            console.log( 'You have entered one or more age in a wrong format. Closing the program...');
            return false;
        }

        totalPrice += setPrice( age );
    }

    return totalPrice;
}

function paymentMessage( price ){
    console.log( 'The admission cost for the group is $ ' + price.toFixed(2) );
}

function init(){
    console.log( 'Please enter members group ages, one by one (if you want to close the program leave the field blank).' );
    const askedAges = askAges();  
    const priceAmount = processAges( askedAges );

    if ( priceAmount ){
        paymentMessage( priceAmount );
    }

    return;
}

init();