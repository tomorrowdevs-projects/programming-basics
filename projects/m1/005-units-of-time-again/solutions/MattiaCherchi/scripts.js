const secInMinuts = 60;
const secInHours = 60 * secInMinuts;
const secInDay = 24 * secInHours;


let secUserSpent = +prompt('Enter how many seconds you spent');


let daysDisplayed = Math.floor(secUserSpent / secInDay);
secUserSpent %= secInDay;

let hrsDisplayed = Math.floor(secUserSpent / secInHours);
secUserSpent %= secInHours;

let minDisplayed = Math.floor(secUserSpent / secInMinuts);
secUserSpent %= secInMinuts

let secDisplayed = secUserSpent 

alert(`The total number of seconds spent in the format D:HH:MM:S is  
${daysDisplayed}:${("00" + hrsDisplayed).slice(-2)}:${("00" + minDisplayed).slice(-2)}:${("00" + secDisplayed).slice(-2)}`);