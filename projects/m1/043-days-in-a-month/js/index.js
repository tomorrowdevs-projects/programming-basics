// determines how many days there are in a particular month
// check leap year
function daysInMonth(userMonth, userYear) {
  const month = parseInt(userMonth);
  const year = parseInt(userYear);
  let days = "The days in month are ";
  switch (month) {
    case 4:
    case 7:
    case 9:
    case 11:
      days += "30";
      break;
    case 2:
      if (year % 4 === 0 || (year % 400 === 0 && year % 100 !== 0)) {
        days += "29";
      } else {
        days += "28";
      }
      break;
    default:
      days += "31";
      break;
  }
  // check parameters: month(1-12), year(4 digits)
  let message = "";
  if (month >= 1 && month <= 12 && userYear.length === 4) {
    message = days;
  } else {
    message = "Error";
  }
  return alert(message);
}

console.log(`${daysInMonth(prompt("Please enter a month"), prompt("Please enter a year"))}`);
