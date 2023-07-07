
  
// const userNumber = prompt('Enter the number', '142')

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
                message += hundred + ' hundred'
            } 
            
            if(ten !== 'zero') {
                message += ten + '-'
            } 
            
            if(unit !== "zero") {
            message += unit
            }
            }
    }

    return message
}
  
// console.log(writeNumber(userNumber, listInteger))
//   console.log(writeNumber(15, listInteger))
//   console.log(writeNumber(22, listInteger))
//   console.log(writeNumber(970, listInteger))
//   console.log(writeNumber(5, listInteger))
//   console.log(writeNumber(300, listInteger))
module.exports = writeNumber