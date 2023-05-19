//1) array solution.
function getNumberFromUser (myNum) {
 //Created an array which contain twelve string elements. 
 const ordinalNumbers = ['First', "Second", "Third", 'Fourth', "Fifth", "Sixth", 'Seventh', "eighth", "Nineth", 'Tenth', "Eleventh", "Twelfth"];
  return ordinalNumbers[myNum - 1]; 
}
// the function receives the input from the prompt, reads the position of the element and returns its value.
let myNum = 0;
while (true) {
  myNum = parseInt(prompt('enter a number from 1 to 12'));
  if (isNaN(myNum)) { //if prompt read an empy space,it ends the loop.
    break;
  }
  if (myNum >= 1 && myNum <= 12) { // if receive a number >= 1 and <= 12 it performs the function.
    const myOrdinal = getNumberFromUser(myNum);
    console.log(myOrdinal);
  } else {// otherwise it shows an error message and restart the loop.
    console.log('Error, enter a number from 1 to 12');
  }
}





//2) object solution.
function getNumberFromUser(num) {
  const ordinalNumbers = {  //created an object with property = integer number and value = ordinal number.
    1 : 'first',
    2 : 'second',
    3 : 'third',
    4 : 'fourth',
    5 : 'fifth',
    6 : 'sixth',
    7 : 'seventh',
    8 : 'eighth',
    9 : 'ninth',
    10 : 'tenth',
    11 : 'eleventh',
    12 : 'twelfth',
  };
  
  
    return ordinalNumbers[myNum];
   
}
// the function receives the input from the prompt, reads the property of the object and returns its value.
let myNum = 0;
while (true) {
  myNum = parseInt(prompt('enter a number from 1 to 12'));
  if (isNaN(myNum)) { //if prompt read an empy space,it ends the loop.
    break;
  }
  if (myNum >= 1 && myNum <= 12) { // if receive a number >= 1 and <= 12 it performs the function.
    const myOrdinal = getNumberFromUser(myNum);
    console.log(myOrdinal);
  } else { // otherwise it shows an error message and restart the loop.
    console.log('Error, enter a number from 1 to 12');
  }
}