function askYear(){
    const year = parseInt( prompt( 'Enter a year.', 'Example: 1986' ) );

    if ( ! isNaN( year ) && year >= 0 ){
        return year;
    }
    console.log( 'Please enter a positive integer.');
    return askYear();
}

function askMonth(){
    const month = parseInt( prompt( 'Enter a month.', 'Example: 9' ) );

    if ( ! isNaN( month ) && month > 0 && month <= 12 ){
        return month;
    }
    console.log( 'Please enter a positive integer between 1 and 12.');
    return askMonth();
}

function askDay( duration ){
    const day = parseInt( prompt( 'Enter a day. ', 'Example: 15' ) );

    if ( ! isNaN( day ) && day > 0 && day <= duration ){
        return day;
    }

    console.log( 'Please enter a positive integer between 1 and ' + duration + '.' );
    return askDay( duration );
}

function isLeapYear( value ){
    if ( value % 400 === 0){
        return true;
    }

    if ( value % 100 !== 0 && value % 4 === 0 ){
        return true;
    }

    return false;
}

function successorElement( day, month, year, lastDay, lastMonth){

    let successorDay = 1;
    let successorMonth = 1;
    let successorYear = year;

    if( ! lastDay ){
        successorDay = day + 1;
        successorMonth = month;
    } else {
        if ( ! lastMonth ) {
            successorMonth = month + 1;
        } else {
            successorYear++;
        }
    }

    return [successorYear, successorMonth, successorDay ];
}

function init(){
    const monthsDurationList = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]; // First element is Janauary duration, last one is December duration

    const askedYear = askYear();
    // Change Febraury duration if entered year is a leap year
    if( isLeapYear( askedYear ) ){
        monthsDurationList[1] = 29; 
    }

    const askedMonth = askMonth();
    const monthDuration = monthsDurationList[askedMonth - 1];

    const askedDay = askDay( monthDuration );

    const successor = successorElement( askedDay, askedMonth, askedYear, askedDay === monthDuration, askedMonth === monthsDurationList.length);

    const [year, month, day] = successor;
    
    console.log( 'The successor day is: ' + year + '/' + String( month ).padStart(2, '0') + '/' + String( day ).padStart(2, '0') + '.' );

}

init();