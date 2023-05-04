const year=prompt('insert year');

let dayWeek=(+year + Math.floor((year-1)/4) - Math.floor((year-1)/100) + Math.floor((year-1)/400))%7;


switch (dayWeek) {
  case(0):
    dayWeek='Sunday';
    break;
  case(1):
    dayWeek='Monday';
    break;
  case(2):
    dayWeek='Tuesday';
    break;
  case(3):
    dayWeek='Wednesday';
    break;
  case(4):
    dayWeek='Thursday';
    break;
  case(5):
    dayWeek='Friday';
    break;
  case(6):
    dayWeek='Saturday';
    

}

alert(`The day of the week for January 1 in the ${year} is ${dayWeek}` );
