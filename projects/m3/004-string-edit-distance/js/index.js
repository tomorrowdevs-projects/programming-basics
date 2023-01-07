/*
Write a recursive function that computes the edit distance between two strings.
Use algorithm:
s and t = string
If s length = 0 return t length
If t length = 0 return s length
if last character s != last character != t 
cost = 1 
d1 = all characters except the last one
in s, all characters t + 1
d2 = all characters except the last one
in t, all characters s + 1
d3 = all characters except the last one
in s + all characters except the last one in t
retunr il valor minimo di d1, d2,d3
*/

function getDistanceString(string1, string2) {
  /**
  *the function performs a comparison between two strings and returns the edit distance between them
  * @param {string1} string
  * @param {string2} string
  * two base recursion length string = 0
  * two step recursion (Delete, subsistute and insert)
  * @variable {d1} number
  * @variable {d2} number
  * @variable {d3} number
  * @return {min(d1,d2,d3)}
  */

  
  if (string1.length === 0) { // #1 Base recursion
    
    return string2.length;
    
  } else if (string2.length === 0) { // #2 Base recursion
    
    return string1.length;
    // two step recursion 
    // # 1 if last character of the strings is equal delete lasts character
  } else if (string1[string1.length - 1] === string2[string2.length - 1]) { // step recursion 
     
    return getDistanceString(string1.slice(0, -1), string2.slice(0, -1))
    
  } else { // #2 step recursion
    
    const cost = 1;
    const d1 = getDistanceString(string1.slice(0, -1), string2) + 1;
    const d2 = getDistanceString(string1, string2.slice(0, -1)) + 1;
    const d3 = getDistanceString(string1.slice(0, -1), string2.slice(0, -1)) + cost;
      
    return Math.min(d1, d2, d3);

  }
     
}

const firstString = prompt("Insert your first phrase.")
const secondtString = prompt("Insert your second phrase.")
console.log(`he distance between your two phrases is: ${getDistanceString(firstString, secondtString)}`)