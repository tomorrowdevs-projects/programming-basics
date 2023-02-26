const secondsMinutes = 60;
const secondsHours = 60 * secondsMinutes;
const secondsDay = 24 * secondsHours;

let daysIn, hoursIn, minutesIn, secondsIn, ds, hs, ms, secondTot;

daysIn = +prompt("Insert Days");
hoursIn = +prompt("Insert Hours");
minutesIn = +prompt("Insert Minutes");
secondsIn = +prompt("Insert Seconds");

ds = daysIn * secondsDay;
hs = hoursIn * secondsHours;
ms = minutesIn * secondsMinutes;

secondTot = ds + hs + ms + secondsIn;
console.log("\nThe total seconds are: ", secondTot);

alert(`\nTotal seconds are: ${secondTot}\n`);
//window.alert(`\nTotal seconds are: ${secondTot}\n`);

//                     CHECKING CORRECT DATA
console.log("\n \n CHECKING CORRECT DATA \n");
console.log("Seconds for days    ", ds);
console.log("Seconds for hours   ", hs);
console.log("Seconds for minutes ", ms);
console.log("Seconds             ", secondsIn);
console.log("Total seconds are:  ", secondTot);

//                     CHECK INPUT DATA:
console.log("\n \n CHECK INPUT DATA: \n");
console.log(daysIn, " Day");
console.log(hoursIn, " Hour");
console.log(minutesIn, " Minutes");
console.log(secondsIn, " Seconds");
