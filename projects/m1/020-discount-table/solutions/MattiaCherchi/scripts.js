let price = [4.95, 9.95, 14.95, 19.95, 24.95];


for(let i = 0; i < price.length; i++){
  let product = i + 1;
  let discount = ((price[i] * 60)/100).toFixed(2);
  let finalPrice = (price[i] - discount).toFixed(2);
  alert(`Product ${product} \nFull price : $ ${price[i]} \nDiscount 60% : $ ${discount} \nDiscounted price : $ ${finalPrice}`);
}