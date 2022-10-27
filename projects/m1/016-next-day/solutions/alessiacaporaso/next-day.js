//date for exemple
const date = new Date();
const currentDate = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
// ask the user day, month and year
const choiseDay = prompt('Please, enter the day, month and year', currentDate);
// control the day
const userChoiseDate = choiseDay.split("-");
// divide the array with the date
const day = userChoiseDate[0];
const month = userChoiseDate[1];
const year = userChoiseDate[2];
// control the leap year and number of day
let numberDay;
switch (month) {
  case '4':
  case '6':
  case '9':
  case '11':
    numberDay = 30;
    break;
  case '2':
    if (year % 400 === 0 || year % 4 === 0 && currentYear % 100 !== 0) {
      numberDay = 29
    } else {
      numberDay = 28
    }
    break;
  default:
    numberDay = 31;
    break;
}
// control day, month and year
let newDay;
let newMonth;
let newYear;
if (day < numberDay) {
  newDay = +day + 1;
  newMonth = month;
  newYear = year;
} else if (day >= numberDay && month < 12) {
  newDay = 1;
  newMonth = +month + 1;
  newYear = year
} else {
  newDay = 1;
  newMonth = 1;
  newYear = +year + 1;
}
//display the date after the date choice of the user
alert(`The new date is ${newDay}-${newMonth}-${newYear}`)