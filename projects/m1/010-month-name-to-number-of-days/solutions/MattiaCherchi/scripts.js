
let date = new Date();
let currentYear = date.getFullYear();

let month = prompt('Insert a month').toLocaleLowerCase();


/*
per veificare se l'anno è bisestile deve essere vera una delle due condizioni ovvero:
-(currentYear % 400 == 0) l'anno corrente deve essere divisibile per 400 oppure ( || )
-(currentYear % 4 == 0 && currentYear % 100 != 0) l'anno corrente deve essere divisibile per 4 e non divisibile per 100.

*/
//Soluzione con switch case 

switch(month){
  case 'february':
    if(
      month == 'february' &&
      (currentYear % 400 == 0)||
      (currentYear % 4 == 0 && currentYear % 100 != 0)
    ){
      alert(`${month} consists of 29 days `);
    }else {
      alert(`${month} consists of 28 days `);
    }
break;

  case "november":
  case "april":
  case "june":
  case "september":

  alert(`${month} consists of 30 days`)
  break;

  case "january":
  case "march":
  case "maj":
  case "july":
  case "august":
  case "october":
  case "december":

  alert(`${month} consists of 31 days`)
  break;      
     
    default:
    alert(`Error! ${month} is not a month!`);
}

//soluzione con if else if 

/*
if(
  month == 'november' ||
  month == 'april'    ||
  month == 'june'     ||
  month == 'september' 
){
  alert(`${month} consists of 30 days`)
}else if(
  month == 'jenaury' ||
  month == 'march'   ||
  month == 'maj'     ||
  month == 'july'    ||
  month == 'august'  ||
  month == 'october' ||
  month == 'december'
){
  alert(`${month} consists of 31 days`)
}else if(
  month == 'february' &&
  (currentYear % 400 == 0)||
  (currentYear % 4 == 0 && currentYear % 100 != 0)
){
  alert(`${month} consists of 29 days `)
}else{
  alert(`${month} consists of 28 days `)
}
*/