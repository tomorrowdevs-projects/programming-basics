//020-write-out-numbers-in-english

const number = parseInt(prompt('Please, entere an integer between 0 and 999 :',0));

const numberToWords = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven', 
    12: 'twelve', 
    13: 'thirteen', 
    14: 'fourteen', 
    15: 'fifteen', 
    16: 'sixteen', 
    17: 'seventeen', 
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty', 
    30: 'thirty', 
    40: 'fourty', 
    50: 'fifty', 
    60: 'sixty',
    70: 'seventy', 
    80: 'eighty', 
    90: 'ninety'
    //100: 'hundred'
}

function convertNumbers(num) {
    
    const numberByWords = [];
    const numLength = num.toString().length;

        for(i = numLength ; i > 0 ; i--){
            
            if((i===3) || ((i===2)&&(numLength === 2)) || ((i===1)&&(numLength === 1)) ){
                firstNum = parseInt((num.toString()).substr(i-1,1));           
                numberByWords.push(numberToWords[firstNum]);
            } else if (((i===2) && (numLength===3)) || ((i===1) && (numLength === 2))) {
                secondNum = parseInt((num.toString()).substr(i-1,1) + '0'); 
                numberByWords.push(numberToWords[secondNum]);
            }else if (((i===1) && (numLength===3))) { 
                thirdNum = parseInt((num.toString()).substr(i-1,1));  
                numberByWords.push(numberToWords[thirdNum] + ' hundred');
            };
            
        };

    return ((numberByWords.reverse()).toString()).replaceAll(',',' ');
}

console.log(convertNumbers(number))