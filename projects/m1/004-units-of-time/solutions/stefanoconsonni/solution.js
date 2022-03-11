const secondsPerMinute = 60;
const secondsPerHour = 3600;
const secondsPerDay = 86400;

const days = prompt("Enter the number of Days:");
const hours = prompt("Enter the number of Hours:");
const minutes = prompt("Enter the number of Minutes:");
const seconds = prompt("Enter the number of Seconds:");

const totalNumberOfSeconds = days * 86400 + hours * 3600 + minutes * 60 + seconds;

alert(`The total number of seconds is: ${totalNumberOfSeconds}`);
