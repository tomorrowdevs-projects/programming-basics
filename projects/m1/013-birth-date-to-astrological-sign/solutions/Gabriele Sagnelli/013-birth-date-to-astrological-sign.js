// birth-date-to-astrological-sign-m1-013

const month=prompt('enter your month of birth:','').toLowerCase();

const day=+prompt('enter your day of birth:','');

switch (month) {
    case 'december':
        if (day>=22){
            alert('your zodiac sign is capricorn');
        } else {
            alert('your zodiac sign is sagittarius');
        }
break;
    case 'january':
        if (day>=20){
            alert('your zodiac sign is acquarius');
        } else {
            alert('your zodiac sign is capricorn');
        }    
break;
    case 'february':
        if (day>=19){
            alert('your zodiac sign is pisces');
        } else {
            alert('your zodiac sign is acquarius');
        }    
break;
    case 'march':
        if (day>=21) {
            alert('your zodiac sign is aries');
        } else {
            alert('your zodiac sign is pisces');
        } 
break;
    case 'april':
        if (day>=20) {
            alert('your zodiac sign is taurus');
        } else {
            alert('your zodiac sign is aries');
        }          
break;
    case 'may':
        if (day>=21) {
            alert('your zodiac sign is gemini');
        } else {
            alert('your zodiac sign is taurus');
        }
break;
    case 'june':
        if (day>=21) {
            alert('your zodiac sign is cancer');
        } else {
            alert('your zodiac sign is gemini');
        }
break;
    case 'july':
        if (day>=23) {
            alert('your zodiac sign is leo');
        } else {
            alert('your zodiac sign is cancer');
        }
break;
    case 'august':
            if (day>=23) {
                alert('your zodiac sign is virgo');
            } else {
                ('your zodiac sign is leo');
            }        
break;
    case 'september':
        if (day>=23) {
            alert('your zodiac sign is libra');
        } else {
            ('your zodiac sign is virgo');
        }
break;
    case 'october':
        if (day>=23) {
            alert('your zodiac sign is scorpio');
        } else {
            alert('your zodiac sign is libra');
        }          
break;
    case 'november':
        if (day>=22) {
            alert('your zodiac sign is sagittarius');
        } else {
            alert('your zodiac sign is scorpio');
        }        
break;        
    }

//okay    


    

