// user input
const prompt = require('prompt-sync')();
let totalInputSeconds = parseInt(prompt("Enter the total seconds: "), 10);

// variable declarations
const days = 86400;
const hours = 3600;
const minutes = 60;
const seconds = 1;
let totalDays = 0;
let totalHours = 0;
let totalMinutes = 0;

// convert seconds to days
if (totalInputSeconds >= days) {
    totalDays = totalInputSeconds / days;
    totalDays = Math.trunc(totalDays);
    totalInputSeconds = (totalInputSeconds % days);
}

// convert seconds to hours
if (totalInputSeconds >= hours) {
    totalHours = totalInputSeconds / hours;
    totalHours = Math.trunc(totalHours);
    totalInputSeconds = (totalInputSeconds % hours);
}

// convert seconds to minutes
if (totalInputSeconds >= minutes) {
    totalMinutes = totalInputSeconds / minutes;
    totalMinutes = Math.trunc(totalMinutes);
    totalInputSeconds = (totalInputSeconds % minutes);
}

// convert results to two-digit string format
totalDaysString = totalDays.toString().padStart(2, "0");
totalHoursString = totalHours.toString().padStart(2, "0");
totalMinutesString = totalMinutes.toString().padStart(2, "0");
totalInputSecondsString = totalInputSeconds.toString().padStart(2, "0");

// display
console.log("Total timer duration: " + totalDaysString + ":" + totalHoursString + ":" + totalMinutesString + ":" + totalInputSecondsString);
