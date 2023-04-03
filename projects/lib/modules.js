/** Function from exercise m1/034-integer-to-ordinal  */
function parseOrdinalNummber( number ){
    const textualOrdinalNumbers = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'];

    if ( number < 1 || number > 12 ){
        return '';
    }

    return textualOrdinalNumbers[number - 1];
}

module.exports = { parseOrdinalNummber }