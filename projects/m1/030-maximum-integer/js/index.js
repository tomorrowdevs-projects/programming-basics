function generateRandomNumber( integer ){
    return Math.floor( Math.random() * integer ) + 1;
}

function findMaxNumberAndCountUpdates( numbersCount ){
    let maxNumber = 0;
    let updates = 0;

    for (let i = 0; i < numbersCount; i++) {

        const currentNumber = generateRandomNumber( numbersCount );

        if ( maxNumber < currentNumber || i === 0 ){
            maxNumber = currentNumber ;
            console.log( currentNumber + ' <== Update' );
            updates++;
        } else {
            console.log( currentNumber );
        }
    }

    return [ maxNumber, updates ];
}

function init(){
    const numbersCount = 100;
    const [ maxNumber, updates ] = findMaxNumberAndCountUpdates( numbersCount );

    console.log( 'The maximum value found was ' + maxNumber );
    console.log( 'The maximum value was updated ' + updates );

    return;
}
init();