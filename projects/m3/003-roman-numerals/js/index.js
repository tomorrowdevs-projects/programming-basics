// const romanNumb = prompt('Enter a roman Numeral to convert in decimal number');

const romanNumb1 = 'LXXXIV';
const romanNumb2 = 'XCII';
const romanNumb3 = 'C';
const romanNumb4 = 'MMXXII';
const romanNumb5 = 'CML';


const convertRomanNumerals = (romanNumb) =>{

    const romanHash = {
        M : 1000,
        D : 500,
        C : 100,
        L : 50,
        X : 10,
        V : 5,
        I : 1
    }
    
    if(romanNumb == '') return 0;
    
    return (romanHash[romanNumb[1]] > romanHash[romanNumb[0]]) ?
             romanHash[romanNumb[1]] - romanHash[romanNumb[0]] + convertRomanNumerals(romanNumb.slice(2))
            : romanHash[romanNumb[0]] + convertRomanNumerals(romanNumb.slice(1));
  
}

console.log(convertRomanNumerals(romanNumb1));
console.log(convertRomanNumerals(romanNumb2));
console.log(convertRomanNumerals(romanNumb3));
console.log(convertRomanNumerals(romanNumb4));
console.log(convertRomanNumerals(romanNumb5));
