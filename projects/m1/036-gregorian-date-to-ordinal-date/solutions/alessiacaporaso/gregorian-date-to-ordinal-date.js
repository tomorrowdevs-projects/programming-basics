/*
Write a function named ordinalDate that takes three integers as parameters.
These parameters will be a day, month and year respectively. 
The function should return the day within the year for that date as its only result.
Create a main program that reads a day, month and year from the user and displays the day within the year for that date. 
Your main program should only run when your file has not been imported into another program.
*/

function isLeap(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return true;
  } else {
    return false;
  }
}
function ordinalDate(day, month, isLeap) {
  let numberDay = [];
  // create a variable with the number od day in a month    
  for (let i = 1; i < month; i++) {
    switch (i) {
      case 4:
      case 6:
      case 9:
      case 11:
        numberDay.push(30);
        break;
      case 2:
        if (isLeap === true) {
          numberDay.push(29);
        } else {
          numberDay.push(28);
        }
        break;
      default:
        numberDay.push(31);
        break;
    }
  }
  // sum all day in a months
  let sumDayInMonth = 0;
  for (let item of numberDay) {
    sumDayInMonth += item;
  }

  const calcordinalDate = sumDayInMonth + day;
  alert("The ordinal date is: " + calcordinalDate);
}

const date = prompt("Please, enter a date", "10/12/2022");
const splitDate = date.split("/");
const userDay = parseInt(splitDate[0]);
const userMonth = parseInt(splitDate[1]);
const userYear = parseInt(splitDate[2]);

ordinalDate(userDay, userMonth);
isLeap(userYear);
