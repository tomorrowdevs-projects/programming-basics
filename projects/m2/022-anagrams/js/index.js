const prompt = require('prompt-sync');

const areAnagrams = (str1, str2) => {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

const main = () => {
    let word1 = prompt("Inserisci la prima parola: ");
    let word2 = prompt("Inserisci la seconda parola: ");

    if (areAnagrams(word1, word2)) {
        console.log(`"${word1}" e "${word2}" sono anagrammi.`);
    } else {
        console.log(`"${word1}" e "${word2}" non sono anagrammi.`);
    }
}

main();
