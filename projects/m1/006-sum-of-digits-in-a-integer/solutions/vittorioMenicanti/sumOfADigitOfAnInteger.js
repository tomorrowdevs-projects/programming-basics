
//Sum Of A digits In an Integer
    
const userDigits = prompt('Please enter a four digits number');

// Side note: prompt is reading each digits as a string not as a number


/*if(userDigits !== 4){
    alert('Please enter a four digits number only');
}*/

//grabing each string digits by [] since strings are arrays

const firstDigit = userDigits[0];
const secondDigit = userDigits[1];
const thirdDigit = userDigits[2];
const fourthDigit = userDigits[3];

//summing all digits by adding the + operator before each digits

alert( `The sum of your number digits is: ${ +firstDigit + +secondDigit + +thirdDigit + +fourthDigit}` );




