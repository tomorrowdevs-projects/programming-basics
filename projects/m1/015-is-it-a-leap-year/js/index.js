//asking user the year and convert it in Int
let userYear = prompt("Insert a year and discover if it's a leap year or not.");
userYear = parseInt(userYear);

if (userYear % 400 == 0) {
    alert(userYear + " B.C. is a leap Year!");
  } else if (userYear % 100 == 0) {
    alert(userYear + " B.C. isn't a leap Year!");
  } else if (userYear % 4 == 0) {
    alert(userYear + " B.C. is a leap Year!");
  } else {
    alert(userYear + " B.C. isn't a leap Year!");
  }