let prompt = require("prompt-sync")();
let s,t; //strings
let d1,d2,d3; //integers

function stringEditDistance(s,t){
    
    if (s.length == 0){
        return t.length;
    } else if (t.length == 0){
        return s.length
    } 

    if (s[s.length -1] !== t[t.length -1]){
        
        return Math.min( 
            stringEditDistance(s.slice(0, s.length-1), t) + 1,
            stringEditDistance(s, t.slice(0, t.length-1)) + 1,
            stringEditDistance(s.slice(0, s.length-1), t.slice(0, t.length-1)) + 1
        );
    }
   
    return stringEditDistance(s.slice(0, s.length-1), t.slice(0, t.length-1));
    
}

s = prompt("Enter the first string: ");
t = prompt("Enter the second string: ");

console.log("The edit distance between the strings is: ", stringEditDistance(s,t));
