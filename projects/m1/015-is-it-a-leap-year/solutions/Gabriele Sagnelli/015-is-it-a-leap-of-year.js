//is-it-a-leap-of-years-015

const userYear=prompt('Is it a leap year? Here enter the year');


if(userYear%400==0) {
    alert('It is a leap year');
} else if (userYear%4==0 && userYear%100!=0) {
    alert('It is a leap year');
} else {
    alert('It is not a leap year');
}

