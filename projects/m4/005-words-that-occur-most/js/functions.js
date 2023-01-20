function getArrWords(string){
    const words = string.toLowerCase().split(/\W+/).filter(Boolean);
    return words;
}

function getMostOccur(arr){
    const freq = {};
    arr.forEach(item => {
         (freq[item]) ? freq[item] ++ : freq[item] = 1;
    });
    const sorteWords = Object.fromEntries(Object.entries(freq).sort((a,b) => b[1] - a[1]));
    return sorteWords
}

module.exports = {getArrWords, getMostOccur};