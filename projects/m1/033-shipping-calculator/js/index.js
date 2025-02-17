// const prompt = require("prompt-sync")({ sigint: true}) ;

function askItems(){
    const askedKm = parseInt( prompt( 'Enter the items number.', 'Example: 1.56' ) );

    if ( ! isNaN( askedKm ) && askedKm > 0 ){
        return askedKm;
    }

    console.log('Please enter a valid integer value greather than 0.');
    return askItems();
}

function calculateOrderShippingCharge( itemsNumber ){
    const firstItemShippingRate = 10.99;
    const subsequentItemShippingRate = 2.99;

    const totalShippingRate = firstItemShippingRate + subsequentItemShippingRate * ( itemsNumber - 1 );

    return totalShippingRate;
}

function init(){
    const askedItems = askItems();
    const orderShippingCharge = calculateOrderShippingCharge( askedItems );

    console.log( orderShippingCharge );
    return;
}
init();