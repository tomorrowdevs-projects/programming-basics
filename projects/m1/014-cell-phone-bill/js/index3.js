// dichiarazioni costanti
const priceBasePlan = 15;
const minutes_PlanBase = 50;
const sms_PlanBase = 50;
const minute_Additional = 0.25;
const sms_Additional = 0.15;
const service_911 = 0.44;
const sales_Tax_Const = (5 / 100);
// dichiarazioni variabili
let minutes_UserIn, sms_UserIn, salesTax, totalNet, totalInvoice;
// immissione dei minuti e degli SMS in piú utilizzati durante il mese
minutes_UserIn = parseInt(prompt(`Insert the minutes used during the current month`)) //+ minutes_PlanBase;
sms_UserIn = parseInt(prompt(`Insert text messages used during the current month`))// + sms_PlanBase;

  // visualizza il prezzo del piano base telefonico mensiile
  alert(`\nBasic price of the phone plan  -->   €   ${priceBasePlan.toFixed(2)}\n`);
  // se i minuti sono maggiori di quelli del piano mensile, calcola e visualizza il prezzo dei minuti utilizzati in piú durante il mese
  if (minutes_UserIn > minutes_PlanBase) {
    alert(`Additional minutes price       -->   €   ${(minute_Additional * (minutes_UserIn - minutes_PlanBase)).toFixed(2)}\n`);
  } else if (minutes_UserIn <= minutes_PlanBase  || isNaN(minutes_UserIn)) { // altrimenti minuti sono compresi nel piano telefonico  --> Number() includendo i doppi apici nelle parentesi, restituisce 0 per non farli visualizzare
    minAdd_Price = Number("");
  }
  // se gli SMS sono maggiori di quelli del piano mensile, calcola e visualizza il prezzo dei minuti utilizzati in piú durante il mese
  if (sms_UserIn > sms_PlanBase  || isNaN(minutes_UserIn)) {
    alert(`Additional sms price           -->   €   ${(sms_Additional * (sms_UserIn - sms_PlanBase)).toFixed(2)}\n`);
  } else if (sms_UserIn <= sms_PlanBase) { // altrimenti minuti sono compresi nel piano telefonico  --> Number() includendo i doppi apici nelle parentesi, restituisce 0 per non farli visualizzare
    smsAdd_Price = Number("");
  }
  // visualizzo il servizio 911
  alert(`Service 911                    -->   €   ${service_911}\n`);
  // visualizzo il l'importo netto del piano
  alert(`Net total of the phone plan    -->   €   ${(priceBasePlan + service_911 + (minute_Additional * (minutes_UserIn - minutes_PlanBase)) + (sms_Additional * (sms_UserIn - sms_PlanBase))).toFixed(2)} \n`);
  // visualizzo il l'importo dell'imposta di vendita
  alert(`Total Sales tax 5%             -->   €   ${(((priceBasePlan + (minute_Additional * (minutes_UserIn - minutes_PlanBase)) + (sms_Additional * (sms_UserIn - sms_PlanBase)) + service_911) * sales_Tax_Const)).toFixed(2)}\n`);
  // visualizzo l'importo totale della fattura del piano telefonico
  alert(`Total phone plan invoice       -->   €   ${((priceBasePlan + service_911 + (minute_Additional * (minutes_UserIn - minutes_PlanBase)) + (sms_Additional * (sms_UserIn - sms_PlanBase))) + ((priceBasePlan + (minute_Additional * (minutes_UserIn - minutes_PlanBase)) + (sms_Additional * (sms_UserIn - sms_PlanBase)) + service_911) * sales_Tax_Const)).toFixed(2)} \n`);