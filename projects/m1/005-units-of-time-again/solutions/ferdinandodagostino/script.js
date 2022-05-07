// In this exercise you will reverse the process described in Exercise 24. Develop a program that begins by reading a number of seconds from the user. Then your program should display the equivalent amount of time in the form D:HH:MM:SS, where D, HH, MM, and SS represent days, hours, minutes and seconds respectively. The hours, minutes and seconds should all be formatted so that they occupy exactly two digits. Use your research skills determine what additional character needs to be included in the format specifier so that leading zeros are used instead of leading spaces when a number is formatted to a particular width.

const userSeconds = prompt('Inserisci i secondi da convertire');
let secondsConv = userSeconds % 60;
let secondsToDay = Math.floor(userSeconds / 86400);

let secondsToHour = Math.floor(userSeconds / 3600);
secondsToHour = secondsToHour % 24;

let secondsToMinute = Math.floor(userSeconds / 60);
secondsToMinute = secondsToMinute % 60;

secondsToHour = ('00' + secondsToHour).slice(-2);
secondsToMinute = ('00' + secondsToMinute).slice(-2);
secondsConv = ('00' + secondsConv).slice(-2);

alert(`${secondsToDay}:${secondsToHour}:${secondsToMinute}:${secondsConv}`);
