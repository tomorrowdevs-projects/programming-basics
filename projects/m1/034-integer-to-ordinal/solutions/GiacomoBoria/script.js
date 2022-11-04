/*Words like first, second and third are referred to as ordinal numbers. In this exercise, you will write a function that takes an integer as its only parameter and returns a string containing the appropriate English ordinal number as its only result. Your function must handle the integers between 1 and 12 (inclusive). It should return an empty string if the function is called with an argument outside of this range. Include a main program that demonstrates your function by displaying each integer from 1 to 12 and its ordinal number. Your main program should only run when your file has not been imported into another program.*/

function getOrdinalNumber(num) {
    const ordinalNumbers = ["first", "Second", "Third","Fourth", "Fifth", "Sixth", "Seventh", "Eigth", "Ninth", "Tenth", "Eleveth", "Twelfth"];
  
    if (num <= 0 || num > 12) {
      num = "";
      return num;
    } else {
      num = ordinalNumbers[num -1];
      return num;
    }
  }
  
  let cardinalNumber = parseInt(prompt("Please, enter a number (from 1 to 12) to see its ordinal:"))
  
  alert(`The ordinal number of ${cardinalNumber} is ${getOrdinalNumber(cardinalNumber)}\n`);
  
  let check = confirm(`Do you want to find out the complete list of numbers from 1 to 12 in ordinal numbers?\n`)
  
  if (check === true) {
    for (i = 1; i <= 12; i++) {
    alert(`The ordinal number of ${i} is ${getOrdinalNumber(i)}`);
  } 
  } else {
    alert(`Tille the next, bye ; )`);
  }