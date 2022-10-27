// ask year at user
const year = parseInt(prompt('Enter the year'));
// formula determine the day of the week for January 1
const dayOfTheWeek = (year + (Math.floor((year - 1) / 4)) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400)) % 7;
//day of the week
let day;
switch(dayOfTheWeek){
  case 0:
    day = 'Sunday'
    break;
  case 1:
    day = 'Monday'
   break;
  case 2:
    day = 'Tuesday'
   break;
  case 3:
    day = 'Wednesday'
   break;
  case 4:
    day = 'Thursday'
   break;
  case 5:
    day = 'Friday'
   break;
  case 6:
    day = 'Saturday'
   break;
}
alert(`The day of the week for January 1 of the year ${year} is ${day}`)