//variable declaration
let yearLeapUserIn;

yearLeapUserIn = parseInt(prompt("Insert the year to be verified"));

// if the year is divisible by 400 with rest 0 --> leap year or the year is ( divisible by 100 with rest so it is different from 0 --> 1 ) which is different from zero and the year is divisible by 4 and the rest is 0 --> leap year
if ((yearLeapUserIn % 400 == 0) || (!(yearLeapUserIn % 100 == 0) && (yearLeapUserIn % 4 == 0))) {
  alert("The year inserted is a leap year");
} else { // else it is a leap year
  alert("The year inserted is not a leap year");
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