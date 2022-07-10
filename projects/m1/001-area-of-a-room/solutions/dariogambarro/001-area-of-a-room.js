/* 
Write a program that asks the user to enter the width and length of a room. V

Once these values have been read, your program should compute and display the area of the room. 

The length and the width will be entered as floating-point numbers. Include units in your prompt and output message; either feet or meters, depending on which
unit you are more comfortable working with. */

let roomWidth;
let roomLenght;
let roomArea;

roomWidth = prompt("Enter the width of the room in meters","");
roomLenght = prompt("Enter the lenght of the room in meters","");

roomArea = (roomWidth * roomLenght);
alert(`The area of the room is ${roomArea} meters`);