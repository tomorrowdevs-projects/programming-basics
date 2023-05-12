

function shippingCalculator (numItems) {
    if (numItems === 1 ) {
        return 10.99;
    } else {
        return 10.99 + 2.99 * (numItems - 1);
    }
    
}

let numItems = parseInt(prompt('How many items did you buy?'));
let shippingCharge = shippingCalculator (numItems);
console.log(`Your shipping charge is:${shippingCharge}`)
console.log(`Your number of items: ${numItems}`);