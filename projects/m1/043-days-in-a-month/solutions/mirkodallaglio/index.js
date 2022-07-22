let month = prompt('Write the month (in number from 1 to 12)');
let year = prompt('Write the year (in number : yyyy)');

function daysForMonth (month, year){

    let isLeap = (year) => new Date(year, 1, 29).getDate() === 29;
    let month30 = ['11', '4', '6', '9'];
    console.log(month, year, isLeap(year));
    if(month30.includes(month)) return '30';
    else if (month === '2') return ((isLeap(year)) ? '29' : '28');
    else return '31';
};

if(/^([1-9]|1[0-2])$/.test(month) && /^([0-9]{4})$/.test(year)){

    alert(`The month ${month.padStart(2, 0)}/${year} has ${daysForMonth(month, year)} days`);

}else alert('You misspelled the month or year');
