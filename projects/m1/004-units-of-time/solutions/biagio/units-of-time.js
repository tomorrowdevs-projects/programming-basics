const prompt = require('prompt-sync')();

var days = prompt("How many days: ");
var hours = prompt("How many hours: ");
var minutes = prompt("How many minutes: ");
var seconds = prompt("How many seconds: ");

var daysToSeconds = days * 24 * 60 * 60;
var hoursToSeconds = hours * 60 * 60;
var minutesToSeconds = minutes * 60;

var totalSeconds = daysToSeconds + hoursToSeconds + minutesToSeconds + seconds;

console.log("Total seconds is: " + totalSeconds);