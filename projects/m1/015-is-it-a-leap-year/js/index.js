//variable declaration
let yearLeapUserIn;

yearLeapUserIn = parseInt(prompt("Insert the year to be verified"));

// if the inserted year is divided by 400 or by 4 and has a remainder of 0 --> leap year
if (yearLeapUserIn % 400 == 0) {
  alert("The year inserted is a leap year.")
} else if (Math.ceil((yearLeapUserIn /100)-Math.trunc(yearLeapUserIn/100)) == 1) { // qui sorge il problema, non riesco a far restituire 1 al resto --> ho utilizzato questa riga di codice ma il programma non funziona, il resto dovrebbe essere = 1 -- o non vi é un modo per farlo diventare 1  --> potrei utilizzare  " if ( yearLeapUserIn != 1 )" ma volevo sapere se esiste un modo scusa la ripetizione di far restituire 1 al resto.
  alert("The year inserted is not a leap year")
} else if (yearLeapUserIn % 4 == 0) { // if the inserted year is divided by 4 and has a remainder of 0 --> leap year
  alert("The year inserted is a leap year")
}

// ********************* RAGIONAMENTO LOGICO CHE HO FATTO LEGGENDO L'ESERCIZIO *****************************
/*let year = parseInt(2066);
console.log("Year  --->", year);
console.log("Leap year         -->  rest 0  (NO  rest) --->  ", "Division", year / 400, " Rest", year % 400);
console.log("Not a leap year.  -->  rest 1  (YES rest) --->  ", "Division", year / 100, "Rest", year % 100);
console.log("Leap year         -->  rest 0  (NO  rest) --->  ", "Division", year / 4, "  Rest", year % 4);*/
/***************************************** CALCOLO PER RICAVARE *********************************************
yearLeapUserIn=parseInt(2066);
Math.ceil((yearLeapUserIn /100)-Math.trunc(yearLeapUserIn/100));
***********************************************************************************************************/