//variable declaration
let yearLeapUserIn;

yearLeapUserIn = parseInt(prompt("Insert the year to be verified"));

// if the inserted year is divided by 400 or by 4 and has a rest of 0 --> leap year
if (yearLeapUserIn % 400 == 0) {
  alert("The year inserted is a leap year.");
  } else if  ((yearLeapUserIn % 100) != 0)  { // else if the year is divisible by 100 and has rest and is different from 0 --> non-leap year 
  alert("The year inserted is not a leap year.");
} else if (yearLeapUserIn % 4 == 0) { // if the inserted year is divided by 4 and has a rest of 0 --> leap year
  alert("The year inserted is a leap year.")
} else {
    alert("The year inserted is not a leap year.");
}

// ********************* RAGIONAMENTO LOGICO CHE HO FATTO LEGGENDO L'ESERCIZIO *****************************
/*
let year = parseInt(2066);
console.log("Year  --->", year);
console.log("Leap year         -->  rest 0  (NO  rest) --->  ", "Division", year / 400, " Rest", year % 400);
console.log("Not a leap year.  -->  rest 1  (YES rest) --->  ", "Division", year / 100, "Rest", year % 100);
console.log("Leap year         -->  rest 0  (NO  rest) --->  ", "Division", year / 4, "  Rest", year % 4);
*/
//**********************************************************************************************************