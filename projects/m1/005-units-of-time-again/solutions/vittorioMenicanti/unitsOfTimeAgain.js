
// units of time again

const secondsPerMinute = 60;
const secondsPerHour = 3600;
const secondsPerDay = 86400;

let numberOfSeconds = prompt(`Please enter the number of seconds:`);

let days = Math.round(numberOfSeconds/ secondsPerDay);
numberOfSeconds = numberOfSeconds % secondsPerDay;

let hours = Math.round(numberOfSeconds / secondsPerHour);
numberOfSeconds = numberOfSeconds % secondsPerHour;

let minutes = Math.round(numberOfSeconds/ secondsPerMinute);
numberOfSeconds = numberOfSeconds % secondsPerMinute;

let seconds = Math.round(numberOfSeconds);

let formattedHours = ('00' + hours).slice(-2);
let formattedMinutes = ('00' + minutes).slice(-2);
let formattedSeconds = ('00' + seconds).slice(-2);

alert(`The equivalent amount of time in the form of D:HH:MM:SS is:  ${days}:${formattedHours}:${formattedMinutes}:${formattedSeconds}`);