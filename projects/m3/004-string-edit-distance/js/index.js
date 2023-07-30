const prompt = require('prompt-sync')();

function calculateEditDistance(s, t) {
    if (s.length === 0) {
        return t.length;
    } else if (t.length === 0) {
        return s.length;
    } else {
        let cost = 0;

        if (s[s.length - 1] !== t[t.length - 1]) {
            cost = 1;
        }

        let d1 = calculateEditDistance(s.substring(0, s.length - 1), t) + 1;
        let d2 = calculateEditDistance(s, t.substring(0, t.length - 1)) + 1;
        let d3 = calculateEditDistance(s.substring(0, s.length - 1), t.substring(0, t.length - 1)) + cost;

        return Math.min(d1, d2, d3);
    }
}

let string1 = prompt("Inserisci la prima stringa: ");
let string2 = prompt("Inserisci la seconda stringa: ");

console.log(`La distanza di modifica tra "${string1}" e "${string2}" è ${calculateEditDistance(string1, string2)}.`);