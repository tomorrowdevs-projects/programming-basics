let days = prompt("Please, insert the number of days:");
let hours = prompt("Please, insert the number of hours:");
let minutes = prompt("Please, insert the number of minutes:");
let seconds = prompt("Please, insert the number of seconds:"); 

let daysSeconds = ((days * 24) * 60) * 60;
let hoursSeconds = (hours * 60) * 60;
let minutesSeconds = minutes * 60;
let secondsResult = seconds * 1;
let result = daysSeconds + hoursSeconds + minutesSeconds + secondsResult;

alert("Your time lapse in seconds is: " + result);