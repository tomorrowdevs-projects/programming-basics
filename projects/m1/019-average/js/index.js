function askValues( valuesCollection = [] ){
    const sentinel = 0;
    const valuesCollectionLength = valuesCollection.length;
    const value = Number( prompt( 'Enter a number to add', 'Example: 15') );

    if( ! isNaN( value ) && value >= 0 ){
        if ( value === sentinel ){
            if( valuesCollectionLength !== 0 ){
                return valuesCollection;
            }

            console.log( 'You can\'t enter 0 as the first number.' );
            return askValues();
        } 
        
        valuesCollection.push( value );
    } else {
        console.log( 'Please enter a positive number.' );
    }

    return askValues( valuesCollection );
}

function calculateAverage( collection ){
    const collectionLength = collection.length;
    if( Array.isArray( collection ) && collectionLength ){

        let collectionSum = 0;

        for( i = 0; i < collectionLength; i++ ){
            collectionSum += collection[i];
        }

        return collectionSum / collectionLength;
    }

}



function init(){
    console.log( 'Enter the collection of values whose average you want to know (enter 0 when you have finished).');
    const askedValues = askValues();
    console.log( calculateAverage( askedValues ) );
}

init();