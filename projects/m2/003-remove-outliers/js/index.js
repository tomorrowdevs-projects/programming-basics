// const prompt = require("prompt-sync")({ sigint: true}) ;
const { quickSortNumbers } = require( '../../../lib/sort-modules.js' );

function askValues(){
    const askedValues = [];
    let askedValue = parseFloat( prompt( 'Enter a number.' ) );

    while ( askedValue !== 0 ) {
        if( ! isNaN( askedValue ) ){
            askedValues.push(askedValue);
        } else {
            console.log('You entered a not valid values, only numbers are allowed.');
        }

        askedValue = parseFloat( prompt('Enter a number.') );
    }

    if( askedValues.length < 4 ){
        console.log('Restarting the program: you entered less than 4 numbers.');
        return askValues();
    }

    return askedValues;
}

function removeOutliers( values, n ){
    /**
     * @param {array} values The values ​​from which to remove the n smallest and n largest elements
     * @param {number} n The number of smallest elements and the number of largest element to remove from values
     * @return {array} The result of removing and sorting
     */

    const orderedValues = quickSortNumbers(values); // quickSortNumbers also clean not numeric values
    // Remove the n smallest and n largest elements
    for (let i = 0; i < n; i++) {
        orderedValues.shift();
        orderedValues.pop();
    }

    return orderedValues;
}

function printValues(values){
    for (let i = 0; i < values.length; i++) {
        console.log(values[i]);
    }

    return;
}

function init(){
    console.log('Please enter a list of numeric values. Enter "0" without quotes to stop the entry.')
    const askedValues = askValues();
    const processedValues = removeOutliers(askedValues, 2);

    console.log('Original list:');
    printValues(askedValues);
    
    console.log('Processed list:');
    if( Array.isArray(processedValues) && processedValues.length > 0 ){
        printValues(processedValues);
    } else {
        console.log('The program removed the two smallest and the two largest elements, so if you entered only 4 items the processed list is empty.')
    }
    
    return;
}
init();