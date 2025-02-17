let userItems = parseInt(prompt('How many items do you need to ship ?'));
const baseCost = 10.99;
const addCost = 2.99;

function shippingCost(userItems) {

    if (userItems === 1) {
        return baseCost;
    } else {
        return (baseCost + ((userItems - 1) * addCost)).toFixed(2);
    }

}


if (/^[0-9]+$/.test(userItems) && userItems > 0) {
    alert(`the cost of shipping is: € ${shippingCost(userItems)}`);
} else {
    alert('Error!Enter the number of items to be shipped ')
}
