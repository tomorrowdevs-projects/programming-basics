//asking user to eneter an year
let year = parseInt(prompt("Enter a year:"));

//defining the days in a week
const daysInWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//Formula to determine the day of the week for January 1
let calcDayFirstJanuary = (year + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400)) % 7;

//Convert formula result in the day of the week
dayFirstJanuary = daysInWeek[calcDayFirstJanuary];

//Display result
alert("January 1st, " + year + " falls on a " + dayFirstJanuary);