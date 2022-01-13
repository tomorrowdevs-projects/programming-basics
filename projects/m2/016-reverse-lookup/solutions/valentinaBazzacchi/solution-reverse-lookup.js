// Function to finds all of the keys in a object that map to a specific value
function reverseLookUp (obj, value) {
    // For...in loop iterates over the properties of the object
    for (let key in obj) {
        // if the visited value (associated with the object key) is equal to the one passed as argument...
        if (obj[key] === value) {
        // ...add it to the array "list"
        list.push(key);
        }
    } // end for
    return list; // Return a list of keys from the object that map to the provided value
}// end function

// Create an object named "cart" 
const cart = {    
    items: 5, // key:value pairs = properties of the object
    apples: 0, 
    pears: 5,
    isEmpty: false,
};  
// Inizialize the variable "list" as an empty array
let list = [];

// Call the function with sereval arguments and display the results
reverseLookUp(cart, 5); 
console.log(list); // ["items", "pears"]

reverseLookUp(cart, 0); 
console.log(list); // ["apples"]

reverseLookUp(cart, true); 
console.log(list); // []


