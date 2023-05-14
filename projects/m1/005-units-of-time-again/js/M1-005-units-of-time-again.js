const seconds = 1;
const secondsMinutes = 60;
const secondsHours = secondsMinutes * 60;
const secondsDay = secondsHours * 24;

let time_SecondIn,
  time_Second,
  time_SecondMinute,
  time_SecondHours,
  time_SecondDay;

//time_SecondIn = 274259

time_SecondIn = +prompt(
  "Please enter the seconds you want to display in the format D:HH:MM:SS = "
);

time_Second = Math.trunc(time_SecondIn / seconds);
time_Second = time_Second % 60;
time_Second = String(time_Second).padStart(2, "0");

time_SecondMinute = Math.trunc(time_SecondIn / secondsMinutes);
time_SecondMinute = time_SecondMinute % 60;
time_SecondMinute = String(time_SecondMinute).padStart(2, "0");

time_SecondHours = Math.trunc(time_SecondIn / secondsHours);
time_SecondHours = time_SecondHours % 24;
time_SecondHours = String(time_SecondHours).padStart(2, "0");

time_SecondDay = Math.trunc(time_SecondIn / secondsDay);
time_SecondDay = String(time_SecondDay).padStart(1, "0");

console.log(
  "Inserted seconds to be formatted as follows D:HH:MM:SS -->",
  time_SecondIn
);
console.log("Days:    ", time_SecondDay);
console.log("Hours:   ", time_SecondHours);
console.log("Minute:  ", time_SecondMinute);
console.log("Seconds: ", time_Second);
console.log(
  `The formatting of seconds ${time_SecondIn} inserted in Imput is --> ${time_SecondDay}:${time_SecondHours}:${time_SecondMinute}:${time_Second}`
);

alert(
  `The formatting of seconds ${time_SecondIn} inserted in Imput is --> ${time_SecondDay}:${time_SecondHours}:${time_SecondMinute}:${time_Second}`
);

alert(
  `The formatting of seconds ${time_SecondIn} inserted in Imput is --> Days: ${time_SecondDay} Hours: ${time_SecondHours} Minutes:${time_SecondMinute} Seconds: ${time_Second}`
);
