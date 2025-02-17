function askYear(){
    const year = parseInt( prompt( 'Enter the year whose day of the week of January 1st you want to know.', 'Example: 1986' ) );

    if ( ! isNaN( year ) && year > 0 ){
        return year;
    }

    console.log( 'Please enter a value greater than or equal to 1.' );
    return askYear();
}

function findDayOfTheWeek( year ){
    return ( year + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400) ) % 7;
}

function parseTextualDayOfTheWeek( day){
    const daysWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday'];
    return daysWeek[day];
}

function init(){
    const askedYear = askYear();

    const dayOfTheWeek = findDayOfTheWeek( askedYear );
    const textualDayOfTheWeek = parseTextualDayOfTheWeek( dayOfTheWeek );

    console.log( askedYear + 'January 1st was a ' +  textualDayOfTheWeek + '.' );
}

init();