/* In this exercise you will reverse the process described in Exercise 24.
Develop a program that begins by reading a number of seconds from the user. 
Then your program should display the equivalent amount of time in the form D:HH:MM:SS, where D, HH, MM, and SS represent days, hours, minutes and seconds respectively. 
The hours, minutes and seconds should all be formatted so that they occupy exactly two digits. 
Use your research skills determine what additional character needs to be included in the format specifier so that leading zeros are used instead of leading spaces when a number is formatted to a particular width.*/

// Convert units in time
const day = 24; // in one day there are 24 hours
const hours = 60; // in one hours there are 60 min
const minute = 60; // in one hours there are 60 sec
const seconds = 60;

// Convert time in seconds
const secondsInDay = day * minute * seconds; // 86400
const secondsInHours = minute * seconds; // 3600 sec
const secondsInMinute = seconds; // 60 sec

// Input seconds users
const secondsInputUsers = Number(prompt("Insert your time in seconds", 0));

// Convert seconds users in day, hours, minute, seconds
let userDay = secondsInputUsers / secondsInDay;

let userHours = (secondsInputUsers % secondsInDay) / secondsInHours;
    let numberHoursInt = Math.trunc(userHours); // Take numeber integer
    let hoursUserInString = String(numberHoursInt); // Convert number in string for to use method pasStart

let userMinute = (secondsInputUsers % secondsInHours) / secondsInMinute;
    let numberMinuteInt = Math.trunc(userMinute); 
    let minuteUserInString = String(numberMinuteInt);

let userSeconds = (secondsInputUsers % secondsInMinute);
    let numberSecondsInt = Math.trunc(userSeconds);
    let secondsUserInString = String(numberSecondsInt);
    
// Output
// I use the padStart method to give the two-digit result
alert(`I tuoi secondi equivalgono a ${Math.trunc(userDay)}: ${hoursUserInString.padStart(2, '0')}: ${minuteUserInString.padStart(2, '0')}: ${secondsUserInString.padStart(2, '0')}`);
