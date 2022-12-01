
// first, i declare  my  array globally
let numberArrays = [];


// then i create a function to get my values, with a "while" statement,  and a "pop"  method on the array to delete the last element 
function getValues () {

    let value;
    while (value !== 0)  {
        value = parseInt(prompt("Please, enter a value:"));
        numberArrays.push(value);
    }

    numberArrays.pop();
}


// here i create a new funtion to sort the array's elements
function sortArray (array) {
    array.sort(function(a, b) {return a - b})
}


getValues();
sortArray(numberArrays);

alert(numberArrays.join("\n"));