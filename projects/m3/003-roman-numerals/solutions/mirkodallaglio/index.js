const romanNumValue = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1,};

function romanNumToDecimal (romanNum){
    const romanArr = romanNum.split('');
    if(romanArr.length === 0) return 0
    else {
        const letterValue = romanNumValue[romanArr.splice(0,1)]
        const sum = romanNumToDecimal(romanArr.join(''))
        return romanNumValue[romanArr[0]] > letterValue ? sum - letterValue : sum + letterValue
    }
};

const romanNum = prompt('Enter a Roman Number');
alert(`Roman:  ${romanNum}  ==>  Decimal: ${romanNumToDecimal(romanNum)}`)

