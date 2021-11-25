let year = prompt("Insert a year!");
  
if (year % 400 == 0) {
alert("This is a leap year!");
} else if (year % 400 != 0 && year % 100 == 0) {
alert("This isn't a leap year!");
} else if (year % 100 != 0 && year % 4 == 0) {
alert("This is a leap year!");  
} else {
alert("This isn't a leap year!");  
}

// Versione più breve: inserisco tutte le condizioni in un'unica parentesi utilizzando gli operatori logici appropriati

let year = prompt("Insert a year!");
    
if ((year % 400 == 0) || year % 100 != 0 && year % 4 == 0) {
alert("This is a leap year!");
} else {
alert("This isn't a leap year!");    
}