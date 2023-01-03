function mainProgram() {
    const userChoice = prompt('Enter number and base', '16-4')
    // split base and number of user
    const split = userChoice.split('-')
    const numberConvert = parseInt(split[0])
    const baseConvert= parseInt(split[1])
    console.log(numberConvert, baseConvert)
    // if the number or base is < 2 and > 16 display an error message 
    if(numberConvert >= 2 && numberConvert <= 16 && baseConvert >= 2 && baseConvert <= 16){
      return firstConversion(numberConvert, baseConvert)
    } else {
      alert('Invalid number or base')
    }
  }
  // converts from an arbitrary base to base 10
  function firstConversion(number, base) {
    const firstConversionNumber = parseInt(number, base).toString()
    console.log('first conversion: ' + firstConversionNumber)
    return lastConversion(firstConversionNumber, base)
  }
  // converts from base 10 to an arbitrary base
  function lastConversion(number, base){
    const lastConversionNumber = parseInt(number, base)
    return lastConversionNumber
  }
  
  console.log(mainProgram())