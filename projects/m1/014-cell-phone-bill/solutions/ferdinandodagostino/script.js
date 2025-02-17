// A particular cell phone plan includes 50 minutes of air time and 50 text messages for € 15.00 a month. Each additional minute of air time costs € 0.25, while additional text messages cost € 0.15 each. All cell phone bills include an additional charge of € 0.44 to support 911 call centers, and the entire bill (including the 911 charge) is subject to 5 percent sales tax. Write a program that reads the number of minutes and text messages used in a month from the user. Display the base charge, additional minutes charge (if any), additional text message charge (if any), the 911 fee, tax and total bill amount. Only display the additional minute and text message charges if the user incurred costs in these categories. Ensure that all of the charges are displayed using 2 decimal places.

const minutesPlan = 50;
const textPlan = 50;
const planPrice = 15;
let minutesExceeding = 0;
let textsExceeding = 0;
const standardMinuteFare = 0.25;
const standardTextFare = 0.15;
const emergencyCallFare = 0.44;

const userMinutes = parseFloat(prompt('Quanti minuti di chiamate?'));
const userTexts = parseInt(prompt('Quanti messaggi?'));

if (userMinutes > minutesPlan) {
  minutesExceeding = userMinutes - minutesPlan;
}

if (userTexts > textPlan) {
  textsExceeding = userTexts - textPlan;
}

const totalMinutesExceedingPrice = minutesExceeding * standardMinuteFare;
const totalTextsExceedingPrice = textsExceeding * standardTextFare;

const totalBill =
  planPrice +
  totalMinutesExceedingPrice +
  totalTextsExceedingPrice +
  emergencyCallFare;

const totalBillTax = (totalBill * 5) / 100;
const totalBillTaxRounded = totalBillTax.toFixed(2);
const totalBillTaxed = totalBill.toFixed(2) + totalBillTaxRounded;

if (minutesExceeding) {
  alert(
    `Il costo mensile del piano è ${planPrice}, il costo dei minuti fuori dal piano è ${
      minutesExceeding * standardMinuteFare
    }, il costo del 911 è ${emergencyCallFare}, il costo della tassa è ${totalBillTaxRounded}, il costo totale della bolletta è ${totalBillTaxed}`
  );
} else if (textsExceeding) {
  alert(
    `Il costo mensile del piano è ${planPrice}, il costo dei messaggi fuori dal piano è ${
      textsExceeding * standardTextFare
    }, il costo del 911 è ${emergencyCallFare}, il costo della tassa è ${totalBillTaxRounded}, il costo totale della bolletta è ${totalBillTaxed}`
  );
} else if (minutesExceeding && textsExceeding) {
  alert(
    `Il costo mensile del piano è ${planPrice}, il costo dei messaggi fuori dal piano è ${
      textsExceeding * standardTextFare
    }, il costo dei minuti fuori dal piano è ${
      minutesExceeding * standardMinuteFare
    }, il costo del 911 è ${emergencyCallFare}, il costo della tassa è ${totalBillTaxRounded}, il costo totale della bolletta è ${totalBillTaxed}`
  );
} else {
  alert(
    `Il costo mensile del piano è ${planPrice},  il costo del 911 è ${emergencyCallFare},`
  );
}
