// const prompt = require("prompt-sync")({sigint: true});

function verifyAge( age ){
    if ( isNaN( age ) || age < 0 ){
        console.log( 'Age in a wrong format. Closing the program...');
        return false;
    }

    return true;
}

function askAges(){

    const ages = [];
    let askedAge;

    while( askedAge !== '' ){

        askedAge = prompt( 'Enter member\'s group age.' );

        if( askedAge !== '' && verifyAge( askedAge ) ) {
            ages.push( askedAge );
        }

    }
    
    return ages;
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

        if ( ! verifyAge( age ) ){
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

    if ( priceAmount !== false ){
        paymentMessage( priceAmount );
    }

    return;
}

init();