/* 
  1-Write a program that asks the user to enter the width and length of a room.  

  2-Once these values have been read, your program should compute and display the area of the room.  

  3-The length and the width will be entered as **floating-point numbers**.  

  4-Include units in your prompt and output message; either feet or meters, depending on which
  unit you are more comfortable working with.

*/

const width = prompt("Inserisci la larghezza della stanza in Mq");
console.log(width)
console.log(parseFloat(width))
const legth = 2.9;

const area = width * legth;

console.log("area" + area)

const perimeter = parseFloat(width) + legth;
console.log("perimeter" + perimeter)