let s = "sitting";
let t = "kitten";

function getEditDistance(s, t) {
// If one of the two string is empty, return the whole length of the other string.
    if (s.length === 0) return t.length;
    if (t.length === 0) return s.length;

    let cost = 0;

// Setting d1, d2 and d3 as the exercise description said if the last character fo the two strings isn't the same.
    if (s[s.length - 1] !== t[t.length - 1]) {

        cost = 1;
        const d1 = getEditDistance(s.slice(0, -1), t) + 1;
        const d2 = getEditDistance(s, t.slice(0, -1)) + 1;
        const d3 = getEditDistance(s.slice(0, -1), t.slice(0, -1)) + cost;

// Using the Math.min method to return the minimum of d1, d2, d3.
        return Math.min(d1, d2, d3);

    };

    return getEditDistance(s.slice(0, -1), t.slice(0, -1));
};    

console.log(getEditDistance(s, t));