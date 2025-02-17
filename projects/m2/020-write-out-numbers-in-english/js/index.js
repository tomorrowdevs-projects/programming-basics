const number = 567;
const number2 = 56;
const number3 = 999;

const dictionary = {
    0: 'zero',
    1:'one',
    2: 'two', 
    3: 'three', 
    4: 'four ', 
    5: 'five', 
    6: 'six', 
    7: 'seven', 
    8: 'eight', 
    9: 'nine', 
    10: 'ten', 
    11: 'eleven', 
    12: 'twelve ', 
    13: 'thirteen', 
    14: 'fourteen', 
    15: 'fifteen', 
    16: 'sixteen', 
    17: 'seventeen', 
    18: 'eighteen', 
    19: 'nineteen', 
    20: 'twenty', 
    30: 'thirty', 
    40: 'forty', 
    50: 'fifty', 
    60: 'sixty', 
    70: 'seventy', 
    80: 'eighty', 
    90: 'ninety'
}

function numberToLetter(d,n){
    const letter = [];
    const nToS = n.toString();
    for(i=0;i<nToS.length;i++){
        letter.push(d[parseInt(nToS[i])]) 
    }
    if(n > 100 ){
        return (`${letter[0]} hundred ${d[nToS[1]*10]} ${letter[2]}`)      
    }    
    else if (nToS.length===2){
        return (`${d[nToS[0]*10]} ${letter[1]}`) 
    } else if(nToS.length===1){
        return letter.join("") 
    }
    return letter

}
console.log(numberToLetter(dictionary,number))
console.log(numberToLetter(dictionary,number2))
console.log(numberToLetter(dictionary,number3))