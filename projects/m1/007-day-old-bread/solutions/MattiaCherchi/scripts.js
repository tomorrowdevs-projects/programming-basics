let numBread = +prompt('enter the number of old loaves of bread purchased');
numBread = Math.floor(numBread);

const breadPrice = 3.49;

let regularPrice = (breadPrice * numBread).toFixed(2);
let discount = (regularPrice * 0.6).toFixed(2);
let totalPrice = (regularPrice - discount).toFixed(2);;


alert(`Regular price : € ${regularPrice} \nDiscount : € ${discount} \nTotal price : € ${totalPrice}`);