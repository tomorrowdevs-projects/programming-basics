// input dati
let days = 5;
let hours = 5;
let minutes = 3;
let seconds = 20;

// conversione da dato a secondi
let dayInSecond = days * 86400;
let hoursInSecond = hours * 3600;
let minutesInSecond = minutes * 60;

// somma secondi
let totalseconds = dayInSecond + hoursInSecond + minutesInSecond + seconds;
// display risultato
console.log(days + " giorni " + hours + " ore " + minutes + " minuti " + seconds + " secondi" + " sono in totale " + totalseconds + " secondi!");

