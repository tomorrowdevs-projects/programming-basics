let year = prompt('Enter a year to find out if it is leap or not');

let correctYear = /^[0-9]{4}$/.test(year);

if(correctYear){
  if(
    (year % 400 == 0)||
    (year % 4 == 0 && year % 100 !=0 )
  ){
    alert(`${year} is a leap year`);
  }else{
    alert(`${year} is not a leap year`);
  }
}else{
  alert(`Error! Enter the year correctly`);
}