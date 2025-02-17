const prompt = require('prompt-sync');

const countUniqueChars = (str) => {
    let uniqueChars = new Set(str);
    return uniqueChars.size;
}
const main = () => {
    let inputString = prompt("Inserisci una stringa: ");

    let numUniqueChars = countUniqueChars(inputString);
    console.log(`La stringa "${inputString}" ha ${numUniqueChars} caratteri unici.`);
}

main();