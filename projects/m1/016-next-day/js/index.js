// Get the date from the user
let year = parseInt(prompt("Enter the year:"));
let month = parseInt(prompt("Enter the month:"));
let day = parseInt(prompt("Enter the day:"));

// Defining the last day of the month

let lastDayOfTheMonth = 0;

if(month == 2){
  if(year % 400 == 0) {
      lastDayOfTheMonth = 29;
  }else if(year % 100 == 0) {
      lastDayOfTheMonth = 28;
  }else if(year % 4 == 0) {
      lastDayOfTheMonth = 29;
  }else{
      lastDayOfTheMonth = 28;
  }
}else if((month == 4) || (month == 6) || (month == 9) || (month == 11)){
  lastDayOfTheMonth = 30;
}else{
  lastDayOfTheMonth = 31;
}

//Calculate the next day

if((day > lastDayOfTheMonth) || (month > 12) || (year <= 0)){
  alert("Please reload page and insert a valid date.");
}else if(day < lastDayOfTheMonth){
  day += 1;
}else if(month == 12 && day == lastDayOfTheMonth){
  day = 1;
  month = 1;
  year += 1;
}else{
  day = 1;
  month += 1;
}

// Fix date format
if(day <= 9){
  day = "0" + day;
}
if(month <= 9){
    month = "0" + month;
}

alert("The next day is" + year + "-" + month + "-" + day);