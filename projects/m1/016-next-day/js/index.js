let endYear;
let leapYear;
let days30;
let days31;

const userYear=+prompt('insert year in format YYYY');
const userMonth=+prompt('insert month in format MM ');
const userDay=+prompt('insert day in format DD');



//fine anno
if (userDay===31 && userMonth===12 ) {

    endYear=true;
} else {

  endYear=false;
}




//bisestile o no
if ((userYear%400===0)|| userYear%4===0 && userYear%100!=0) {

  leapYear=true;
  
} else if ( (userYear%400!=0)|| userYear%4!=0 && userYear%100===0) {

  leapYear=false;
  
} 
  




//30 giorni
if ( userMonth===4||userMonth===6||userMonth===9||userMonth===11) {

    days30=true;
  
} else {

  days30=false;
  
}



//31 giorni
if ( userMonth===1||userMonth===3||userMonth===5||userMonth===7||userMonth===8||userMonth===10) {

  days31=true;
  
} else {

  days31=false;
  
}


if (endYear) {

  alert('it is a new year:01-01-'+(userYear+1));
  
} else if (leapYear && userDay===28 && userMonth===2) {

  alert('next day is:29-02-'+ userYear);
  
} else if (!leapYear && userDay===28 && userMonth===2) {

  alert('next day is:01-03' + '-' + userYear);
  
  
} else if (days30 && userDay===30 ) {

  alert('next day is:01-' + (userMonth+1) + '-' + userYear);
  
}   else if (days31 && userDay===31) {

  alert('next day is:01-'+ (userMonth+1) +'-'+ userYear);
  
} else if (userDay===29 && userMonth===2 && leapYear) {

  alert('next day is:01-03' + '-' + userYear);
  
} else if (userDay===29 && userMonth===2 && !leapYear) {

  alert('it is not a truly date,insert the correct leap year');
  
}  else  {

  alert('next day is:'+ (userDay+1) + '-'  +userMonth + '-' + userYear);
  
}
