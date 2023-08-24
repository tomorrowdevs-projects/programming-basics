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


function bubbleSortNumbers( values, ascending = true ){

    if( Array.isArray( values ) && values.length > 1 && typeof ascending === 'boolean' ) { // We check that valuesToOrder is an array and has more than one element
        const valuesToOrder = cleanForSortingNumbers(values);

        let isSwapped = true;

        do {
            isSwapped = false;

            for (let i = 0; i < valuesToOrder.length - 1; i++) {
                if ( (ascending && valuesToOrder[i] > valuesToOrder[i + 1]) || (! ascending && valuesToOrder[i] < valuesToOrder[i + 1]) ) {
                    [ valuesToOrder[i], valuesToOrder[i + 1] ] = [ valuesToOrder[i + 1], valuesToOrder[i] ];
                    isSwapped = true;
                }
            }
        } while ( isSwapped );

        return valuesToOrder;
    }
    
    return values;
}


function selectionSortNumbers( values, ascending = true ){

    if( Array.isArray( values ) && values.length > 1 && typeof ascending === 'boolean' ) {
        const valuesToOrder = cleanForSortingNumbers(values);

        for ( let i = 0; i < valuesToOrder.length - 1; i++ ){ 
            let mininumValueIndex = i; 
            
            for ( let j = i + 1; j < valuesToOrder.length; j++ ){ 
                if ( (ascending && valuesToOrder[j] < valuesToOrder[mininumValueIndex]) || (! ascending && valuesToOrder[j] > valuesToOrder[mininumValueIndex]) ){
                    mininumValueIndex = j; 
                }
            }

            [ valuesToOrder[i], valuesToOrder[mininumValueIndex] ] = [ valuesToOrder[mininumValueIndex], valuesToOrder[i] ];
        }

        return valuesToOrder;
    }

    return values;
}


function insertionSortNumbers(values, ascending = true ){

    if( Array.isArray( values ) && values.length > 1 && typeof ascending === 'boolean' ) {
        const valuesToOrder = cleanForSortingNumbers(values);

        for (let i = 1; i < valuesToOrder.length; i++) {
            let currentElement = valuesToOrder[i];
            let j = i - 1;
    
            while( (ascending && j >= 0 && valuesToOrder[j] > currentElement) || (! ascending && j >= 0 && valuesToOrder[j] < currentElement) ){
                valuesToOrder[j + 1] = valuesToOrder[j];
                j--;
            }

            valuesToOrder[j + 1] = currentElement; 
        }

        return valuesToOrder;
    }
  
    return values;
};


function quickSortNumbers( values, ascending = true ){

    if( Array.isArray( values ) && values.length > 1 && typeof ascending === 'boolean' ) { 
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

        if( ascending ){
            return [ ...quickSortNumbers( leftArray ), pivot, ...quickSortNumbers( rightArray ) ];
        } else {
            return [ ...quickSortNumbers( rightArray, false ), pivot, ...quickSortNumbers( leftArray, false ) ];
        }
    }

    return values;
}


function mergeSortNumbersArray( leftArrayToSort, rightArrayToSort, ascending = true ){
    
    if( Array.isArray( leftArrayToSort ) && Array.isArray( rightArrayToSort ) && typeof ascending === 'boolean' ) {
        const sortedArray = [];
        const leftArray = cleanForSortingNumbers(leftArrayToSort);
        const rightArray = cleanForSortingNumbers(rightArrayToSort);

        while ( leftArray.length && rightArray.length ) {
            if ( (ascending && leftArray[0] < rightArray[0]) || (! ascending && leftArray[0] > rightArray[0]) ) {
                sortedArray.push( leftArray.shift() );
            } else {
                sortedArray.push( rightArray.shift() );
            }
        }
  
        return [ ...sortedArray, ...leftArray, ...rightArray ];
    }

    return [leftArrayToSort, rightArrayToSort];
}

function mergeSortNumbers( values, ascending = true ){

    if( Array.isArray( values ) && values.length > 1 && typeof ascending === 'boolean' ) {
        const valuesToOrder = cleanForSortingNumbers(values);
        const leftArray = mergeSortNumbers( valuesToOrder.splice( 0, Math.ceil( valuesToOrder.length / 2 ) ), ascending );
        const rightArray = mergeSortNumbers( valuesToOrder, ascending );

        return mergeSortNumbersArray( leftArray, rightArray, ascending );
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

function heapSortNumbers( values, ascending = true ){
    if( Array.isArray( values ) && values.length > 1 && typeof ascending === 'boolean' ) {
        let valuesToOrder = [...values];
        const orderedValues = [];
        
        while (valuesToOrder.length > 0) {
            valuesToOrder = buildMaxHeap( valuesToOrder );
            [ valuesToOrder[0], valuesToOrder[valuesToOrder.length-1] ] = [ valuesToOrder[valuesToOrder.length-1], valuesToOrder[0] ];
            if(ascending){
                // Place the discarded element at the beginning of the separated array
                orderedValues.unshift( valuesToOrder[valuesToOrder.length-1] );
            } else {
                // Place the discarded element at the end of the separated array
                orderedValues.push( valuesToOrder[valuesToOrder.length-1] );                
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