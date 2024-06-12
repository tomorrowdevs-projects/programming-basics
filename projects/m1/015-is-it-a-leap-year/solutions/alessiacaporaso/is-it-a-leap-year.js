// reads a year from the use
const userChoiceYear = parseInt(prompt('Please, enter the year:'))
// year divisible by 400 is leap year or year divisible by 4 is a leap year
if(userChoiceYear % 400 === 0 || userChoiceYear % 4 === 0){
  alert(`${userChoiceYear} is a leap year`);
} else if(userChoiceYear % 100 !== 0){
// year divisible by 100 is not a leap year
  alert(`${userChoiceYear} is not a leap year`);
} else {
  alert('Error! Try again.')
}