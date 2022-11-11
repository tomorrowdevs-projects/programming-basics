// MAIN PROGRAM to demonstrate function
console.log(isSublist([1, 2, 3, 4], [])); // true
console.log(isSublist([1, 2, 3, 4], [2])); // true
console.log(isSublist([1, 2, 3, 4], [5])); // false
console.log(isSublist([1, 2, 3, 4], [2, 3])); // true
console.log(isSublist([1, 2, 3, 4, 3, 2], [3, 2])); // true
console.log(isSublist([1, 2, 3, 4, 3, 2], [3, 4])); // true
console.log(isSublist([1, 2, 3, 4], [1, 3])); // false
console.log(isSublist([1, 2, 3, 4], [5, 6, 7])); // false
console.log(isSublist([1, 2, 3, 4], [1, 2, 3, 4])); // true
console.log(isSublist([1, 2, 3, 4], [3, 2, 1, 4])); // false
console.log(isSublist([1, 2, 3, 4], [1, 2, "3", 4])); // false
console.log(isSublist([1, 2, 3, 4], [1, 2, 3, 4, 5])); // false
console.log(isSublist([1, false, "green", 4], [false, "green"])); // true

// FUNCTION that returns true if an array is equal to another 
function isEqual(arr1, arr2) {
    // every() method tests if all elements in the array pass the test implemented by the provided function
    return arr1.every(function(element, index) {
        return element === arr2[index]; 
    });
}

/* 
The every method executes the provided callbackFn function once for each element 
present in the array until it finds the one where callbackFn returns a falsy value. 
If such an element is found, the every method immediately returns false. 
Otherwise, if callbackFn returns a truthy value for all elements, every returns true.
Calling this method on an empty array will return true for any condition!
*/

// MAIN FUNCTION: returns true if list2 is a sublist of list1
function isSublist(larger, smaller) {

    // CONDITION 1: smaller list is empty []  
    if (smaller.length == 0) { 
        return true; 

    // CONDITION 2 : smaller list length == larger list length
    } else if (larger.length == smaller.length) {
        return isEqual(larger, smaller);
    
    // CONDITION 3: larger list lenght > smaller list length 
    } else if (larger.length > smaller.length) {
        let slicedLarger;  
        
        for (i = 0; i < larger.length; i++) {
            
            if (larger[i] === smaller[0]) {
                slicedLarger = [].concat(larger).splice(i, smaller.length); 
                
                if (!isEqual(slicedLarger, smaller)) {
                continue;  
                } else {
                break;
                }
            }
        
        } // end for
        // If no matches are found slicedLarger is undefined...
        if (slicedLarger === undefined) {
            return false; 
        } else {
            return isEqual(slicedLarger, smaller);
        }
    
    // CONDITION 4: larger list lenght < smaller list length 
    } else {
        return false; 
    }// end conditions

}//end function


/*  // CONDITION 1: smaller list is empty [] or length = 1...  
    if (smaller.length <= 1) { 
        // Returns true if the single element of smaller list is present in larger list or if smaller list is empty *
        return smaller.every(function(element) { 
            // includes() method determines if an array includes a certain value among its entries
            return larger.includes(element); //--> returns True or False
        }); // * Calling every() method on an empty array will return true for any condition!
*/

