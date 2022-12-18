//asking user the day and month of birth
let inputYearByUser = prompt("Insert the year and discover if it is a leap year.");

//convert string in number
inputYearByUser = parseInt(inputYearByUser);

//try to divide it for 400, 100 and 4 and display the result
if(inputYearByUser % 400 == 0 && inputYearByUser % 100 != 0 && inputYearByUser % 4 == 0){
  alert(inputYearByUser + " is a leap Year!");
} else if(inputYearByUser % 100 != 0 && inputYearByUser % 4 == 0){
  alert(inputYearByUser + " is a leap Year!");
} else{
  alert(inputYearByUser + " is not a leap Year!");
}