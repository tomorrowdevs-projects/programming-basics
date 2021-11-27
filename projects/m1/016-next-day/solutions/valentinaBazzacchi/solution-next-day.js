let year = prompt("Insert a year in number!");
let month = prompt("Insert a month in number!"); 
let day = prompt("Insert a day in number!"); 

// condizione mesi da 30 giorni => true or false 
let days30Month;
if (month == 4 || month == 6 || month == 9 || month == 11) {
days30Month = true;
} else {
days30Month = false;
}

// condizione mesi da 31 giorni => true or false 
let days31Month;
if (!days30Month && month != 2) {
days31Month = true;
} else {
days31Month = false; 
}

// condizione scatto anno => true or false
let nextYear
if (month == 12 && day == 31) {
nextYear = true; 
} else {
nextYear = false;  
}

// condizione anno bisestile => true or false
let leapYear;
if ((year % 400 == 0) || year % 100 != 0 && year % 4 == 0) {
leapYear = true;
} else {
leapYear = false;    
}
 
// condizione scatto mese => true or false
let nextMonth;
if (month == 2 && ((day == 28 && !leapYear) || (day == 29 && leapYear))) {
nextMonth = true;
} else if ((day == 31 && days31Month) || (day == 30 && days30Month)) {
nextMonth = true;
} else {
nextMonth = false;         
} 
 
// riporto la data successiva combinando le diverse condizioni
if (!leapYear && month == 2 && day > 28) {
alert(year + " isn't a leap year!");
} else if (days30Month && day > 30){
alert("This month only has 30 days!"); 
} else if (!nextYear && !nextMonth) {
alert(year + " - " + ("00" + month).slice(-2) + " - " + ("00" + (+day + 1)).slice(-2));
} else if (!nextYear && nextMonth) {
alert(year + " - " + ("00" + (+month + 1)).slice(-2) + " - 01");
} else if (nextYear) {
alert((+year + 1) + " - 01 - 01");
} 