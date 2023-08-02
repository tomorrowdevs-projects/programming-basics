// In questo esercizio invertirai il processo descritto nell'Esercizio 4.
// Sviluppa un programma che inizi leggendo un numero di secondi dall'utente.
// Quindi il tuo programma dovrebbe visualizzare la quantità di tempo equivalente nella forma D:HH:MM:SS,
// dove D, HH, MM e SS rappresentano rispettivamente giorni, ore, minuti e secondi.
// Le ore, i minuti ei secondi devono essere tutti formattati in modo da occupare esattamente due cifre.
// Usa le tue capacità di ricerca per determinare quale carattere aggiuntivo deve essere incluso nell'identificatore di formato
// in modo che gli zeri iniziali vengano utilizzati invece degli spazi iniziali quando un numero viene formattato con una larghezza particolare.

// In this exercise you will reverse the process described in Exercise 4.   
// Develop a program that begins by reading a number of seconds from the user.   
// Then your program should display the equivalent amount of time in the form D:HH:MM:SS,  
// where D, HH, MM, and SS represent days, hours, minutes and seconds respectively.   
// The hours, minutes and seconds should all be formatted so that they occupy exactly two digits.   
// Use your research skills determine what additional character needs to be included in the format specifier
// so that leading zeros are used instead of leading spaces when a number is formatted to a particular width.

let seconds = Number(prompt("you insert the seconds: "));
console.log(typeof seconds);
let secondsInOneDay= 86400;
if(seconds<secondsInOneDay){
    alert("repeat increasing the number of seconds");
}

let dayInSeconds = seconds/secondsInOneDay;
console.log(dayInSeconds);
let hourInSeconds = dayInSeconds/24;
console.log(hourInSeconds);
let minutesInSeconds = hourInSeconds/60;
console.log(minutesInSeconds);
let secondsinSeconds = minutesInSeconds/60;
console.log(secondsinSeconds);

let formatDay = dayInSeconds.toFixed(2) + ":" + hourInSeconds.toFixed(2)+ ":" + minutesInSeconds.toFixed(2)+ ":" +secondsinSeconds.toFixed(2);
console.log(formatDay)

// let minutes = 60
// let secondsInMinutes = seconds / minutes;
// console.log(secondsInMinutes);

// let hour = 24;
// let minutesinHours = secondsInMinutes/hour;
// console.log(minutesinHours);



