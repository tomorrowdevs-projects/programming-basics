const days = parseInt(prompt("insert number of days"));
const hours = parseInt(prompt("insert number of hours"));
const minutes = parseInt(prompt("insert number of minutes"));
const seconds = parseInt(prompt("insert number of seconds"));

const oneMinute = 60;
const oneHour = 60 * oneMinute;
const oneDay = 24 * oneHour; 
const amountOfSeconds = (days * oneDay) + (hours * oneHour) + (minutes * oneMinute) + seconds

function calculateAmountOfSeconds() {
    if (isNaN(days) || isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
        alert("insert a value of days, hours, minutes and seconds")
    } else {alert("Total of seconds " + amountOfSeconds)}
}

calculateAmountOfSeconds()