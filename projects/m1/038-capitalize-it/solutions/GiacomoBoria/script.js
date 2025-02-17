/*Many people do not use capital letters correctly, especially when typing on small devices like smart phones. To help address this situation, you will create a function that takes a string as its only parameter and returns a new copy of the string that has been correctly capitalized.

In particular, your function must: • Capitalize the first non-space character in the string, • Capitalize the firstnon-space character after a period, exclamation mark or question mark, and • Capitalize a lowercase “i” if it is preceded by a space and followed by a space, period, exclamation mark, question mark or apostrophe.

Implementing these transformations will correct most capitalization errors.

For example, if the function is provided with the string “what time do i have to be there? what’s the address? this time i’ll try to be on time!” then it should return the string

“What time do I have to be there? What’s the address? This time I’ll try to be on time!”.

Include a main program that reads a string from the user, capitalizes it using your function, and displays the result. */

function capitalizeString(string) { 
    // I decompose the string into an array so I can work better with indexes
    let words = string.split("")
  
    // I initialize the variable because in case of final letter "?" "!" or "." the program goes to error.
    const lastLetter = words.length - 1;
    // capitalize first letter
    words[0] = words[0].toUpperCase()
  
    for (i = 0; i < lastLetter; i++) {
      // If "i"
      if (words[i] === "i" && words[i + 1] === "'"){
        words[i] = words[i].toUpperCase();
        
     } else if (words[i] === "i" && words[i - 1] === " " && words[i + 1] === "?") {
        words[i] = words[i].toUpperCase();
  
      } else if (words[i] === "i" && words[i - 1] === " " && words[i + 1] === "!") {
        words[i] = words[i].toUpperCase();
      
      } else if (words[i] === "i" && words[i - 1] === " " && words[i + 1] === " " ) {
        words[i] = words[i].toUpperCase();
      
      } else if (words[i] === "!" || words[i] === "?" || words[i] === "." ) {
        words[i +2] = words[i + 2].toUpperCase();
      } 
    } return words.join(""); // from array back to string
  }  
  
  const userInput = prompt("Type your phrase");
  
  alert(capitalizeString(userInput));