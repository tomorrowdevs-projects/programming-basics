function monthDays(month, year) {
    let feb = 28;
    if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
      feb = 29;
    }
    let days = 0;
    switch (month) {
      case 1: 
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        days = 31;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        days = 30;
        break;
        case 2:
          days = feb;
          break;
    }
    return days;
  }
  
  function program() {
    let month = parseInt(prompt("Inserisci il numero del mese"));
    let year = parseInt(prompt("Inserisci l'anno a 4 cifre"));
    const numberDays = monthDays(month, year);
    document.getElementById('output').innerText = `Il mese scelto in base alla tua data ha ${numberDays} giorni`;
  }