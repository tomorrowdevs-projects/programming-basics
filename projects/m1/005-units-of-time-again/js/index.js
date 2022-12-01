let inputSeconds = prompt("Please enter the amount of seconds you'd like to convert:");

let days = Math.floor(inputSeconds / 86400);
let remainder = inputSeconds % 86400;

let hours = Math.floor(remainder / 3600)
remainder = remainder % 3600;

let minutes = Math.floor(remainder / 60);
remainder = remainder % 60;

seconds = Math.floor(remainder);

let daysOutput = (days).toString().padStart(2, '0');
let hoursOutput = (hours).toString().padStart(2, '0');
let minutesOutput =  (minutes).toString().padStart(2, '0');
let secondsOutput = (seconds).toString().padStart(2, '0');



alert("The amount of seconds you entered is equal to: " + daysOutput + " days, " + hoursOutput + " hours, " + minutesOutput + " minutes and " + secondsOutput + " seconds!");