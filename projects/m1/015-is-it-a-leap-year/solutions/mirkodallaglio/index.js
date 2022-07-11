let year =isNumber(prompt('is it a leap year?', 'write here the year'));

function isNumber (i){
    let parInt = parseInt(i);

    if(isNaN(parInt) || parInt === '' || parInt === null) return false;
    if(i.length > parInt.toString().length) return false;
    if(parInt.toString().length === 4) return parInt;
        else return false;
};

if(year){
    if(year % 400 === 0) alert(`The year ${year} is leap`);
    else if(year % 4 === 0) alert(`The year ${year} is leap`);
    else alert(`The year ${year} isn't leap`);  
}else alert('Something went wrong, you entered the year incorrectly ... try again');