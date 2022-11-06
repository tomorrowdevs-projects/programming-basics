/*Write a function that takes a string, s, as its first parameter, and the width of the window in characters, w, as its second parameter. 
Your function will return a new string that includes whatever leading spaces are needed so that s will be centered in the window when the new string is printed. 
The new string should be constructed in the following manner:

If the length of s is greater than or equal to the width of the window then s should be returned.
If the length of s is less than the width of the window then a string containing (len(s) - w) // 2 spaces followed by s should be returned.
Write a main program that demonstrates your function by displaying multiple strings centered in the window.*/

function windowCenter(s,w) {

    const spaceArrayBefore = [];
    const spaceArrayAfter = [];
    
    if (s.length < w) {
      const space = (w - s.length ) / 2;
      
      for (i = 0; i < space; i++) {
        spaceArrayBefore.push("")
        spaceArrayAfter.push("")
      } 
      return spaceArrayBefore.join(" ") + s + spaceArrayAfter.join(" ");
      
    } else {
      return s;
    }
  }
  
  const words = prompt("Insert your string")
  const width = Number(prompt("Insert width of the window"))
  
  alert(windowCenter(words,width))