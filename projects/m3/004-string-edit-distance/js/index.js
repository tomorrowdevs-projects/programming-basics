const prompt = require("prompt-sync")({ sigint: true}) ;
/**
 * Computes the edit distance between two strings
 * @param {string} s The first string
 * @param {string} t The second string
 * @returns {number} The edit distance between the strings
 */
function editDistance(s, t){
    if (s.length === 0) {
        return t.length;
    } else if (t.length === 0) {
        return s.length;
    } else {
        let cost = 0;

        if (s.charAt(s.length - 1) !== t.charAt(t.length - 1)){
            cost = 1;
        }

        const d1 = editDistance(s.slice(0,-1), t) + 1;
        const d2 = editDistance(s, t.slice(0,-1), t) + 1;
        const d3 = editDistance(s.slice(0,-1), t.slice(0,-1) ) + cost;

        return Math.min(d1, d2, d3);
    }
}

function init(){
    const firstAskedString = prompt('Please enter the first string whose edit distance you want to calculate.');
    const secondAskedString = prompt('Now enter the second one.');
    
    console.log( editDistance(firstAskedString, secondAskedString));

    return;
} 
init();
