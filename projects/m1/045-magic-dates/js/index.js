function rangeDate() {
  // range date 1/01/1900 - 31/12/1999
  const startDate = new Date("1900-1-1");
  const endDate = new Date("1999-12-31");
  for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
    // divide day, month, and year
    let newDay = date.getDate();
    let newMonth = date.getMonth();
    let newYear = date.getFullYear();
    magicDate(newDay, newMonth, newYear);
  }
}

function magicDate(day, month, year) {
  // split the last two digits in the year
  const newYear = year.toString().slice(-2);
  // calc day * month
  const newMonth = month + 1;
  const calcMagicDate = day * newMonth;
  // if calc === split year console.log date
  // console.log('calc magic date ' + calcMagicDate + ', year ' + newYear)
  if (calcMagicDate === parseInt(newYear)) {
    return console.log(`Magic date: ${day}-${newMonth}-${year}`);
  }
}

rangeDate();
