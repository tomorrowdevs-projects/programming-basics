function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  

  function findDates() {
  
    let result = [];
  
    for (let year = 1900; year < 2000; year++) {
      let daysinmonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      for (let month = 1; month <= 12; month++) {
        for (let day = 1; day <= daysinmonth[month - 1]; day++) {
          if (day * month == year % 100) {
            result.push(`${day}-${month}-${year}`);
          }
        }
      }
    }
  
    return result;
  }
  
  function program() {
    const dates = findDates();
    document.getElementById('output').innerText = dates.join("\n");
  }
  