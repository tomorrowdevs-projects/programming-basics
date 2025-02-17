const yearsYoung = 10.5;
const yearsAdult = 4;

const year = parseInt(prompt("Quanti anni ha il cane?"));
let humanYear = 0;

if(year < 0)
    alert('Non puoi inserire un numero negativo');
else if (year <= 2)
    humanYear = year * yearsYoung;
else{
    const YearAdultTotal = year - 2;
    humanYear = (yearsYoung * 2) + (YearAdultTotal * yearsAdult);
}

alert('Il tuo cane ha ' + humanYear + " anni.");
