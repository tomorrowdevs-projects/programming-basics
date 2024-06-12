let day = (prompt('Ordinal date : enter the day:')).padStart(2,0);
let month = (prompt('Ordinal date : enter the month:')).padStart(2,0);
let year = prompt('Ordinal date : enter the year:');

function ordinalDate (day, month, year){
    let dateToMs = new Date(year+'/'+month+'/'+day).getTime();
    let firstDayForYear = new Date(year+'/'+1+'/'+1).getTime();
    return ((dateToMs - firstDayForYear) / 86400000 +1).toFixed(0);
}

if(/^[0-9]+$/.test(day) && /^[0-9]+$/.test(month) && /^[0-9]+$/.test(year)){

    if(!isNaN(ordinalDate(day,month,year))) alert(`The ordinary date for ${day}/${month}/${year} is ${ordinalDate(day,month,year)}`);
    else alert(`the ${day}/${month}/${year} does not exist`);

}else alert('You did not write the date correctly, try again');

