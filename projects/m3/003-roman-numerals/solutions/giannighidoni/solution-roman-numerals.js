const dictRomanNum = {
    "M": 1000,
    "D": 500,
    "C": 100,
    "L": 50,
    "X": 10,
    "V": 5,
    "I": 1
};


function romanToInt(romanNum){
    if(romanNum.length === 0){
        return 0;
    } else if(dictRomanNum[romanNum[0]] < dictRomanNum[romanNum[1]]){
        return (dictRomanNum[romanNum[1]] - dictRomanNum[romanNum[0]] + romanToInt(romanNum.slice(2)));
    } else {
        return (dictRomanNum[romanNum[0]] + romanToInt(romanNum.slice(1)));
    }
}

console.log(romanToInt("MCXIV")); 