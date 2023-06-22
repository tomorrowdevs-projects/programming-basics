function askDataConsumed( dataType = 'minutes' ){
    const messages = {
        'minutes': 'How many minutes have you used up this month?',
        'sms': 'And how many text messages?'
    };

    const askedValue = Number( prompt( messages[dataType], 'Example: 65' ) );

    if ( ! verifyDataConsumed( askedValue ) ){
        console.log( 'Please enter an integer greater than or equal to 0.' );
        return askDataConsumed( dataType );
    }

    return askedValue;
}


function verifyDataConsumed( value ){
    if ( ! isNaN( value ) && value >= 0 && value % 1 === 0){ // value % 1 === 0 --> integer     value % 1 !== 0 --> float
        return value;
    }

    return false;
}

function calculateAdditionalCost( additionalCost, dataConsumed ){
    const limit = 50;
    if( dataConsumed > limit ){
        return additionalCost * (dataConsumed - limit) ;
    }

    return false;
}

function parseTwoDecimals( value ){
    if ( isNaN(value) ){
        value = Number( value );
    }

    return value.toFixed(2);
}

function init(){
    let total = 0;
    let minuteAdditionalCost = 0;
    let smsAdditionalCost = 0;

    const startingCost = 15;                    // €
    const chargeFor911 = 0.44;                  // €
    const percentageTax = 5;                    // %
    const eachMinuteAdditionalCost = 0.25;      // €
    const eachSmsAdditionalCost = 0.15;         // €

    const minutesConsumed = askDataConsumed( 'minutes' ) ;
    const smsConsumed = askDataConsumed( 'sms' ) ;

    total = startingCost + chargeFor911;
    const taxes = (total * percentageTax) / 100;
    total += taxes;

    let message = `Base charge: € ${startingCost} \n`;

    if( minuteAdditionalCost = calculateAdditionalCost( eachMinuteAdditionalCost, minutesConsumed ) ){
        total += minuteAdditionalCost;
        message += `Additional minutes charge: € ${parseTwoDecimals( minuteAdditionalCost )} \n` ;
    }

    if( smsAdditionalCost = calculateAdditionalCost( eachSmsAdditionalCost, smsConsumed ) ){
        total += smsAdditionalCost;
        message += `Additional text messages charge: € ${parseTwoDecimals( smsAdditionalCost )} \n`;
    }

    message += `Additional charge for call 911: € ${parseTwoDecimals( chargeFor911 )} \n
    Taxes: € ${parseTwoDecimals( taxes )} \n
    Total cost (taxes included): € ${parseTwoDecimals( total )}`;

    console.log( message );

    return;
}

init();