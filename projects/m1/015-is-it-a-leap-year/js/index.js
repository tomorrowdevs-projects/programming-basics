let year = prompt("Chose an year")

if ((year % 400) === 0) {console.log("Is a leap year!")}
else if ((year % 100) === 0) {console.log("It is not a leap year!")}
else if ((year % 4) === 0) {console.log("Is a leap year!")}
else {console.log("It is not a leap year!")}
