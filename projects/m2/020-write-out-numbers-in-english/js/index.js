const listInteger = {
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
  
const userNumber = prompt('Enter the number', '142')

function writeNumber(number, list){
    let message = ''
    let hundred = 0
    let ten = 0
    let unit = 0

    const calcUnits = number % 10
    const calcTens = (number % 100) - calcUnits
    const calcHundreds = (number - (calcTens + calcUnits)) / 100

    if(number < 0 || number > 999){
        message = 'Error! The number must be between 0 and 999'
    } else {

        if(number in list) {
        message = list[number]
        } else {
        hundred = list[calcHundreds]
        ten = list[calcTens]
        unit = list[calcUnits]
        
        if(hundred !== 'zero'){
            message += hundred + ' hundred '
        } 
        
        if(ten !== 'zero') {
            message += ten + '-'
        } 
        
        message += unit
        }
    }

    return message
}
  
console.log(writeNumber(userNumber, listInteger))
//   console.log(writeNumber(15, listInteger))
//   console.log(writeNumber(22, listInteger))
//   console.log(writeNumber(970, listInteger))
//   console.log(writeNumber(5, listInteger))
//   console.log(writeNumber(300, listInteger))
  