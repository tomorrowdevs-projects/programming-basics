const { quickSortNumbers } = require( '../../../lib/modules.js' ); // For CommonJS environment
// import { quickSortNumbers } from '../../../lib/sort-modules.js'; // For ES module environment (see the imported file for additional informations)

// const prompt = require("prompt-sync")({ sigint: true}) ; // For CommonJS environment
// import promptSync from 'prompt-sync'; // For ES module environment (tou need to import "prompt-sync" and assign it to a constant as is done in the following line)
// const prompt = promptSync({ sigint: true});  // For ES module environment

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
    const orderedIntegers = quickSortNumbers( askedIntegers );

    for (let i = 0; i < orderedIntegers.length; i++) {
        console.log( orderedIntegers[i] );
    }
}
init();