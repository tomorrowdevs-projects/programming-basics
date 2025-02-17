// courrent year
const date = new Date();
const currentYear = date.getFullYear()
// enter the name of the month
const userMonth = prompt('Please, enter the name of the month:').toLowerCase()
// display the number of days in the month selected by the user
switch(userMonth){
  case 'january':
  case 'march':
  case 'may':
  case 'july':
  case 'august':
  case 'october':
  case 'december':
    alert(`${userMonth} has 31 days`)
  break;
  case 'april':
  case 'june':
  case 'september':
  case 'november':
    alert(`${userMonth} has 30 days`)
  break;
// display different days for February 
  case 'february':
    if(currentYear % 400 === 0 || currentYear % 4 === 0 && currentYear % 100 !== 0){
        alert(`${userMonth} has 29 days`)
    } else {
        alert(`${userMonth} has 28 days`)
    }
  break;
  default:
    alert('Error! Try again.')
  break;
}
