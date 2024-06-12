
const stringEditDistance = function (s, t) {
    // limit cases
    let cost = 0;
    if (s.length === 0) {
        return t.length;
    }
    else if (t.length === 0) {
        return s.length
    }

    if (s[s.length - 1] !== t[t.length - 1]) {
        cost = 1;
    }
    const d1 = stringEditDistance(s.slice(0,-1), t) + 1;
    const d2 = stringEditDistance(s, t.slice(0,-1)) + 1;
    const d3 = stringEditDistance(s.slice(0,-1), t.slice(0,-1)) + cost;
    
    return Math.min(d1, d2, d3);
}
const firstString = prompt(`This program calculates the edit distance between two strings 
(number of delete and replace operations required to transform one string into another).
Entered the first string : `);
const secondString = prompt(`Entered the second string : `);

const result = stringEditDistance(firstString,secondString)
alert(`The edit distance between these two strings is : ${result}`)