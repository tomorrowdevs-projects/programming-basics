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
const userDay = secondsInputUsers / secondsInDay;
const userHours = (secondsInputUsers % secondsInDay) / secondsInHours;
const userMinute = (secondsInputUsers % secondsInHours) / secondsInMinute;
const userSeconds = (secondsInputUsers % secondsInMinute);

alert(`I tuoi secondi equivalgono a ${Math.trunc(userDay)}: ${Math.trunc(userHours)}: ${Math.trunc(userMinute)}: ${Math.trunc(userSeconds)}`);