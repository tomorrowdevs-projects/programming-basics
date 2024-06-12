// Ask user to enter a string
let userString = prompt("Enter a string").toLowerCase();

// Determine the number of unique characters in the string entered by the user*
let uniqueChars = new Set(userString.split("").filter((item) => { 
    return item != " ";
})); 

// for (let char of uniqueChars) console.log(char); --> For...of: loops through the values of the set 

// Display the results
if (uniqueChars.size === 0) {
    alert("You have not entered any characters!");
} else if (uniqueChars.size === 1) {
    alert("The entered string has only one unique character.");
} else {
    alert(`The entered string has ${uniqueChars.size} unique characters.`);
}

//* I created a new Set by providing the string entered by the user splitted into an array 
// and filtered by elements equal to an empty string.
// A Set is a special type of collection - “set of values” (without keys), where each value can appear only once.
// I used the set.size method to display the number of values ​​contained in the Set.