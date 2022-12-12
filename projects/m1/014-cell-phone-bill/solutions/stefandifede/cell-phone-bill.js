const minutesUsed = prompt("Insert the amount of minutes used")
const textMessagesUsed = prompt("Insert the amount of text message sent")
const callsTo911 = prompt("Insert number of calls to 911 call center")
const basicBill = 15


let callsTo911Charge = 0.44 * callsTo911;
let extraMinutesCharge = 0;
let extraMessages = 0;

function calculateExtraMinutes() {
    if (minutesUsed > 50) {
        extraMinutesCharge = (0.25 * (minutesUsed - 50));
    } else {extraMinutesCharge = 0}
}

function calculateExtraMessages () {
    if (textMessagesUsed > 50) {
        extraMessages = (0.15 * (textMessagesUsed - 50));
    } else {extraMessages = 0}
}

calculateExtraMessages();
calculateExtraMinutes();


const totalExtraCharge = (extraMinutesCharge + extraMessages + callsTo911)
const totalExtraChargeTax = ((5 * totalExtraCharge) / 100); 

const totalBill = basicBill + extraMinutesCharge + extraMessages + callsTo911Charge + totalExtraChargeTax;

const monthBill = alert("Basic bill: 15$" + "\n Additional minutes charge: " + extraMinutesCharge.toFixed(2) + " $" + "\n Additional messages charge: " + extraMessages.toFixed(2) + " $" + "\n 911 calls charge: " + callsTo911Charge.toFixed(2) + " $" + "\n Total Tax: " + totalExtraChargeTax.toFixed(2) + " $" + "\n Total bill: " + totalBill.toFixed(2) + " $")

