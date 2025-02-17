function askMonth(){
    return prompt( 'In which month were you born? ', 'Example: June' );
}

function askDay(){
    return prompt( 'And what day? ', 'Example: 7' );
}

function capitalizeMonthName( value ){
    value = value.trim();
    let capitalizedName = '';

    for (let i = 0; i < value.length; i++) {

        if ( i === 0){
            capitalizedName += value.charAt(i).toUpperCase();
        } else {
            capitalizedName += value.charAt(i).toLowerCase();
        }

    }

    return capitalizedName;
}

function formatDay( value ){
    value = value.trim();
    value = parseInt( value );

    return value;
}

function verifyAskedMonth( month, monthList ){
    if ( month in monthList ){
        return month;
    }

    console.log( 'The month entered doesn\'t exists.' );
    return verifyAskedMonth( capitalizeMonthName( askMonth() ), monthList );
}

function verifyAskedDay( day, month, monthList ){
    
    if( day > 0 && day <= monthList[month]['duration'] ){
        return day;
    }

    console.log( 'The day entered isn\'t valid.' );
    return verifyAskedDay( formatDay( askDay() ), month, monthList );
}

function createMonthsList(){
    const monthsList = {
        'January': {
            'secondSignStartingDay': 20, 
            'duration': 31
        },
        'February': {
            'secondSignStartingDay': 19, 
            'duration': 29
        },
        'March': {
            'secondSignStartingDay': 21, 
            'duration': 31
        },
        'April': {
            'secondSignStartingDay': 20, 
            'duration': 30
        },
        'May': {
            'secondSignStartingDay': 21, 
            'duration': 31
        },
        'June': {
            'secondSignStartingDay': 21, 
            'duration': 30
        },
        'July': {
            'secondSignStartingDay': 23, 
            'duration': 31
        },
        'August': {
            'secondSignStartingDay': 23, 
            'duration': 31
        },
        'September': {
            'secondSignStartingDay': 23, 
            'duration': 30
        },
        'October': {
            'secondSignStartingDay': 23, 
            'duration': 31
        },
        'November': {
            'secondSignStartingDay': 22, 
            'duration': 30
        },
        'December': {
            'secondSignStartingDay': 22,
            'duration': 31
        }
    };

    return monthsList;
}

function createHoroscopeList( monthsList ){

    zodiacSignsList = ['Capricon','Aquarius','Pisces','Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius']; 

    counter = 0;
    for (const month in monthsList) {
        let secondZodiacSign = zodiacSignsList[counter + 1];

        if ( counter === ( zodiacSignsList.length - 1 ) ){
            secondZodiacSign = zodiacSignsList[0]
        }

        monthsList[month]['signs'] = [ zodiacSignsList[counter], secondZodiacSign ];

        counter++;
    }

    return monthsList;
}

function findZodiacSign( month, day, horoscope ){

    const secondSignStartingDay = horoscope[month]['secondSignStartingDay'];
    const duration = horoscope[month]['duration'];
    const signs = horoscope[month]['signs'];
    let sign  = '';

    if ( day < secondSignStartingDay ){
        sign = signs[0];
    } else {
        if ( day <= duration){
            sign = signs[1];
        }
    }

    return sign;
}

function printZodiacSign( sign ){
    console.log( 'Your zodiac sign is ' + sign );
}

function init(){
    const months = createMonthsList();

    const askedMonth = verifyAskedMonth( capitalizeMonthName( askMonth() ), months ) ;
    const askedDay = verifyAskedDay( formatDay( askDay() ), askedMonth, months ) ;

    const horoscopeList = createHoroscopeList( months );
    const zodiacSign = findZodiacSign( askedMonth, askedDay, horoscopeList );
    
    printZodiacSign( zodiacSign );
}

init();