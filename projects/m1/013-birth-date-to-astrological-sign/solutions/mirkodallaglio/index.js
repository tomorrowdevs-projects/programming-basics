let birthdayMonth =isNumber(prompt('what zodiac sign are you?...write the month of birth here', 'Es.: 1 for January, 2 for Fabruary, Etc...'), 'month');
let birthdayDay =isNumber(prompt('what zodiac sign are you?', 'write the day of birth here'), 'day');

function isNumber (i,md){
    let parInt = parseInt(i);

    if(isNaN(parInt) || parInt === '' || parInt === null) return false;

    if(i.length > parInt.length) return false;

    if(md == 'day'){
        if(i > 0 && i < 32){
            return i;
        }else{
            return false;
        };
    }
    if(md == 'month'){
        if(i > 0 && i < 13){
            return i;
        }else{
            return false;
        };
    };
};

function calcZodiac(month, day) {

    const days = [20, 19, 21, 20, 21, 21, 23, 23, 23, 23, 22, 22];
    const signs = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"];
    month--
    if(month == 0 && day <= 19){
        month = 11;         
    }else if(day < days[month]){
        month--;
    };

    return signs[month];
};

if(birthdayDay && birthdayMonth) alert(calcZodiac(birthdayMonth, birthdayDay)); 
else alert('Something went wrong, you entered one numbers incorrectly ... try again'); 
