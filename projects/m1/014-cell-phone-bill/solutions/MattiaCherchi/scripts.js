let userMin = prompt('How many minuts did you use?');
let userSms = prompt('How many messages have you sent?');

/* Memorizzo i valori che mi sono utili per effettuare i calcoli in modo tale che, se in futuro tali valori dovessero cambiare posso tranquillamente modificarli 
senza dover mettere mano su altre parti del codice
*/
const basicPhonFee = 15.00;
const basicMin = 50;
const basicSms = 50;
const addMinFee = 0.25;
const addSmsFee = 0.15;
const callCenterFee = 0.44;
let userAddMin;
let userAddSms;
let addMinCharge;
let addSmsCharge;

// Calcolo il numero di minuti e messaggi in più che vengo utilizzati dall'utente rispetto a quelli previsti dal piano base;
if(userMin > basicMin){
  userAddMin = (userMin - basicMin);
}else{
  userAddMin = 0;
}

if(userSms > basicSms){
  userAddSms = (userSms - basicSms);
}else{
  userAddSms = 0;
}


// Calcolo il costo relativo ai minuti e messaggi in più che vengono utilizzati dall'utente rispetto a quelli previsti dal piano base; 
if(userAddMin > 0){
  addMinCharge = (userAddMin * addMinFee).toFixed(2) ;
}else{
  addMinCharge = 0;
}

if(userAddSms > 0){
  addSmsCharge = (userAddSms * addSmsFee).toFixed(2);
}else{
  addSmsCharge = 0;
}

//Calcolo l'imposta sulle vendite 
let tax = (((basicPhonFee + callCenterFee + +addMinCharge + +addSmsCharge) * 5 )/ 100).toFixed(2);

//Calcolo il valore totate della fattura
let total = (basicPhonFee + callCenterFee + +addMinCharge + +addSmsCharge + +tax).toFixed(2);


// Effettuo diversi controlli in modo da impostare, a seconda della casistica, la fattura con i valori corretti.
if(userMin <= basicMin && userSms <= basicSms){
  alert(`Your invoice:\nBase fee: € ${(basicPhonFee).toFixed(2)} \nCall center fee(911): € ${callCenterFee} \nTax: € ${tax} \nTotal: € ${total}`);

}else if(userMin > basicMin && userSms <= basicSms){
  alert(`Your invoice:\nBase fee: € ${(basicPhonFee).toFixed(2)} \nCall center fee(911): € ${callCenterFee}  \nAdditional for ${userAddMin} minutes: € ${addMinCharge} \nTax 5%: € ${tax} \nTotal: € ${total}`);

}else if(userMin <= basicMin && userSms > basicSms){
  alert(`Your invoice:\nBase fee: € ${(basicPhonFee).toFixed(2)} \nCall center fee(911): € ${callCenterFee}  \nAdditional for ${userAddSms} message: € ${addSmsCharge} \nTax 5%: € ${tax} \nTotal: € ${total}`); 

}else if (userMin > basicMin && userSms > basicSms){
  alert(`Your invoice:\nBase fee: € ${(basicPhonFee).toFixed(2)} \nCall center fee(911): € ${callCenterFee} \nAdditional for ${userAddMin} minutes: € ${addMinCharge}  \nAdditional for ${userAddSms} message: € ${addSmsCharge} \nTax 5%: € ${tax} \nTotal: € ${total}`); 

}else{
  alert('Error! Please enter the correct values!')
}