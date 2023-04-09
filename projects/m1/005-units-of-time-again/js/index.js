// inserimento input utente
let totalInputSeconds = 673876543;

// dichiarazioni variabili
let days = 86400;
let hours = 3600;
let minutes = 60
let seconds = 1
let totalDays = 0;
let totalHours = 0;
let totalMinutes = 0;
let totalSeconds = 0;

//conversione dei secondi in giorni
if (totalInputSeconds >= days) {
    totalDays = totalInputSeconds / days;
    totalDays = Math.trunc(totalDays);
    totalInputSeconds = (totalInputSeconds % days);

//conversione dei secondi in ore
}
if (totalInputSeconds >= hours) {
    totalHours = totalInputSeconds / hours;
    totalHours = Math.trunc(totalHours);
    totalInputSeconds = (totalInputSeconds % hours);

//conversione dei secondi in minuti
}
if (totalInputSeconds >= minutes) {
    totalMinutes = totalInputSeconds / minutes;
    totalMinutes = Math.trunc(totalMinutes);
    totalInputSeconds = (totalInputSeconds % minutes);

}

//conversione dei risultati in formato stringa a due cifre
totalDaysString = totalDays.toString().padStart(2, "0");
totalHoursString = totalHours.toString().padStart(2, "0");
totalMinutesString = totalMinutes.toString().padStart(2, "0");
totalInputSecondsString = totalInputSeconds.toString().padStart(2, "0");

//display
console.log("Durata complessiva del timer "+totalDaysString +":"+totalHoursString+":"+totalMinutesString+":"+totalInputSecondsString);

