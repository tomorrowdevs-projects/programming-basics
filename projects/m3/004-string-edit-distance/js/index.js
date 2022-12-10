
let s = "sitting";
let t = "kitten";

s = s.toLowerCase();
t = t.toLowerCase();

m = s.length;
n = t.length;


function getEditDistance(s, t, m, n)
{
     
    if (m === 0){
        return n;
    }
 
    if (n === 0){
        return m;
    }
 
    
    if (s[m - 1] === t[n - 1]){
        return getEditDistance(s, t, m - 1, n - 1);
    }
 
    // If last characters are not same, consider all
    // three operations on last character of first
    // string, recursively compute minimum cost for all
    // three operations and take minimum of three
    // values.
    return 1 +
    min(editDist(s, t, m, n - 1), // Insert
        editDist(s, t, m - 1, n), // Remove
        editDist(s, t, m - 1, n - 1)); // Replace
}

alert(editDist(s, t, m, n));