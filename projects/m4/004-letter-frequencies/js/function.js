function getArrLett(string){
  const arrLetters = string.toLowerCase().replace(/[^a-z]/g,'').split('').sort();
  return arrLetters;
}

function getLetterFreq(arr){
    const lettFreq = {};
    arr.forEach((char) => {
        (lettFreq[char]) ? lettFreq[char]++ : lettFreq[char] = 1;
    });
      
    return lettFreq;
}

module.exports = {getArrLett, getLetterFreq};