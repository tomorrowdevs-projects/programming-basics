function coinFlip(){
    const side = Math.floor( Math.random()*2 );
    return side === 0 ? 'H' : 'T';
}

function findFlipSameOutcome(){
    let flipCount = sameOutcomeCount = 0;
    let currentFlip = outcomes = '';

    while( sameOutcomeCount < 2 ){
        const newFlip = coinFlip();

        if( flipCount > 1 ){
            if ( currentFlip === newFlip ){
                sameOutcomeCount++;
            } else {
                sameOutcomeCount = 0;
            }
        }

        currentFlip = newFlip;
        outcomes += currentFlip + ' ';
        flipCount++;
    }

    return [ outcomes, flipCount ];
}

function init(){
    const flipCoinNumbers = 10;
    let flipCountTotal = 0;

    for (let i = 1; i <= flipCoinNumbers; i++) {
        [ outcomes, flipCount ] = findFlipSameOutcome();
        console.log( outcomes + '(' + flipCount + ' flips)' );

        flipCountTotal += flipCount;

        if( i === flipCoinNumbers ){
            console.log( "---------------------------------" );
            console.log( 'On average, ' + flipCountTotal / flipCoinNumbers + ' flips were needed' );
        }
    }
    
    return;
}
init();