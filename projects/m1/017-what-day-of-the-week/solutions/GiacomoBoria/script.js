/*The following formula can be used to determine the day of the week for January 1 in a given year:

day_of_the_week = (year + floor((year − 1) / 4) − floor((year − 1) / 100) + floor((year − 1) / 400)) % 7

The result calculated by this formula is an integer that represents the day of the week. Sunday is represented by 0. The remaining days of the week following in sequence through to Saturday, which is represented by 6.

Use the formula above to write a program that reads a year from the user and reports the day of the week for January 1 of that year. The output from your program should include the full name of the day of the week, not just the integer returned by the formula.*/

const year = prompt("Insert a year", 0);
let dayOfWeek;

const numberOfWeek = (year + (Math.floor((year - 1) / 4)) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400)) % 7;
console.log(dayOfWeek)

switch (numberOfWeek) {
  case (0):
    dayOfWeek = "Sunday";
    break;
  case (1):
    dayOfWeek = "Monday";
    break;
  case (2):
    dayOfWeek = "Tuesday";
    break;
  case (3):
    dayOfWeek = "Wednesday";
    break;
  case (4):
    dayOfWeek = "Thursday";
    break;
  case (5):
    dayOfWeek = "Friday";
    break;
  case (6):
    dayOfWeek = "Saturday";
    break;
}

alert( `The day of the week for January 1 of the year ${year} is ${dayOfWeek}`);