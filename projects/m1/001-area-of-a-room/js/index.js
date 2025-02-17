let roomLength, roomWidth, roomArea; //

roomLength = prompt(
  "Please insert the length of the room in linear metres"
);
roomWidth = prompt("Please insert the width of the room in linear metres");
roomArea = roomLength * roomWidth; //calculation of room area
console.log(`The area of the room is ${roomArea.toFixed(2)} square meters`);
document.write(`The area of the room is ${roomArea.toFixed(2)} square meters`);
