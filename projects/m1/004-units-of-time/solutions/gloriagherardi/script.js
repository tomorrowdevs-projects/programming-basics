var arrData = prompt("Inserisci il numero di giorni, ore, minuti e secondi (separati da virgole).").split(",");

const secDays = arrData[0] * 86400;
const secHours = arrData[1] * 3600;
const secMinutes = arrData[2] * 60;

const totalSeconds = secDays + secHours + secMinutes + arrData[3];

alert('I secondi totali sono ' + totalSeconds);