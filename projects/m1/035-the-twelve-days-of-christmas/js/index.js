const { parseOrdinalNumber } = require( '../../../lib/modules.js' ); // For CommonJS environment
// import { parseOrdinalNumber } from '../../../lib/modules.js'; // For ES module environment (see the imported file for additional informations)

function generate12DaysOfChristmasLyric( number ){

    const gifts = [
        'A partridge in a pear tree',
        'Two turtledoves',
        'Three French hens',
        'Four calling birds',
        'Five gold rings (five golden rings)',
        'Six geese a-laying',
        'Seven swans a-swimming',
        'Eight maids a-milking',
        'Nine ladies dancing',
        'Ten lords a-leaping',
        'Eleven pipers piping',
        'Twelve drummers drumming'
    ];

    const repeatingVerse = number !== 1 ? '\n' + 'And a partridge in a pear tree' : '';

    return '\n' + '*On the ' + parseOrdinalNumber( number ) + ' day of Christmas my true love sent to me:' + '\n' + gifts[ number - 1 ] + repeatingVerse + '.*';
}

function init(){    
    for (let i = 1; i <= 12; i++) {
        console.log( generate12DaysOfChristmasLyric( i ) );
    }
    return;
}
init();