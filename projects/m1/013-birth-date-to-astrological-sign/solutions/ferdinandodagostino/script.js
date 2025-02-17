// The horoscopes commonly reported in newspapers use the position of the sun at the time of one’s birth to try and predict the future. This system of astrology divides the year into twelve zodiac signs, as outline in the table below: Write a program that asks the user to enter his or her month and day of birth. Then your program should report the user’s zodiac sign as part of an appropriate output message.

//  Zodiac Sign	Date Range
// Aquarius	January 20 to February 18
// Pisces	February 19 to March 20
// Aries	March 21 to April 19
// Taurus	April 20 to May 20
// Gemini	May 21 to June 20
// Cancer	June 21 to July 22
// Leo	July 23 to August 22
// Virgo	August 23 to September 22
// Libra	September 23 to October 22
// Scorpio	October 23 to November 21
// Sagittarius	November 22 to December 21
// Capricorn	December 22 to January 19

const month = prompt('Inserisci il tuo mese di nascita in lettere');

const monthUppercase = month.charAt(0).toUpperCase() + month.slice(1);

const day = parseInt(prompt('Inserisci il tuo giorno di nascita in numeri'));

//controllo se l'utente inserisce correttamente il nome del mese ed il giorno di nascita
checkDate(month, day);

const months = [
  'Gennaio',
  'Febbraio',
  'Marzo',
  'Aprile',
  'Maggio',
  'Giugno',
  'Luglio',
  'Agosto',
  'Settembre',
  'Ottobre',
  'Novembre',
  'Dicembre',
];

//controllo se quello che ha inserito l'utente è un mese corretto, confrontandolo con i mesi inseriti nell'array. Se il mese è valido, procedo a dare il segno zodiacale.
if (months.includes(monthUppercase)) {
  giveZodiacSign(monthUppercase);
} else {
  alert('Hai inserito un mese non valido');
}

function checkDate(month, day) {
  if (!isNaN(month)) {
    alert('Inserisci correttamente il tuo mese di nascita');
  }
  if (isNaN(day) || day <= 0) {
    alert('Inserisci correttamente il tuo giorno di nascita');
  }
}

function giveZodiacSign(month) {
  if (month == 'Gennaio') {
    if (day >= 20) {
      alert('Sei Acquario');
    } else if (day <= 19) {
      alert('Sei Capricorno');
    }
  }

  if (month == 'Febbraio') {
    if (day >= 19) {
      alert('Sei Pesci');
    } else if (day <= 18) {
      alert('Sei acquario');
    }
  }

  if (month == 'Marzo') {
    if (day >= 21) {
      alert('Sei Ariete');
    } else if (day <= 20) {
      alert('Sei Pesci');
    }
  }

  if (month == 'Aprile') {
    if (day >= 20) {
      alert('Sei Toro');
    } else if (day <= 19) {
      alert('Sei Ariete');
    }
  }

  if (month == 'Maggio') {
    if (day >= 21) {
      alert('Sei Gemelli');
    } else if (day <= 20) {
      alert('Sei Toro');
    }
  }

  if (month == 'Giugno') {
    if (day >= 23) {
      alert('Sei Cancro');
    } else if (day <= 20) {
      alert('Sei Gemelli');
    }
  }

  if (month == 'Luglio') {
    if (day >= 23) {
      alert('Sei Leon');
    } else if (day <= 22) {
      alert('Sei Cancro');
    }
  }

  if (month == 'Agosto') {
    if (day >= 23) {
      alert('Sei Virgo');
    } else if (day <= 22) {
      alert('Sei Leone');
    }
  }

  if (month == 'Settembre') {
    if (day >= 23) {
      alert('Sei Libra');
    } else if (day <= 22) {
      alert('Sei Virgo');
    }
  }

  if (month == 'Ottobre') {
    if (day >= 23) {
      alert('Sei Scorpione');
    } else if (day <= 22) {
      alert('Sei Libra');
    }
  }

  if (month == 'Novembre') {
    if (day >= 22) {
      alert('Sei Sagittario');
    } else if (day <= 21) {
      alert('Sei Scorpione');
    }
  }

  if (month == 'Dicembre') {
    if (day >= 22) {
      alert('Sei Capricorno');
    } else if (day <= 21) {
      alert('Sei Sagittario');
    }
  }
}
