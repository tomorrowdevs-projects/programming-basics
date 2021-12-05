let loavesOfOldBread = prompt("How many loaves of day old bread is the customer buying?");

let regularPricePerUnit = 3.49;
let discountedPricePerUnit = (3.49 * 60) / 100;

let fullTotalPrice = (loavesOfOldBread * regularPricePerUnit).toFixed(2);
let totalDiscount = (loavesOfOldBread * discountedPricePerUnit).toFixed(2);
let totalPrice = (regularPricePerUnit * loavesOfOldBread - totalDiscount).toFixed(2);

alert(`Bread purchased: € ${fullTotalPrice}\nDiscount: € ${totalDiscount}\nTotal: € ${totalPrice}`);
