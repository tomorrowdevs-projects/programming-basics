function distanceBeetween (longerStr, shortStr){
    const longerStrArr = longerStr.split('');
    const shortStrArr = shortStr.split('');
    if(longerStr.length === 0) return 0
    else{
        let cont = 0;
        const char1 = longerStrArr.splice(0,1).join('').toLocaleUpperCase();
        const char2 = shortStrArr.splice(0,1).join('').toLocaleUpperCase();
        if(char1 !== char2) {cont++; char2 === '' ?  letterDifference += `Added ${char1} to the end\n` : letterDifference += `From ${char1} to ${char2}\n`}
        return cont + distanceBeetween(longerStrArr.join(''), shortStrArr.join(''))
    }
};

let letterDifference = '';
let longerStr = prompt('Enter a first string');
let shortStr = prompt('Enter a second string');
if(longerStr.length < shortStr.length) [longerStr, shortStr] = [shortStr,longerStr];

alert(`First String:         ${longerStr.toLocaleUpperCase()}    character: ${longerStr.length}\nSecond String:    ${shortStr.toLocaleUpperCase()}    character: ${shortStr.length}\n\nEdit Distance: ${distanceBeetween(longerStr, shortStr)}\n\n${letterDifference}`);