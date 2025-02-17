// read strings containing 8 bits until the user enters a blank line.
const bits = prompt('Enter a bit')
const bit = bits.split("")
let message = "";
let calcBit = 0;
if(bit.length < '8' || bit.length > '8'){
  message = "Error!"
} else {
  for (const item of bit) { 
    calcBit += parseInt(item)
  }
  if(calcBit % 2 === 0) {
    message = "The parity bit should be  0"
  } else {
    message = "The parity bit should be  1"
  }
}
alert(message)