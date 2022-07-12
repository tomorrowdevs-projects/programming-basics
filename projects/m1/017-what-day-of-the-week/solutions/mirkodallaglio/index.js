let year =isYear(prompt('Enter the year'));
let nameDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Fryday', 'Saturday'];
let thisYear = new Date().getFullYear();
let verb = '';

function isYear (i){
    let parInt = parseInt(i);
    if(isNaN(parInt) || parInt === '' || parInt === null) return false;
    if(i.length = parInt.toString().length && parInt.toString().length === 4) return parInt;

    return false;
};

(thisYear < year) ? verb = 'will be' : verb = 'was a';

if(year){
    let day_of_the_week = (year + Math.floor((year - 1) / 4) -Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400)) % 7
    alert(`January 1,${year} ${verb} ${nameDay[day_of_the_week]}`)
}else{
    alert('Something went wrong, you entered the year incorrectly ... try again');
};
