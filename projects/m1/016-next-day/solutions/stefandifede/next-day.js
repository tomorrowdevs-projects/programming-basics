let userYear = Math.floor(prompt("Insert the year"));
let userMonth = Math.floor(prompt("Insert the Month"));
let userDay = Math.floor(prompt("Insert the Day"));

//array of months with 30 days
const monthsOf30 = [4, 6, 9, 11]

//declaring a variable to check if inserted year is leap or not
let isLeap;
function isItLeap() {
    if (userYear % 400 == 0 || userYear % 100 != 0 && userYear % 4 == 0) {
           isLeap = true
    } else {
           isLeap = false
    }
}
isItLeap();


function monthOf28Days () {
    //checking if inserted day is a valid day, considering if the year is leap or not
    if ((userDay > 28 && isLeap == false) || (userDay > 29 && isLeap == true)) {
        alert("inserted date is invalid");
    /*if inserted day it's correct, add 1 day and change month if necessary*/
    } else if ((userDay + 1 > 28 && isLeap == false) || (userDay + 1 > 29 && isLeap == true)) {
        userDay = 1;
        userMonth = userMonth + 1;
        alert(userYear + "-" + userMonth + "-" + userDay);
    } else {alert(userYear + "-" + userMonth + "-" + Math.floor(userDay + 1))}
}

function monthsOf30Days () {
    if (userDay > 30) {
        alert("inserted date is invalid");
    } else if (userDay + 1 >= 30) {
        userDay = 1;
        userMonth = userMonth + 1;
        alert(userYear + "-" + userMonth + "-" + userDay);
    } else {alert(userYear + "-" + userMonth + "-" + Math.floor(userDay + 1))}
}

function monthsOf31Days () {
    if (userDay > 31) {
        alert("inserted date is invalid");
    /*if inserted day it's correct, add 1 day and change month and if necessary*/
    } else if (userDay + 1 >= 31) {
        userDay = 1;
        userMonth = userMonth + 1;
        alert(userYear + "-" + userMonth + "-" + userDay);
    } else {alert(userYear + "-" + userMonth + "-" + Math.floor(userDay + 1))}
}

function changeYear () {
    if (userDay > 31) {
        alert("inserted date is invalid");
    } else if (userDay + 1 > 31) {
        userDay = 1;
        userMonth = 1;
        userYear = userYear + 1;
        alert(userYear + "-" + userMonth + "-" + userDay);
    } else {alert(userYear + "-" + userMonth + "-" + Math.floor(userDay + 1))}
}

function changeMonth(){
    //if inserted month is february
    if (userMonth == 2) { 
        monthOf28Days()
    /*if inserted month is a month with 30 days*/ 
    } else if (monthsOf30.includes(userMonth)) {
        monthsOf30Days()
    /* if inserted month is not a month with 30 days (excluding December and February)*/
    } else if (monthsOf30.includes(userMonth) == false && userMonth != 12 && userMonth != 2) {
        monthsOf31Days()
    /*if inserted month is december*/
    } else if (userMonth == 12) {
        changeYear()
    }
}

changeMonth()