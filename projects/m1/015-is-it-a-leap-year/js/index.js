//variable declaration
let yearLeapUserIn=0;
let resultYearsLeep="";

yearLeapUserIn = parseInt(prompt("Insert the year to be verified"));

// if the inserted year is divided by 400 or by 4 and has a rest of 0 --> leap year
if (yearLeapUserIn % 400 === Number()) {
  resultYearsLeep = "\nThe " + yearLeapUserIn + " is a leap year\n";
} else if ((yearLeapUserIn % 100) === Number()) {  
  resultYearsLeep += "\nThe " + yearLeapUserIn + " is not a leap year\n";
} else if (yearLeapUserIn % 4 === Number()) { 
  resultYearsLeep += "\nThe " + yearLeapUserIn + " is a leap year\n";
} else {
  resultYearsLeep += "\nThe " + yearLeapUserIn + " is not a leap year\n";
}

console.log(resultYearsLeep);