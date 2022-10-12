

// units of time

const secondsPerMinute = 60;
const secondsPerHour = 3600;
const secondsPerDay = 86400;

const days = prompt(`Please enter the number of Days Here:`);
const hours = prompt(`Please enter the number of Hours Here:`);
const minutes = prompt(`Please enter the number of Minutes Here:`);
const seconds = prompt(`Please enter the number of Seconds Here:`);

const totalSeconds = days * 86400 + hours * 3600 + minutes * 60 + seconds;

alert(`The total number of seconds is: ${totalSeconds}`);