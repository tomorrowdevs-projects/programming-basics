let monthUser = parseInt(prompt("Inserire un mese"));

while (isNaN(monthUser) || monthUser < 1 || monthUser > 12){
  monthUser = parseInt(prompt("Il mese inserito non è valdio. Inserire un mese"));
}

let yearUser = parseInt(prompt("Inserire anno"));

while (isNaN(yearUser) || yearUser.toString().length !== 4){
  yearUser = parseInt(prompt("Inserire anno"));
}

const isLeapYear = checkIsLeapYear(yearUser);
const totalDays = printDay(monthUser, isLeapYear);

alert(`Il mese ${monthUser} dell'anno ${yearUser} ha ${totalDays} giorni`);

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