/*The length of a month varies from 28 to 31 days. 
In this exercise you will create a program that reads the name of a month from the user as a string. 
Then your program should display the number of days in that month. 
Display “28 or 29 days” for February so that leap years are addressed.*/

const month30Day = ["april", "june", "september", "november"];
const month31Day = ["january", "march", "maj", "july", "august", "october", "december"];

const userMonth  = prompt("Enter your month here:", 0).toLowerCase()

if (userMonth === "febrary") {
    alert(`${userMonth} can have 28 or 29 days, depending on whether the year is bisxtile or not.`)
}  else if (month30Day.includes(userMonth)) {
    alert(`${userMonth} can have 30 days.`)
} else if (month31Day.includes(userMonth)) {
    alert(`${userMonth} can have 31 days.`)
} else {
    alert(`${userMonth} is not a month of the year. Maybe you have the wrong planet ; \)`)
}