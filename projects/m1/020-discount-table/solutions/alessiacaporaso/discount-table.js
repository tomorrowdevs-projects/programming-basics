// save the old price: $4.95, $9.95, $14.95, $19.95, and $24.95
const oldPrice = [4.95, 9.95, 14.95, 19.95, 24.95]
// calc 60 percent off sale with loop and generate a table
let discount;
let newPrice;
for(let i = 0; i < oldPrice.length; i++){
    discount = ((oldPrice[i] * 60) / 100).toFixed(2)
    newPrice = (oldPrice[i] - discount).toFixed(2)
    // display the old price, the discount, and the new price
    alert(`Old price: ${oldPrice[i]}   Discount: ${discount}  New price: ${newPrice}`)
}