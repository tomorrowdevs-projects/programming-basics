
let year = +prompt('Enter the year in numbers');
let month = +prompt('Enter the month in numbers');
let day = +prompt('Enter the day in numbers');

let month30 = [4,6,9,11];
let month31 = [1,3,5,7,8,10]
let february = 2;
let december = 12;

let leapYear;

// soluzione con array

if(
  (year % 400 == 0)||
  (year % 4 == 0 & year % 100 !=0)
){
  leapYear = true;
}else{
  leapYear = false;
}

if(!leapYear && month == february && day > 28){
  alert(`${year} is not a leap year`);

}else if (month30.includes(month) && day == 31){
  alert(`this month (${month}) has 30 days`);

}else if(month == december && day == 31){
  alert(`${(year +1)}-01-01`);

}else if(
  (month30.includes(month) && day == 30)||
  (month31.includes(month) && day == 31)||
  (!leapYear && month == february && day == 28) ||
  (leapYear && month == february && day == 29)
){
  alert(`${year}-${('00'+(month + 1)).slice(-2)}-01`);

}else{
  alert(`${year}-${('00'+(month)).slice(-2)}-${('00'+(day+1)).slice(-2)}`);
}


//soluzione senza array 

/*
if(!leapYear && month == february && day > 28){
  alert(`${year} is not a leap year`);

}else if ((month == 4 || month == 6 || month == 9 || month == 11) && (day == 31)){
  alert(`this month (${month}) has 30 days`);

}else if(month == december && day == 31){
  alert(`${(year +1)}-01-01`);

}else if(
  ((month == 4 || month == 6 || month == 9 || month == 11)&& (day == 30))||
  ((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10) && (day == 31))||
  (!leapYear && month == february && day == 28) ||
  (leapYear && month == february && day == 29)
){
  alert(`${year}-${('00'+(month + 1)).slice(-2)}-01`);

}else{
  alert(`${year}-${('00'+(month)).slice(-2)}-${('00'+(day+1)).slice(-2)}`);
}
*/
