//units of time again-m1-005


const user_digit=+prompt('insert number of second to be converted');

let seconds=user_digit % 60;
let SEC=seconds;


let minutes=(Math.floor(user_digit/60));
let MIN=minutes % 60;


let hours=(Math.floor(minutes/60));
let HOURS=hours % 24;


let DAYS=(Math.floor(hours/24));


alert(`your digit in format D:HH:MM:SS is: \n${DAYS}:${('00'+HOURS).slice(-2)}:${('00'+MIN).slice(-2)}:${('00'+SEC).slice(-2)} `);