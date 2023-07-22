const prompt = require('prompt-sync')();

function tokenizer(str) {
    const tokens = str.match(/\d+|\+|\-|\*|\/|\(|\)|=/g);
    return tokens;
}

const expression = prompt("Inserire un'espressione matematica: ");
const tokens = tokenizer(expression);
console.log("La lista dei token è: ", tokens);