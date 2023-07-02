// A particular cell phone plan includes for € 15.00 a month: 
// - 50 minutes of air time 
// - 50 text messages    
// - Each additional minute of air time costs € 0.25
// - Each additional text messages cost € 0.15  
// - All cell phone bills include an additional charge of € 0.44 to support 911 call centers

// The entire bill (including the 911 charge) is subject to **5 percent sales tax**.  

// Write a program that **reads the number of minutes and text messages used in a month** from the user.  
// Display:
// - Base charge,
// - Extra minutes charge (if any),
// - Extra text message charge (if any),
// - 911 fee, 
// - Tax,
// - Total bill amount.   

// Only display the additional minute and text message charges if the user incurred costs in these categories. 
// Ensure that all the charges are displayed **using 2 decimal places**.

// Example:   
// Input minutes: 500  
// Input messages: 55  

// Output:  
// Base charge: 15.00€  
// Extra minutes charge: 112.50€  
// Extra messages charge: 0.75€  
// 911 fee: 0.44€  
// Tax: 6.43€  
// Total bill amount: 135.12€

// Un piano telefonico particolare prevede per € 15,00 al mese:
// - 50 minuti di trasmissione
// - 50 messaggi di testo
// - Ogni minuto aggiuntivo di trasmissione costa € 0,25
// - Ogni sms aggiuntivo costa € 0,15
// - Tutte le bollette dei telefoni cellulari includono un costo aggiuntivo di € 0,44 per supportare i call center del 911

// L'intera fattura (compreso l'addebito per il 911) è soggetta all'**imposta sulle vendite del 5%**.

// Scrivi un programma che **legge il numero di minuti e messaggi di testo utilizzati in un mese** dall'utente.
// Schermo:
// - Carica base,
// - Addebito dei minuti extra (se presenti),
// - Costo aggiuntivo per i messaggi di testo (se presente),
// - tassa 911,
// - Imposta,
// - Importo totale della fattura.

// Visualizza solo i minuti aggiuntivi e gli addebiti per i messaggi di testo se l'utente ha sostenuto costi in queste categorie.
// Assicurati che tutti gli addebiti vengano visualizzati **utilizzando 2 cifre decimali**.

// Esempio:
// Inserisci i minuti: 500
// Messaggi di input: 55

// Produzione:
// Tariffa base: 15,00€
// Costo minuti extra: 112,50€
// Costo messaggi extra: 0,75€
// Commissione 911: 0,44€
// Tasse: 6,43€
// Importo totale della fattura: 135,12 €

 baseCharge = {
    charge: 15,
    minutes : 50,
    extraMinute: 0.25,
    extraSms: 0.15,
    callCenter: 0.44,
    salesTax: 5
};
console.log(baseCharge)

let minuteInput = +prompt(`You insert the minute: `);
let smsInput = +prompt(`you insert the minute: `);

let minutesExtra;
let smsExtra;

if(minuteInput <= 50){
  minutesExtra = 0;
 } else {
    minutesExtra =  (minuteInput - 50) * baseCharge.extraMinute;
}

 if(smsInput <= 50){
    smsExtra = 0;
} else {
   smsExtra = (smsInput - 50) * baseCharge.extraSms;
}

       let charge = baseCharge.charge;
       let commission = baseCharge.callCenter;
       let salesTaxUser =  (charge + minutesExtra + smsExtra + commission )* 5 / 100;
       let totalBillAmount = charge + minutesExtra + smsExtra + commission + salesTaxUser;






alert(` You pay:  
Base charge: ${charge}€ 
 Extra minutes charge: ${minutesExtra.toFixed(2)}€ 
Extra messages charge: ${smsExtra.toFixed(2)}€
911 fee: ${commission.toFixed(2)}€ 
Tax: ${salesTaxUser.toFixed(2)}€
 Total bill amount: ${totalBillAmount.toFixed(2)}€`)
