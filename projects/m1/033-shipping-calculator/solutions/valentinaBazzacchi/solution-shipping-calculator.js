function getShippingCharge(number) {
    let rateFisrtItem = 10.99;
    let rateNextItem = (number - 1) * 2.99;
    return (rateFisrtItem + rateNextItem).toFixed(2);
}
    
let numOfItems = prompt("How many items are there in your order?");
let onlyNumbers = /^[0-9]+$/;
let totalCharge = getShippingCharge(numOfItems);
    
if (!onlyNumbers.test(numOfItems)) {
    alert("Invalid Entry!");
} else if (numOfItems < 1) {
    alert("Your shopping cart is empty!");
} else {
    alert("The total shipping charge is: € " + totalCharge); 
}