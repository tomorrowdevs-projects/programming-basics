/*Write a function that determines how many days there are in a particular month. 
Your function will take two parameters: The month as an integer between 1 and 12, and the year as a four digit integer. 
Ensure that your function reports the correct number of days in February for leap years. 
Include a main program that reads a month and year from the user and displays the number of days in that month.*/

function getDayMonth(month, year) {
  
    const daysmonth = [31, 28, 31, 30, 31, 30, 31, 31 ,30 , 31, 30, 31];
    const indexDaysmonth = month -1;
    
    if (indexDaysmonth < 0 || indexDaysmonth > 11) {
      alert("Sorry you typed an invalid month. Please try again.");
    
    } else if (year.length > 4) {
      alert("Sorry you typed an invalid year. Please try again.");
  
    } else if (indexDaysmonth == 1 && year % 400 == 0 || year %100 != 0 && year %4 == 0) {
        month = 29;
        return month;
      
    } else {
        return daysmonth[indexDaysmonth];
    }
} 
  
const dateUser = prompt("Type your date (in format MM YYYY").split(` `);
  
const month = dateUser[0]
const year = dateUser[1]
  
  
alert(getDayMonth(month, year));
  
  
/* -----
Short version witch new date function and no without if verification.
  
let year = parseInt(prompt('Please, enter a year: '));
let month = parseInt(prompt('Please, enter a month: '));
  
function getDays (year, month) {
    
      let getDays = new Date(year, month, 0).getDate();
      alert(getDays);
    
}
  
getDays (year, month);
  
-----*/  