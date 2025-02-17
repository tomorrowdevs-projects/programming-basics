// const prompt = require("prompt-sync")({ sigint: true}) ;

function askKm(){
    const askedKm = parseFloat( prompt( 'Enter the distance travelled (in kilometers)', 'Example: 1.56' ) );

    if ( ! isNaN( askedKm ) && askedKm > 0 ){
        return askedKm;
    }

    console.log('Please enter a valid numeric value greather than 0.');
    return askKm();
}

function calculateTheFare( kmTravelled ){
    const baseFare = 4.00;
    const additionalFareCost = 0.25;
    const additionalFareDistance = 0.140;

    const totalFare = baseFare + ( kmTravelled / additionalFareDistance ) * additionalFareCost;
    return totalFare.toFixed(2);
}

function init(){
    const askedKm = askKm();
    const totalFare = calculateTheFare( askedKm );

    console.log( 'Total fare: ' + totalFare );
}
init();