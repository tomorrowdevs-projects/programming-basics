// €10.99 rate for the first item
// €2.99 rate for item on the same order
// function takes the number of items in the order as its only parameter
const numberElement = parseInt(prompt('Enter the number of item in an order'))
function calcShippingCare(item){
    // let shippingCharge = 0;
    // if(item === 1){
    //     shippingCharge = 10.99
    // } else {
    const shippingCharge = (2.99 * (item - 1) + 10.99).toFixed(2)
    // }
    return shippingCharge
}

console.log(`Shipping costs for ${numberElement} items are €${calcShippingCare(numberElement)}`)
// calcShippingCare(1)
// calcShippingCare(3)
// calcShippingCare(20)