// input data
const prompt = require('prompt-sync')();
const days = parseInt(prompt("Enter the days: "), 10);
const hours = parseInt(prompt("Enter the hours: "), 10);
const minutes = parseInt(prompt("Enter the minutes: "), 10);
const seconds = parseInt(prompt("Enter the seconds: "), 10);

// conversion from data to seconds
const dayInSecond = days * 86400;
const hoursInSecond = hours * 3600;
const minutesInSecond = minutes * 60;

// sum seconds
let totalseconds = dayInSecond + hoursInSecond + minutesInSecond + seconds;
// display result
console.log(days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds" + " are in total " + totalseconds + " seconds!");
