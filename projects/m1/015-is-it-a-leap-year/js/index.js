//is it a leap of years-015

const userYear=prompt('Is it a leap year? Enter the year');
const leapYear='It is a leap year';
const notLeapYear='It is not a leap year';

if (userYear%400===0) {
    
  alert(leapYear);

} else if (userYear%4===0 && userYear%100!=0) {
    
  alert(leapYear);

} else {
    
  alert(notLeapYear);

}
