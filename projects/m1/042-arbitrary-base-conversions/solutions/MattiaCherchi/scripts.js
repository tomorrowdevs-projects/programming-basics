const fromBase = prompt('Enter the base of your number');
const userNumber = prompt('Enter a number');
const toBase = prompt('Enter the base on which to convert the number')
const baseFrom2To16 = /^([2-9]|1[0-6])$/;

function checkBase(fromBase, toBase) {

    if (baseFrom2To16.test(fromBase) && baseFrom2To16.test(toBase)) {
        conversionNumber(fromBase, userNumber, toBase)
    } else {
        alert('Error!the program only works with bases between 2 and 16')
    }

}

checkBase(fromBase, toBase)


function conversionNumber(fromBase, userNumber, toBase) {
    let message = '';
    let conversion = parseInt(userNumber, fromBase).toString(toBase)

    if (conversion == 'NaN') {
        message += 'You havn\'t entered the number correctly'
    } else {
        message += `the result of converting your number ${userNumber}
  from base:${fromBase}
  to base:${toBase}
  is: ${conversion.toUpperCase()}`
    }
    return alert(message)
}
