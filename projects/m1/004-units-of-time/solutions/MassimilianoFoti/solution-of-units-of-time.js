/*Create a program that reads a duration from the user as a number of days, hours, minutes, and seconds. 
Compute and display the total number of seconds represented by this duration.*/

const secondsForAfullDay = 86400
const secondsForAhour = 3600
const secondsForAminute = 60

let numberDays = prompt ("how many days?");
numberDays = parseInt(numberDays);
let numberHours = prompt ("How many hours?");
numberHours = parseInt(numberHours);
let numberMinutes = prompt ("How many minutes?");
numberMinutes = parseInt(numberMinutes);
let numberSeconds = prompt ("How many seconds?");
numberSeconds = parseInt(numberSeconds);

console.log(numberDays * secondsForAfullDay + numberHours * secondsForAhour + numberMinutes * secondsForAminute + numberSeconds);
