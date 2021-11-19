// Dichiaro le variabili costanti

const SEC_IN_MIN = 60;
const SEC_IN_HRS = 60 * 60;
const SEC_IN_DAY = 60 * 60 * 24;

// Dichiaro le variabili

let secByUser; 
let secToDisplay;
let minToDisplay;
let hrsToDisplay;
let dayToDisplay;

// Chiedo all'utente di inserire il numero di secondi da convertire

secByUser = +prompt("How many seconds do you want to convert?");   

// Converto il valore dei secondi in giorni, ore, minuti e secondi

secToDisplay = secByUser % 60;

minToDisplay = Math.floor(secByUser / SEC_IN_MIN);
minToDisplay = minToDisplay % 60;
    
hrsToDisplay = Math.floor(secByUser / SEC_IN_HRS);
hrsToDisplay = hrsToDisplay % 24;
    
dayToDisplay = Math.floor(secByUser / SEC_IN_DAY);

// Riporto all'utente il valore inserito con la formattazione D:HH:MM:SS con il metodo String.slice

alert( `The equivalent amount of time in the form D:HH:MM:SS for your seconds is: 
${dayToDisplay}:${("00" + hrsToDisplay).slice(-2)}:${("00" + minToDisplay).slice(-2)}:${("00" + secToDisplay).slice(-2)}` );

// Riporto all'utente il valore inserito con la formattazione D:HH:MM:SS con il metodo String.padStart

alert( `The equivalent amount of time in the form D:HH:MM:SS for your seconds is: 
${dayToDisplay}:${String(hrsToDisplay).padStart(2, '0')}:${String(minToDisplay).padStart(2, '0')}:${String(secToDisplay).padStart(2, '0')}` );

// Posso anche riassegnare il valore alle variabili applicando il metodo String.slice separatamente dall'alert

hrsToDisplay = ("00" + hrsToDisplay).slice(-2);
minToDisplay = ("00" + minToDisplay).slice(-2);
secToDisplay = ("00" + secToDisplay).slice(-2);
    
alert("The equivalent amount of time in the form D:HH:MM:SS for your seconds is: " + dayToDisplay + ":" + hrsToDisplay + ":" + minToDisplay + ":" + secToDisplay);

// Posso anche riassegnare il valore alle variabili applicando il metodo String.padStart separatamente dall'alert

hrsToDisplay = String(hrsToDisplay).padStart(2, '0');
minToDisplay = String(minToDisplay).padStart(2, '0');
secToDisplay = String(secToDisplay).padStart(2, '0');

alert("The equivalent amount of time in the form D:HH:MM:SS for your seconds is: " + dayToDisplay + ":" + hrsToDisplay + ":" + minToDisplay + ":" + secToDisplay);