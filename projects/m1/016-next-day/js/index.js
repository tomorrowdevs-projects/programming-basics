///Input
let year = (parseInt(prompt("Chose an year")))
let month = (parseInt(prompt("Chose a month")))
if (month > 12){
    alert("It is not a month!")
}
let day = (parseInt(prompt("Chose a day")))
if (day > 31){
    alert("It is not a day!")
}
if (year !== parseInt(year) || month !== parseInt(month) || day !== parseInt(day) ) {
    alert("Write a number !")
}

/// Leap year 
if ((year % 400) === 0) {
  year = - year
}
else if ((year % 100) === 0) {
  year = year
}
else if ((year % 4) === 0) {
  year = - year
}
else year = year

/// Next day
if (year > 0 ) {
    if (month === 11 || month === 9 || month === 6 || month === 4 ) {
        if (day <= 29) { day = day +1}
        else { day = 1, month = month +1;}
    }
    else if (month === 2) {
        if (day <= 27) { day = day +1}
        else { day = 1, month = month +1;}
    }
    else  {
        if (day <= 30) { day = day +1}
        else if (day === 31 && month === 12) {day = 1, month = 1, year = year +1;}
        else { day = 1, month = month +1;}
    }
    console.log(`Next day:  ${year}-${month}-${day}`)
}
else {
    if (month === 11 || month === 9 || month === 6 || month === 4 ) {
        if (day <= 29) { day = day +1}
        else { day = 1, month = month +1;}
    }
    else if (month === 2) {
        if (day <= 28) { day = day +1}
        else { day = 1, month = month +1;}
    }
    else {
        if (day <= 30) { day = day +1}
        else if (day === 31 && month === 12) {day = 1, month = 1, year = year -1;}
        else { day = 1, month = month +1;}
    }
    year = -(+year),
    console.log(`Next day:  ${+year}-${month}-${day}`);
}


