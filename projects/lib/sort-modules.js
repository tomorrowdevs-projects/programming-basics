function cleanForSortingNumbers( values ){
    if( Array.isArray( values ) && values.length > 0 ) {
        const cleanedList = [];
        const listToClean = [...values];

        for (let i = 0; i < listToClean.length; i++) {
            if( typeof listToClean[i] === 'number' ){
                cleanedList.push(listToClean[i]);
            }
        }

        return cleanedList;
    }

    return values;
}


function bubbleSortNumbers( values, order = 'ASC' ){

    if( Array.isArray( values ) && values.length > 1 ) { // We check that valuesToOrder is an array and has more than one element
        const valuesToOrder = cleanForSortingNumbers(values);

        let isSwapped = true;

        do {
            isSwapped = false;

            if ( order === 'ASC' ) {
                for (let i = 0; i < valuesToOrder.length - 1; i++) {
                    if (valuesToOrder[i] > valuesToOrder[i + 1]) {
                        [ valuesToOrder[i], valuesToOrder[i + 1] ] = [ valuesToOrder[i + 1], valuesToOrder[i] ];
                        isSwapped = true;
                    }
                }
            } else if ( order === 'DESC' ) {
                for (let i = 0; i < valuesToOrder.length - 1; i++) {
                    if (valuesToOrder[i] < valuesToOrder[i + 1]) {
                        [ valuesToOrder[i], valuesToOrder[i + 1] ] = [ valuesToOrder[i + 1], valuesToOrder[i] ];
                        isSwapped = true;
                    }
                }
            }

        } while ( isSwapped );

        return valuesToOrder;
    }
    
    return values;
}


function selectionSortNumbers( values, order = 'ASC' ){

    if( Array.isArray( values ) && values.length > 1 ) {
        const valuesToOrder = cleanForSortingNumbers(values);

        for ( let i = 0; i < valuesToOrder.length - 1; i++ ){ 
            let mininumValueIndex = i; 
            
            for ( let j = i + 1; j < valuesToOrder.length; j++ ){ 
                if ( order === 'ASC' ) {
                    if( valuesToOrder[j] < valuesToOrder[mininumValueIndex] ){
                        mininumValueIndex = j; 
                    }
                } else if ( order === 'DESC' ) {
                    if( valuesToOrder[j] > valuesToOrder[mininumValueIndex] ){
                        mininumValueIndex = j; 
                    }
                }

            }

            [ valuesToOrder[i], valuesToOrder[mininumValueIndex] ] = [ valuesToOrder[mininumValueIndex], valuesToOrder[i] ];
        }

        return valuesToOrder;
    }

    return values;
}


function insertionSortNumbers(values, order = 'ASC' ){

    if( Array.isArray( values ) && values.length > 1 ) {
        const valuesToOrder = cleanForSortingNumbers(values);

        for (let i = 1; i < valuesToOrder.length; i++) {
            let currentElement = valuesToOrder[i];
            let j = i - 1;
    
            if ( order === 'ASC' ) {
                while (j >= 0 && valuesToOrder[j] > currentElement) { 
                    valuesToOrder[j + 1] = valuesToOrder[j];
                    j--;
                }
            } else if ( order === 'DESC' ) {
                while (j >= 0 && valuesToOrder[j] < currentElement) { 
                    valuesToOrder[j + 1] = valuesToOrder[j];
                    j--;
                }
            }

            valuesToOrder[j + 1] = currentElement; 
        }

        return valuesToOrder;
    }
  
    return values;
};

function quickSortNumbers( values, order = 'ASC' ){

    if( Array.isArray( values ) && values.length > 1 ) { 
        const valuesToOrder = cleanForSortingNumbers(values);

        const pivot = valuesToOrder[valuesToOrder.length-1]; 
        const leftArray = []; 
        const rightArray = [];

        for (let i = 0; i < valuesToOrder.length-1; i++) {
            const value = valuesToOrder[i];

            if( value < pivot ){
                leftArray.push( value );
            } else {
                rightArray.push( value );
            }
        }

        if( order === 'ASC' ){
            return [ ...quickSortNumbers( leftArray ), pivot, ...quickSortNumbers( rightArray ) ];
        } else if ( order === 'DESC' ) {
            return [ ...quickSortNumbers( rightArray, 'DESC' ), pivot, ...quickSortNumbers( leftArray, 'DESC' ) ];
        }
    }

    return values;
}

function mergeSortNumbersArray( leftArrayToSort, rightArrayToSort, order = 'ASC' ){
    
    if( Array.isArray( leftArrayToSort ) && Array.isArray( rightArrayToSort ) ) {
        const sortedArray = [];
        const leftArray = cleanForSortingNumbers(leftArrayToSort);
        const rightArray = cleanForSortingNumbers(rightArrayToSort);

        if( order === 'ASC' ){

            while ( leftArray.length && rightArray.length ) {
                if ( leftArray[0] < rightArray[0] ) {
                    sortedArray.push( leftArray.shift() );
                } else {
                    sortedArray.push( rightArray.shift() );
                }
            }

        } else if ( order === 'DESC' ) {

            while ( leftArray.length && rightArray.length ) {
                if ( leftArray[0] > rightArray[0] ) {
                    sortedArray.push( leftArray.shift() );
                } else {
                    sortedArray.push( rightArray.shift() );
                }
            }

        }
            
        return [ ...sortedArray, ...leftArray, ...rightArray ];

    }

    return [leftArrayToSort, rightArrayToSort];
}

function mergeSortNumbers( values, order = 'ASC' ){

    if( Array.isArray( values ) && values.length > 1 ) {
        const valuesToOrder = cleanForSortingNumbers(values);
        const leftArray = mergeSortNumbers( valuesToOrder.splice( 0, Math.ceil( valuesToOrder.length / 2 ) ), order );
        const rightArray = mergeSortNumbers( valuesToOrder, order );

        return mergeSortNumbersArray( leftArray, rightArray, order );
    }

    return values;
}


// To find the parent index knowing a child index
function findParentIndex( child ){
    if( ! Number.isNaN( child ) && child > 0 ){
        return Math.floor((child + 1)/2)-1;
    }

    return false;
}
// To find the first Child index knowing the parent index
function findFirstChildIndex( parentIndex ){
    if( ! Number.isNaN( parentIndex ) && parentIndex >= 0 ){
        return Math.floor((parentIndex + 1)*2)-1;
    }

    return false;
}

function buildMaxHeap( values ){
    if( Array.isArray( values ) && values.length > 1 ) {
        const valuesToOrder = cleanForSortingNumbers(values);
        const lastParent = findParentIndex( valuesToOrder.length - 1 );

        for (let parentIndex = lastParent; parentIndex >= 0; parentIndex--) {

            const firstChildIndex = findFirstChildIndex( parentIndex );
            let childrenMaxValue;
            let childrenMaxValueIndex;

            childrenMaxValue = valuesToOrder[firstChildIndex];
            childrenMaxValueIndex = firstChildIndex;

            if( valuesToOrder[firstChildIndex+1] > valuesToOrder[firstChildIndex] ){
                childrenMaxValue = valuesToOrder[firstChildIndex+1];
                childrenMaxValueIndex = firstChildIndex+1;
            }

            if( valuesToOrder[parentIndex] < childrenMaxValue ){
                [ valuesToOrder[parentIndex], valuesToOrder[childrenMaxValueIndex] ] = [ valuesToOrder[childrenMaxValueIndex], valuesToOrder[parentIndex] ];
            }
        
        }

        return valuesToOrder;
    }

    return values;
}

function heapSortNumbers( values, order = 'ASC' ){

    if( Array.isArray( values ) && values.length > 1 ) {
        let valuesToOrder = [...values];
        const orderedValues = [];
        
        while (valuesToOrder.length > 0) {
            valuesToOrder = buildMaxHeap( valuesToOrder );
            [ valuesToOrder[0], valuesToOrder[valuesToOrder.length-1] ] = [ valuesToOrder[valuesToOrder.length-1], valuesToOrder[0] ];
            if( order === 'ASC'){
                // Place the discarded element at the beginning of the separated array
                orderedValues.unshift( valuesToOrder[valuesToOrder.length-1] );
            } else if (order === 'DESC'){
                // Place the discarded element at the end of the separated array
                orderedValues.push( valuesToOrder[valuesToOrder.length-1] );                
            } else {
                return values;
            }
            
            valuesToOrder.pop();
        }

        return orderedValues;
    }

    return values;
}

module.exports = { // For CommonJS environment
// export { // For ES module environment. In addition for Visual Studio Code two package.json files must be created, one in this file folder, the other one in the application file folder, they must contain the following code { "type": "module" }
  cleanForSortingNumbers,
  bubbleSortNumbers,
  selectionSortNumbers,
  insertionSortNumbers,
  quickSortNumbers,
  mergeSortNumbersArray,
  mergeSortNumbers,
  findParentIndex,
  findFirstChildIndex,
  buildMaxHeap,
  heapSortNumbers
};