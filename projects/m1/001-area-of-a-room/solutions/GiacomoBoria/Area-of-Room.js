/* Write a program that asks the user to enter the width and length of a 
room. Once these values have been read, your program should compute and 
display the area of the room. The length and the width will be entered as 
floating-point numbers. Include units in your prompt and output message; 
either feet or meters, depending on which unit you are more comfortable 
working with. */

// description user program
alert("Ciao! Per scoprire l'area totale della tua stanza saranno necessarie due misure: larghezza e lunghezza. Se sei in possesso di questi dati clicca il tasto OK per procedere")

// insert lenght
const roomLength = parseFloat(prompt("Digita la larghezza esatta della tua stanza(separa con . i metri dai centimetri)", 0))

// insert width
const roomWidth = parseFloat(prompt("Digita la lunghezza esatta della tua stanza(separa con . i metri dai centimetri)", 0));

// Operation
const areaRoom = roomLength * roomWidth

// Solution
window.prompt("La tua stanza ha un area di", areaRoom);
 