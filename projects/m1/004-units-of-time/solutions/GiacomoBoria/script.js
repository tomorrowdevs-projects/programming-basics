/* Create a program that reads a duration from the user as a number of days, hours, minutes, and seconds. 
Compute and display the total number of seconds represented by this duration. */

// Convert units in time
const day = 24; // in one day there are 24 hours
const hours = 60; // in one hours there are 60 min
const minute = 60; // in one hours there are 60 sec
const seconds = 60;

// Convert time in seconds
const secondsInDay = day * minute * seconds;
const secondsInhours = minute * seconds;
const secondsInMinute= seconds;


alert("Caro utente è il momento della verità, scopriamo quanto tempo è passato dalla tua ultima sigaretta. Si il risultato è in secondi per farti sentire ancor di più una bella persona.")

//Input start session
let userInputDay = Number(prompt("Inserisci quanti giorni sono passati dalla tua ultima cicca", 0));
let userInputHours = Number(prompt("Inserisci quante ore sono passate dalla tua ultima cicca", 0));
let userInputMinute = Number(prompt("Inserisci quante minuti sono passati dalla tua ultima cicca...", 0));
let userInputSeconds = Number(prompt("Inserisci quante minuti sono passati dalla tua ultima cicca...Si lo sappiamo che conti anche quelli", 0));

let timeDurationUser = (userInputDay * secondsInDay) + (userInputHours * secondsInhours) + (userInputMinute * secondsInMinute) + userInputSeconds;

alert(`Sono ben ${timeDurationUser} secondi che non fumi, COMPLIMENTI!`);



