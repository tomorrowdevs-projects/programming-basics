let year = prompt("Choose an year")

let day_of_the_week = (year + Math.floor((year - 1) / 4)
 - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400)) % 7

if ( day_of_the_week === 0) {console.log("Sunday")}
else if ( day_of_the_week === 1) {console.log("Monday")}
else if ( day_of_the_week === 2) {console.log("Tuesday")}
else if ( day_of_the_week === 3) {console.log("Wednesday")}
else if ( day_of_the_week === 4) {console.log("Thursday")}
else if ( day_of_the_week === 5) {console.log("Friday")}
else if ( day_of_the_week === 6) {console.log("Saturday")}