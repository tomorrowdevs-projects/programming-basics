// const prompt = require("prompt-sync")({ sigint: true}) ;

function verifyHours( hours ){
    if( Number.isInteger( hours ) ){

        if( hours < 1 || hours > 12 ){
            console.log('Wrong hour data.')
            return false;
        }
        return true;
            
    }

    return false;
}

function verifyMinutes( minutes ){
    if( Number.isInteger( minutes ) ){
        if( minutes < 0 || minutes > 59 ){
            console.log('Wrong minute data.')
            return false;
        }

        return true;
    } 

    return false;
}

function firstLetterUppercase( text ){
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function addTime( start, duration, startingDay ){
    // JavaScript does not allow the use of required parameters, alternatively we check that they are different from undefined
    if( start === undefined ){
        console.log( 'You must enter a start time in the 12-hour clock format (ending in AM or PM).');
        return;
    }

    if( duration === undefined ){
        console.log( 'You must enter a duration time that indicates the number of hours and minutes.');
        return;
    }

    const daysWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

    const startData = {
        'total': '',
        'hours': '',
        'minutes': '',
        'hourClockFormat': ''
    };

    const durationData = {
        'hours': '',
        'minutes': '',
    };

    const totalData = {
        'hours': 0,
        'minutes': 0,
        'hourClockFormat': '',
        'days': '',
        'dayWeek': '',
        'followingDays': '',
        'afterMidnight': 0
    };

    [ startData['total'], startData['hourClockFormat'] ] = start.split(' ');
    [ startData['hours'], startData['minutes'] ] = startData['total'].split(':');
    startData['hours'] = parseInt( startData['hours'] );
    startData['minutes'] = parseInt( startData['minutes'] );

    [ durationData['hours'], durationData['minutes'] ] = duration.split(':');
    durationData['hours'] = parseInt( durationData['hours'] );
    durationData['minutes'] = parseInt( durationData['minutes'] );

    if( verifyHours( startData['hours'], 12 ) && verifyMinutes( startData['minutes'] ) && Number.isInteger( durationData['hours'] ) && durationData['hours'] >= 0 && verifyMinutes( durationData['minutes'] ) && ( startData['hourClockFormat'] === 'AM' || startData['hourClockFormat'] === 'PM' ) ) {
        totalData['minutes'] = ( startData['minutes'] + durationData['minutes'] ) % 60;
        totalData['hours'] = startData['hours'] + durationData['hours'] + Math.trunc( ( startData['minutes'] + durationData['minutes'] ) / 60 );
        totalData['days'] = Math.trunc( (totalData['hours'] ) / 24 );

        if( ( ( ( startData['hours'] * 60 + durationData['hours'] * 60 ) + startData['hours'] + durationData['minutes'] ) > 12*60 ) && startData['hourClockFormat'] === 'PM' ){
            totalData['afterMidnight'] = 1;
        }

        if( startingDay !== undefined && startingDay !== '' ){

            if ( daysWeek.includes( startingDay.toLowerCase() ) ) {
                totalData['dayWeek'] = daysWeek[ ( daysWeek.indexOf( startingDay.toLowerCase() ) + totalData['days'] + totalData['afterMidnight'] ) % 7 ];
                totalData['dayWeek'] = firstLetterUppercase( totalData['dayWeek'] );
            } else {
                console.log( 'Wrong day of the week data' );
                return false;
            }
        }

        if( ( totalData['hours'] + durationData['hours'] ) >= 12 ) {
            if( ( totalData['hours'] - startData['hours'] ) % 2 === 1 ){
                if( startData['hourClockFormat'] === 'AM' ){
                    totalData['hourClockFormat'] = 'PM';
                } else if( startData['hourClockFormat'] === 'PM' ){
                    totalData['hourClockFormat'] = 'AM';
                }
            }
        } else {
            totalData['hourClockFormat'] = startData['hourClockFormat'];
        }

        if( totalData['days'] + totalData['afterMidnight'] === 1 ){
            totalData['followingDays'] = ' (next day)';
        } else if ( totalData['days'] + totalData['afterMidnight'] > 1 ){
            totalData['followingDays'] = ' (' + ( totalData['days'] + totalData['afterMidnight'] ) + ' days later)';
        }

        return ( totalData['hours'] % 12 || 12 ).toString() + ':' + totalData['minutes'].toString().padStart(2, '0') + ' ' + totalData['hourClockFormat'] + ( totalData['dayWeek'] ? ', ' + totalData['dayWeek'] : '' ) + totalData['followingDays'] ;

    }
    console.log('Wrong data entered. Closing the program...')
    return false;
}

function init(){
    const askedStartingTime = prompt('Enter a start time in the 12-hour clock format (ending in AM or PM), example: 3:00 PM.') ;
    const askedTimeToAdd = prompt('Enter a duration time that indicates the number of hours and minutes, example: 3:10.') ;
    const askedStartingDay = prompt('(Optional) Enter a starting day of the week, case insensitive, example: tueSday.') ;

    console.log( addTime(askedStartingTime, askedTimeToAdd, askedStartingDay) );
    return;
}
init();






/* 
for (let i = 0; i < text.length; i++) {
    const character = text[i];

    if ( character === 'i' && i > 0 && i < text.length - 1 ){
        if ( text[i - 1] === ' ' && iDelimiter.includes( text[i + 1] ) ){
            editedText += character.toUpperCase();
            continue;
        }
    }

    if ( endPhraseDelimiter.includes( character ) ){
        editedText += character;
        uppercase = true;
        continue;
    }

    if( uppercase === true && character !== ' ' ){
        editedText += character.toUpperCase();
        uppercase = false;
        continue;
    }

    editedText += character;
} 

*/