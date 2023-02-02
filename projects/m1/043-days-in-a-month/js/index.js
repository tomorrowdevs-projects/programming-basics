for(let year = 1900; year <= 2000; year++){
  if(checkIsLeapYear(year)){
      for(let month = 1; month <= 12; month++){
          for(let day = 1; day <= printDay(month, checkIsLeapYear); day++){
              if(magicDate(day, month, year)){
                  console.log(`${day}/${month}/${year} is a magic date`);
              }
          }
      }
  }
}

function magicDate(day, month, year){

  return month * day === parseInt(year.toString().slice(-2));

}

function printDay(month, isLeapYear){

  let days = 0;

  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31;
      break;
    case 2:
      isLeapYear ? days = 29 : days = 28;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
    default:
      break;
  }

  return days;

}

function checkIsLeapYear(year) {

  if (year % 400 === 0){
      return true;
  } else if(year % 100 === 0){
      return false;
  } else if(year % 4 === 0){
      return true;
  } else {
      return false;
  }

}