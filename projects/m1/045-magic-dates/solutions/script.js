/*A magic date is a date where the day multiplied by the month is equal to the two digit year. For example, June 10, 1960 is a magic date because June is the sixth month, and 6 times 10 is 60, which is equal to the two digit year. Write a function that determines whether or not a date is a magic date. Use your function to create a main program that finds and displays all of the magic dates in the 20th century.*/

function getDayMonth(month, year) {

    const daysmonth = [31, 28, 31, 30, 31, 30, 31, 31 ,30 , 31, 30, 31];
    const indexDaysmonth = month -1;

    if (indexDaysmonth < 0 || indexDaysmonth > 11) {
      alert("Sorry you typed an invalid month. Please try again.");

    } else if (year.length > 4) {
      alert("Sorry you typed an invalid year. Please try again.");

    } else if (indexDaysmonth == 1 && year % 400 == 0 || year %100 != 0 && year %4 == 0) {
        month = 29;
        return month;

    } else {
        return daysmonth[indexDaysmonth];
    }
} 

function getMagicDate(day, month, year) {
  // convert year to string
  let yearToString = year.toString();
  if (day * month == yearToString.slice(2)) { // exploit the astra equality of javascript for this equality
    return true;
  } else {
    return false;
  }
}

for(y= 0; y <= 99; y++) {
  
let month = 1;
let year = 1900 + y;
  
  if (month < 12) {
      
    for(;month < 12; month++) {
      let dayMonth = getDayMonth(month, year);
        
      for (i = 1; i <= dayMonth; i++) {
            
        let day = i;
        if (getMagicDate(day, month, year) === true) {
          alert(`${day}-${month}-${year} it's a magic Date!`);
        } 
      } 
    }   
  }      
}