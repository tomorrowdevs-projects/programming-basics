let roomWidth;
let roomLenght;
let roomArea;

roomWidth = prompt("Enter the Width of a Room in meters");
roomLenght = prompt("Enter the Lenght of a Room in meters");

roomArea = (roomWidth) * (roomLenght);

alert( `The area of the room is ${roomArea} m` );



/* Dopo aver scritto la prima soluzione ho provato ad abbreviare il codice toglendo la variabile roomArea e includendo la moltiplicazione all'interno della stringa di alert:

let roomWidth;
let roomLenght;

roomWidth = prompt("Enter the Width of a Room in meters");
roomLenght = prompt("Enter the Lenght of a Room in meters");

alert( `The area of the room is ${(roomWidth) * (roomLenght)} m` );

*/