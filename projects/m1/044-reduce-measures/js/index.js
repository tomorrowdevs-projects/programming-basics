// const prompt = require("prompt-sync")({ sigint: true}) ; // For CommonJS environment

function convertToImperialVolume( units, measure ){

    if( measure !== 'cup' || measure !== 'tablespoon' || measure !== 'teaspoons' || ! Number.isInteger( units ) ){
        const teaspoonsConversionList = {
            'cup': 48,
            'tablespoon': 3,
            'teaspoons': 1,
        }

        const result = {};

        let remainingTeaspoons = units * teaspoonsConversionList[measure];

        Object.keys( teaspoonsConversionList ).forEach( key => {
            const divisor = teaspoonsConversionList[key];

            if( remainingTeaspoons >= divisor ){
                result[key] = Math.trunc( remainingTeaspoons / divisor );
                remainingTeaspoons = remainingTeaspoons % divisor;
            } else {
                result[key] = 0;
            }
        });

        return result;
    }

    return false;
}

function init(){
    const askedUnits = parseInt( prompt( 'Please enter the number of units of your ingredient.' ) );
    const askedMeasure = prompt( 'Please enter the unit of measure (cup, tablespoon or teaspoon).' );

    console.log( convertToImperialVolume( askedUnits, askedMeasure ) );

    const resultingUnits = convertToImperialVolume( askedUnits, askedMeasure )
    if( resultingUnits !== false ) {
        let message = '';
        Object.keys( resultingUnits ).forEach( key => {
            message += resultingUnits[key] + ' ' + key + ', ';
        });

        console.log( message.replace( /, $/, '.' ) );
    }

    return;
}
init();