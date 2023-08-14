// Write a program that asks the user to enter the width and length of a room.  
// Once these values have been read, your program should compute and display the area of the room.  
// The length and the width will be entered as **floating-point numbers**.  
// Include units in your prompt and output message; either feet or meters, depending on which
// unit you are more comfortable working with.

// 1.Scrivete un programma che chieda all'utente di inserire la larghezza e la lunghezza di una stanza.
// 2.Una volta letti questi valori, il programma dovrebbe calcolare e visualizzare l'area della stanza.
// 3.La lunghezza e la larghezza verranno inserite come **numeri a virgola mobile**.
// 4.Includere le unità nel messaggio di richiesta e di output; piedi o metri, a seconda di quale
// unità con cui ti senti più a tuo agio a lavorare.

let unitOfTheMeasure = " MQ";
// let width = Number(prompt("You insert the width of the room:  " ));
// let length = Number(prompt("You insert the lenght of the room: "));
let width = prompt("You insert the width of the room:  " );
let length = prompt("You insert the lenght of the room: ");
// width = width.toFixed(2);
// length = length.toFixed(2);
parseFloat(width);
parseFloat(length);

 alert("the widht is " + width + unitOfTheMeasure);
 alert("the length is " + length + unitOfTheMeasure);


console.log(typeof width);
console.log(typeof length);

let area = width * length;

if (isNaN(area)) {
    alert("repeat,please!");
    
}else{
    alert(area);
}



// let area = Number(width * length);
// area = area.toFixed(2)

// console.log(typeof area)
// alert(area)

// if(area != typeof String){
//     alert("Repeat, please!")
// }else {
//     alert(area);
// }



