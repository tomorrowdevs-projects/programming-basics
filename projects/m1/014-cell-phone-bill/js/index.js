const prompt = require('prompt-sync')();
const userInputMinutes = parseInt(prompt('Inserisci il numero di minuti aggiuntivi oltre la soglia base se presenti altrimenti inserisci 0: '), 10);
const userInputSMS = parseInt(prompt('Inserisci il numero di sms aggiuntivi oltre la soglia base se presenti altrimenti inserisci 0: '), 10);

const userMinutesTotal = userInputMinutes + 50;
const userSmsTotal = userInputSMS + 50;
const basicRate = 15.00;
const minutesExtra = userInputMinutes * 0.25;
const smsExtra = userInputSMS * 0.15;
const callCenter = 0.44;
const taxValue = basicRate + minutesExtra + smsExtra + callCenter;
const pergentage = 5;
const taxTotal = ((taxValue * pergentage) / 100);
const totalPercentage = ((taxValue * pergentage) / 100) + taxValue;


if (userInputMinutes != 0) {
    console.log("Totale dei minuti utilizzati: " + userMinutesTotal);
}

if (userInputSMS != 0) {
    console.log("Totale dei messaggi utilizzati: " + userSmsTotal);
}

console.log("Costo tariffa base: " + basicRate + " Euro");

if (userInputMinutes != 0) {
    console.log("Costo minuti extra " +  minutesExtra.toFixed(2) + " Euro");
}
if (userInputSMS != 0) {
    console.log("Costo sms extra " + smsExtra.toFixed(2) + " Euro");
}

console.log("Costo servizi call center " + callCenter + " Euro"); 
console.log("Tasse " + taxTotal.toFixed(2) + " Euro");

console.log("Totale fattura " + totalPercentage.toFixed(2) + " Euro"); 


