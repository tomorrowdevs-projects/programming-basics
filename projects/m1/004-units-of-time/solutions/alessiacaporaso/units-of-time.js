let secondsInDays = 86400;
let secondsInHours = 3600;
let secondsInMinutes = 60;
// enter day, hours, minutes and second
let userChoiceDay = parseInt(prompt("Please, enter the number of Days: "));
let userChoiceHours = parseInt(prompt("Please, enter the number of Hours: "));
let userChoiceMinutes = parseInt(prompt("Please, enter the number of Minutes: "));
let userChoiceSeconds = parseInt(prompt("Please, enter the number of Seconds: "));
//calc tot seconds
let totSeconds = (userChoiceDay * secondsInDays) + (userChoiceHours * secondsInHours) + (userChoiceMinutes * secondsInMinutes) + userChoiceSeconds;

alert(`Namber of seconds is: ${totSeconds}`);