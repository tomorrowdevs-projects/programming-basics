//A magic date is a date where the day multiplied by the month is equal to the two digit year. For example, June 10, 1960 is a magic date because June is the sixth month, and 6 times 10 is 60, which is equal to the two digit year. Write a function that determines whether or not a date is a magic date. Use your function to create a main program that finds and displays all of the magic dates in the 20th century.

const userYear = String(prompt("inserisci l'anno"));
const userMonth = prompt('Inserisci il numero del mese');
const userDay = prompt('Inserisci il giorno');

function isMagicDate(year, month, day) {
  const yearTwoDigits = year.slice(-2);
  console.log(yearTwoDigits);
  if (month * day == yearTwoDigits) {
    alert(` ${year} ${month} ${day} is a magic date`);
  } else {
    alert('La data inserita non è magica');
  }

  const start = new Date('01/01/1901');
  const end = new Date('01/01/2001');
  let loop = new Date(start);
  while (loop <= end) {
    let newDate = loop.setDate(loop.getDate() + 1);
    loop = new Date(newDate);
    const year = loop.getFullYear();
    const lastTwoDigitsYear = loop.getFullYear().toString().slice(-2);
    const monthNumber = loop.getMonth() + 1;
    const dayOftheMonth = loop.getDate();
    if (monthNumber * dayOftheMonth == lastTwoDigitsYear) {
      console.log(` ${year} ${monthNumber} ${dayOftheMonth} is a magic date`);
    }
  }
}

isMagicDate(userYear, userMonth, userDay);
