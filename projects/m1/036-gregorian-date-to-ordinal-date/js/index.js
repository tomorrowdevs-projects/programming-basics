function ordinalDate(day, month, year) {
    let leapYears = true;
    let myDay = 0;
    if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
      leapYears = true;
    } else {
      leapYears = false;
    }
  
    if (leapYears == true) {
      switch (month) {
        case 1:
            month = 0;
          break;
        case 2:
            month = 31;
          break;
        case 3:
            month = 31 + 29;
          break;
        case 4:
            month = 31 + 29 + 31;
          break;
        case 5:
            month = 31 + 29 + 31 + 30;
          break;
        case 6:
            month = 31 + 29 + 31 + 30 + 31;
          break;
        case 7:
            month = 31 + 29 + 31 + 30 + 31 + 30;
          break;
        case 8:
            month = 31 + 29 + 31 + 30 + 31 + 30 + 31;
          break;
        case 9:
            month = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31;
          break;
        case 10:
            month = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30;
          break;
        case 11:
            month = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31;
          break;
        case 12:
            month = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30;
          break;
      }
    } else {
      switch (month) {
        case 1:
            month = 0;
          break;
        case 2:
            month = 31;
          break;
        case 3:
            month = 31 + 28;
          break;
        case 4:
            month = 31 + 28 + 31;
          break;
        case 5:
            month = 31 + 28 + 31 + 30;
          break;
        case 6:
            month = 31 + 28 + 31 + 30 + 31;
          break;
        case 7:
            month = 31 + 28 + 31 + 30 + 31 + 30;
          break;
        case 8:
            month = 31 + 28 + 31 + 30 + 31 + 30 + 31;
          break;
        case 9:
            month = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31; 
          break;
        case 10:
            month = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30;
        break;
        case 11:
            month = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31;
        break;
        case 12:
            month = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30;
        break;
    }
  } 
  myDay = month + day;
  return myDay;
}
  

function calculateOrdinalDate() {
    const day = prompt("Inserisci un giorno");
    const month = prompt("Inserisci il mese");
    const year = prompt("Inserisci un anno");
  
    let finalDay = ordinalDate(parseInt(day), parseInt(month), parseInt(year));
    const outputElement = document.getElementById("output");
    outputElement.textContent = finalDay;
  }
