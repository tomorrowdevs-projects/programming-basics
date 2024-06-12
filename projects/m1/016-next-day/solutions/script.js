/*Write a program that reads a date from the user and computes its immediate successor. 
For example, if the user enters values that represent 2019-11-18 then your program should display a message indicating that the day immediately after 2019-11-18 is 2019-11-19. 
If the user enters values that represent 2019-11-30 then the program should indicate that the next day is 2019-12-01. 
If the user enters values that represent 2019-12-31 then the program should indicate that the next day is 2020-01-01. 
The date will be entered in numeric form with three separate input statements; one for the year, one for the month, and one for the day. 
Ensure that your program works correctly for leap years.*/

// User Input - associate a variable with the date as a string
const years = prompt("Insert a year in format YYYY", 0)
const mounth = prompt("Insert a year in format MM", 0)
const day = prompt("Insert a year in format DD", 0)

const dateSum = years + "-" + mounth + "-" + day;

// Associate a variable with the date as a string
const fullDate = new Date (Date.parse(dateSum))
// Set method date for next day
fullDate.setDate(fullDate.getDate() + 1);

// Output
alert(`${fullDate.toDateString()}`)