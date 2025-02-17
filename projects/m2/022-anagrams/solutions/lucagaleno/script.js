// 022-anagrams

const string1 = 'evil';
const string2 = 'live';

function anagramsAnalyse(str1, str2) {

    function tokenizeString(token){
        return tokenization = token.match(/([\w])/g); // solo lettere, se tutti (/(.)/g)
    };

    // creo oggetti con le singole lettere delle stringhe
    const str1Array = tokenizeString(str1); 
    const str2Array = tokenizeString(str2); 
    // creo un set per teterminare i caratteri univoci della stringa
    const str3Check = new Set (str1Array);
    // valore booleano per assegnare il risultato
    let anagrams = true;
    // ciclo delle lettere della  seconda stringa e verifico se sono nel set
    str2Array.forEach(element => {
       if ((str3Check.has(element)!= true) || (Object.keys(str1Array).length != Object.keys(str2Array).length)) {
             anagrams = false     
       };
    });

    if (anagrams === false) {
    return 'The two words are not anagrams! they do not have the same letters';
    } else {
    return 'the two words are diagrams!';
    }
}

console.log(anagramsAnalyse(string1, string2));