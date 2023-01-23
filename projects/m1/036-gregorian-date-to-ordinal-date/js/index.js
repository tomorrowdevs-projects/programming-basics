const day = parseInt(prompt("Enter a day"));
const month = parseInt(prompt("Enter a month"));
const year = parseInt(prompt("Enter a year"));

ordinalDate(day, month, year);

function ordinalDate(dayUser, monthUser, yearUser){

  let sumDays = 0;
  let isLeapYear = false;

  if ((0 == yearUser % 4) && (0 != yearUser % 100) || (0 == yearUser % 400)) {
      isLeapYear = true;
  }

  for(let i = 1; i < monthUser; i++){
    switch (i) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        sumDays += 31;
        break;
      case 2:
        isLeapYear ? sumDays += 29 : sumDays += 28;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        sumDays += 30;
        break;
      default:
        break;
    }
  }

  sumDays += dayUser;

  alert("The date " + dayUser + "/" + monthUser + "/" + yearUser + " corresponds to day number " + sumDays);

}