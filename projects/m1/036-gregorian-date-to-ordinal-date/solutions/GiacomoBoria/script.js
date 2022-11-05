/*An ordinal date consists of a year and a day within it, both of which are integers. The year can be any year in the Gregorian calendar while the day within the year ranges from one, which represents January 1, through to 365 (or 366 if the year is a leap year) which represents December 31. Ordinal dates are convenient when computing differences between dates that are a specific number of days (rather than months. For example, ordinal dates can be used to easily determine whether a customer is within a 90 day return period, the sell-by date for a food-product based on its production date, and the due date for a baby.

Write a function named ordinalDate that takes three integers as parameters.

These parameters will be a day, month and year respectively. The function should return the day within the year for that date as its only result. Create a main program that reads a day, month and year from the user and displays the day within the year for that date. Your main program should only run when your file has not been imported into another program.*/

function ordinalDate(day, month, year) {
  
    const daysMounth = [31, 28, 31, 30, 31, 30, 31, 31 ,30 , 31, 30, 31];
  
    let ordinalDay = 0;
    
  for (i = 0; i < month; i++) {
    // Check for leap year
      if (year % 400 == 0 || year %100 != 0 && year %4 == 0) {
        daysMounth[1] = 29;
        ordinalDay += daysMounth[i];
       } else {
        ordinalDay += daysMounth[i];
      }
    
    } return ordinalDay + day;
  }
  // I use the date method to add an additional check in case of wrong date input
  const dateUser = new Date(prompt("Type your date in format YYYY MM DD"));
  
  const day = dateUser.getDate();
  // return 0-11 for array daysmounth
  const month = dateUser.getMonth();
  
  const year = dateUser.getFullYear();
  
  alert(ordinalDate(day, month, year))