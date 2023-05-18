//1) array solution.
function getNumberFromUser (myNum) {
  num = new Array(); //Created an array which contain twelve elements with twelve value,in this case every element contain a string 
  num[1] = 'First';
  num[2] = "Second";
  num[3] = "Third";
  num[4] = 'Fourth';
  num[5] = "Fifth";
  num[6] = "Sixth";
  num[7] = 'Seventh';
  num[8] = "eighth";
  num[9] = "Nineth";
  num[10] = 'Tenth';
  num[11] = "Eleventh";
  num[12] = "Twelfth";

  return num[myNum];
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
  const ordinalNum = {  //created an object with property = integer number and value = ordinal number.
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
  
  
    return ordinalNum[myNum];
   
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