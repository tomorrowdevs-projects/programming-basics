let year = isDate(prompt('Enter the year'), 'year');
let month = isDate(prompt('Enter the month'), 'month');
let day = isDate(prompt('Enter the day'), 'day');
let date =new Date (year+'/'+month+'/'+day);

function isDate (i, ymd){
    let parInt = parseInt(i);

    if(isNaN(parInt) || parInt === '' || parInt === null) return false;
    if(i.length > parInt.toString().length) return false;
    if(ymd === 'year' && parInt.toString().length === 4) return parInt;

    if(ymd === 'month' && parInt > 0 && parInt < 13) return parInt;

    if(ymd === 'day' && parInt > 0 && parInt < 32) return parInt;
    return false;
};

if(year && month && day){
    if(date.toLocaleDateString('en-US') !== (month+'/'+day+'/'+year)){
        alert(`there is no day ${day} in ${date.toLocaleString('en', { month: 'long' })} ${year} !!`);
    }else{
        let tomorrow = new Date (date.getTime()+86400000);
        alert(`Tomorrow is ${tomorrow.toLocaleDateString('en-US')}`)
    };
}else{
    alert('Something went wrong, you entered date incorrectly ... try again');
};


