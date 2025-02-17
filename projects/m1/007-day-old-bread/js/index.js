//day old bread-m1-007

let discount;
let bread;

bread=+prompt('how many bread do you need?' );
bread=(bread*3.49).toFixed(2);

discount=(bread/100)*60;
discount=discount.toFixed(2);

let totalPrice=bread-discount;
totalPrice=totalPrice.toFixed(2);

alert('Bread price:$'+ bread + '\nDiscount:$'+ discount + '\nTotal price:$'+ totalPrice);