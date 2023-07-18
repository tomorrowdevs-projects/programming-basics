// const prompt = require("prompt-sync")({ sigint: true}) ;
const { quickSortNumbers } = require( '../../../lib/sort-modules.js' );

function askIntegers(){
    const askedIntegers = [];
    let askedInteger = parseInt( prompt( 'Enter an integer number.' ) );

    while ( Number.isInteger( askedInteger ) && askedInteger !== 0 ) {
        askedIntegers.push( askedInteger );
        askedInteger = parseInt( prompt( 'Enter an integer number.' ) );
    }

    return askedIntegers;
}

function init(){
    const askedIntegers = askIntegers();
    const orderedIntegers = quickSortNumbers( askedIntegers, 'DESC' );

    for (let i = 0; i < orderedIntegers.length; i++) {
        console.log( orderedIntegers[i] );
    }
}
init();