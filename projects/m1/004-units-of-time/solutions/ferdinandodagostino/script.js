// Create a program that reads a duration from the user as a number of days, hours, minutes, and seconds. Compute and display the total number of seconds represented by this duration.

const secondsPerMinute = 60;
const secondsPerHour = 3600;
const secondsPerDay = 86400;

const days = parseInt(prompt('Inserisci il numero di giorni:'));
const hours = parseInt(prompt('Inserisci il numero di ore:'));
const minutes = parseInt(prompt('Inserisci il numero di minuti:'));
const seconds = parseInt(prompt('Inserisci il numero di secondi:'));

const total =
  days * secondsPerDay +
  hours * secondsPerHour +
  minutes * secondsPerMinute +
  seconds;

alert(`The total number of seconds is: ${total}`);
