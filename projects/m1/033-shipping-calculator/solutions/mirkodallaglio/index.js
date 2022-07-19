let nItems = prompt('Write the number of items purchased');

function shippingCosts (nItems){
    if (nItems > 1) return (2.99 * (nItems - 1) + 10.99).toFixed(2);
    else return 10.99;
};

if(/^[0-9]+$/.test(nItems)) alert(`Total price for shipping is € ${shippingCosts(nItems)}`);
else alert('You have to write an integer number !');