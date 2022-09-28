let secondsInDays = 86400;
let secondsInHours = 3600;
let secondsInMinutes = 60;
//enter the number of seconds
let userChoicheSeconds = parseInt(prompt('Please, enter the number of seconds: '))
//calc days
let days = Math.floor(userChoicheSeconds / secondsInDays);
let restDays = Math.floor(userChoicheSeconds % secondsInDays);
//calc hours
let hours = Math.floor(restDays / secondsInHours);
let restHours = Math.floor(restDays % secondsInHours);
//calc minutes
let minutes = Math.floor(restHours / secondsInMinutes);
let restMinutes = Math.floor(restHours % secondsInMinutes);
let seconds = restMinutes;
//hours control
if(hours < 10){hours = "0" + hours}
//minutes control
if(minutes < 10){minutes = "0" + minutes}
//seconds control
if(seconds < 10){seconds = "0" + seconds}
//format the time in d:hh:mm:ss
let formatTime = days + ":" + hours + ":" + minutes + ":" + seconds;
alert("d:hh:mm:ss = " + formatTime);