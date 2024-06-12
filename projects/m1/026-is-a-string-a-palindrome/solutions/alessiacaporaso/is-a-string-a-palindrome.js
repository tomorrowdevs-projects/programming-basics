// enter string
const enterString = prompt('Please enter the string to check');
// divide string in the array
const divideString = enterString.split("");
console.log(divideString)
// reverse array
const reverseString = divideString.reverse()
console.log(reverseString)
// join array
const joinString = reverseString.join("")
console.log(joinString)
// check the string and if enter string is equal to the reverse string return palindrome
if(enterString == joinString){
  message = 'The string is a palindrome'
} else {
   message = 'The string isn\'t a palindrome'
}
alert(message)