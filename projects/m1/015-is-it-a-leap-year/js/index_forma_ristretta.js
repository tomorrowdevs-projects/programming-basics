//variable declaration
let yearLeapUserIn;

yearLeapUserIn = parseInt(prompt("Insert the year to be verified"));

// if the inserted year is divided by 400 or by 4 and has a remainder of 0 --> leap year
if (yearLeapUserIn % 400 == 0 || yearLeapUserIn % 4 == 0) {
  alert("The year inserted is a leap year")
} else if (yearLeapUserIn != 0) { // if the inserted year is divided by 100 it has remainder ( other than 0 ) --> non-leap year
  alert("The year inserted is not a leap year")
}

// **************** QUI SOTTO VI É IL RAGIONAMENTO LOGICOCHE HO FATTO LEGGENDO L'ESERCIZIO *****************
/*let year = parseInt(1584);
console.log("Year  --->", year);
console.log("Leap year         -->  rest 0  (NO  rest) --->  ", "Division", year / 400, " Rest", year % 400);
console.log("Not a leap year.  -->  rest 1  (YES rest) --->  ", "Division", year / 100, "Rest", year % 100);
console.log("Leap year         -->  rest 0  (NO  rest) --->  ", "Division", year / 4, "  Rest", year % 4);*/
//***********************************************************************************************************