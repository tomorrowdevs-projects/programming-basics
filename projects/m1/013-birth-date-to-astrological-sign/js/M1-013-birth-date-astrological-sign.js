// declare variables used   ***** M1-013-birth-date-to-astrological-sign.js *****
let date_BirthUser, dey_BirthUser, month_BirthUser;

// insert the date of birth to calculate the zodiac sign
date_BirthUser = prompt(`Insered the date of birth in the format "DD/Month" `).toLowerCase();

// using the split() function which transforms the date of birth into an array and then takes the day and month of birth 
date_BirthUser = date_BirthUser.split("");

//pick the day by adding the first and second elements of the array created by applying the ,split() function to the date inserted
dey_BirthUser = date_BirthUser[0] + date_BirthUser[1]

//pick the month by adding the third, fourth, fifth element of the array created by applying the ,split() function to the date inserted
month_BirthUser = date_BirthUser[3] + date_BirthUser[4] + date_BirthUser[5]

//calculation of the zodiac sign from DD and MM
 if (dey_BirthUser >= 22 && month_BirthUser == 'dec' || dey_BirthUser <= 19 && month_BirthUser == 'jan') {
  alert(`\nCapricorn \u{2651}\n`)
} else if (dey_BirthUser >= 20 && month_BirthUser == 'jan' || dey_BirthUser <= 18 && month_BirthUser == 'feb') {
  alert(`\nAquarius \u{2652}\n`)
} else if (dey_BirthUser >= 19 && month_BirthUser == 'feb' || dey_BirthUser <= 20 && month_BirthUser == 'mar') {
  alert(`\nPisces \u{2653}\n`)
} else if (dey_BirthUser >= 21 && month_BirthUser == 'mar' || dey_BirthUser <= 19 && month_BirthUser == 'apr') {
  alert(`\nAries \u{2648}\n`)
} else if (dey_BirthUser >= 20 && month_BirthUser == 'apr' || dey_BirthUser <= 20 && month_BirthUser == 'may') {
  alert(`\nTaurus \u{2649}\n`)
} else if (dey_BirthUser >= 21 && month_BirthUser == 'may' || dey_BirthUser <= 20 && month_BirthUser == 'jun') {
  alert(`\nGemini \u{264A}\n`)
} else if (dey_BirthUser >= 21 && month_BirthUser == 'gun' || dey_BirthUser <= 22 && month_BirthUser == 'jul') {
  alert(`\nCancer \u{264B}\n`)
} else if (dey_BirthUser >= 23 && month_BirthUser == 'jul' || dey_BirthUser <= 22 && month_BirthUser == 'aug') {
  alert(`\nLeo \u{26CE}\n`)
} else if (dey_BirthUser >= 23 && month_BirthUser == 'aug' || dey_BirthUser <= 22 && month_BirthUser == 'set') {
  alert(`\nVirgo \u{264D}\n`)
} else if (dey_BirthUser >= 23 && month_BirthUser == 'set' || dey_BirthUser <= 22 && month_BirthUser == 'oct') {
  alert(`\nLibra \u{264E}\n`)
} else if (dey_BirthUser >= 23 && month_BirthUser == 'oct' || dey_BirthUser <= 21 && month_BirthUser == 'nov') {
  alert(`\nScorpio \u{264F}\n`)
} else if (dey_BirthUser >= 22 && month_BirthUser == 'nov' || dey_BirthUser <= 21 && month_BirthUser == 'dec') {
  alert(`\nSagittarius \u{2650}\n`)
} else {
   alert(`\nError! --> Hai inserito dati non validi!" \u{1F47F}\n`) 
}