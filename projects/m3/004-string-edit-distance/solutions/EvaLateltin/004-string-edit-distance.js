/*

Let s and t be the strings 

    If the length of s is 0 then
        Return the length of t

    Else if the length of t is 0 then
        Return the length of s 

    Else 
    Set cost to 0

    If the last character in s does not equal the last character in t then

        Set cost to 1
        Set d1 equal to the edit distance between all characters except the last one
in s, and all characters in t, plus 1
        Set d2 equal to the edit distance between all characters in s, and all
characters except the last one in t, plus 1
        Set d3 equal to the edit distance between all characters except the last one
in s, and all characters except the last one in t, plus cost 

Return the minimum of d1, d2 and d3

*/

const firstString = prompt("Enter the first string.");
const secondString = prompt("Enter the second string.");

function getDistance(string1, string2) {
  if (string1.length === 0) {
    return string2.length;
  } else if (string2.length === 0) {
    return string1.length;
  } else {
    let cost = 0;
  }

  if (string1[string1.length - 1] !== string2[string2.length - 1]) {
    cost = 1;
    const distance1 = getDistance(string1.slice(0, -1), string2) + 1;
    const distance2 = getDistance(string1, string2.slice(0, -1)) + 1;
    const distance3 =
      getDistance(string1.slice(0, -1), string2.slice(0, -1)) + cost;

    return Math.min(distance1, distance2, distance3);
  } else {
    return getDistance(string1.slice(0, -1), string2.slice(0, -1));
  }
}

console.log(getDistance(firstString, secondString));
