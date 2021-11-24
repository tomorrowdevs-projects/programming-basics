let min;
let sms; 
let addMinCost;
let addSmsCost; 
let tax; 
let total;

min = prompt("Write the number of minutes you used with your cell phone in a month");
sms = prompt("Write the number of text messages you used with your cell phone in a month");

if (min > 50) {  
addMinCost = ((min - 50) * 0.25).toFixed(2);
} else {
addMinCost = 0;
}
if (sms > 50) {
addSmsCost = ((sms - 50) * 0.15).toFixed(2);
} else {
addSmsCost = 0;
}

tax = (((15.00 + +addMinCost + +addSmsCost + 0.44) * 5) / 100).toFixed(2);

total = (15.00 + +addMinCost + +addSmsCost + 0.44 + +tax).toFixed(2);


if (min <= 50 && sms <= 50) {
alert("YOUR CELL PHONE BILL:\nBase Charge: € 15.00\n911 fee: € 0.44\nTax 5%: € " + tax + "\nTotal: € " + total);
} else if (min > 50 && sms <= 50) {
alert("YOUR CELL PHONE BILL:\nBase Charge: € 15.00\nAdditional minutes charge: € " + addMinCost + "\n911 fee: € 0.44\nTax 5%: € " + tax + "\nTotal: € " + total);
} else if (min <= 50 && sms > 50) {
alert("YOUR CELL PHONE BILL:\nBase Charge: € 15.00\nAdditional text message charge: € " + addSmsCost + "\n911 fee: € 0.44\nTax 5%: € " + tax + "\nTotal: € " + total);
} else {
alert("YOUR CELL PHONE BILL:\nBase Charge: € 15.00\nAdditional minutes charge: € " + addMinCost + "\nAdditional text message charge: € " + addSmsCost + "\n911 fee: € 0.44\nTax 5%: € " + tax + "\nTotal: € " + total);
}


