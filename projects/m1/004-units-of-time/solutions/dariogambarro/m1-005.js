let seconds = +prompt('How many seconds?');
let minutes = (seconds - seconds % 60) / 60; // calcolo minuti arrotondati. Es. 61 sec: (61 - 1)/60 = 1
let hours = (minutes - minutes % 60) / 60;
let days = (hours - hours %24) / 24;
let displaySec;
let displayMin;
let displayHour;

displaySec = seconds % 60;
displayMin = minutes % 60;
displayHour = hours % 24;

if (displaySec < 10) {
    displaySec = ("0" + displaySec)
}
if (displayMin < 10) {
    displayMin = ("0" + displayMin)
}
if (displayHour < 10) {
    displayHour = ("0" + displayHour)
}
console.log(`The equivalent amount of time is: ${days}:${displayHour}:${displayMin}:${displaySec}`);