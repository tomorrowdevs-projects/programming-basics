// The length of a month varies from 28 to 31 days. In this exercise you will create a program that reads the name of a month from the user as a string. Then your program should display the number of days in that month. Display “28 or 29 days” for February so that leap years are addressed.

const month = prompt('Inserisci il nome del mese in lettere');
const monthUppercase = month.charAt(0).toUpperCase() + month.slice(1);
//chiedo anche l'anno all'utente, per poter verificare quanti giorni avrà Febbraio
const year = prompt("Inserisci l'anno in numeri");

if (isNaN(year)) {
  alert("Inserisci correttamente l'anno");
}

//controllo se l'anno è bisestile
function checkYear(year) {
  if (year % 400 == 0 || (year % 4 == 0 && !(year % 100 == 0))) {
    alert('29 giorni');
  } else {
    alert('28 giorni');
  }
}

switch (monthUppercase) {
  case 'Gennaio':
    alert('31 giorni');
    break;
  case 'Febbraio':
    checkYear(year);
    break;
  case 'Marzo':
    alert('31 giorni');
    break;
  case 'Aprile':
    alert('30 giorni');
    break;
  case 'Maggio':
    alert('31 giorni');
    break;
  case 'Giugno':
    alert('30 giorni');
    break;
  case 'Luglio':
    alert('31 giorni');
    break;
  case 'Agosto':
    alert('31 giorni');
    break;
  case 'Settembre':
    alert('30 giorni');
    break;
  case 'Ottobre':
    alert('30 giorni');
    break;
  case 'Novembre':
    alert('30 giorni');
    break;
  case 'Dicembre':
    alert('31 giorni');
    break;

  default:
    alert('Inserisci correttamente il mese');
    break;
}
