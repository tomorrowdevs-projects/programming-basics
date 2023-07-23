// # Compute the Perimeter of a Polygon

// Write a program that computes the perimeter of a polygon. Begin by reading the x and y coordinates for the first point on the perimeter of the polygon from the user. Then continue reading pairs of values until the user enters a blank line for the x-coordinate. Each time you read an additional coordinate you should compute the distance to the previous point and add it to the perimeter. When a blank line is entered for the x-coordinate your program should add the distance from the last point back to the first point to the perimeter. Then the perimeter should be displayed. Sample input and output values are shown below. 
// The input values entered by the user are shown in bold.

// ```
// Enter the first x-coordinate: 0
// Enter the first y-coordinate: 0
// Enter the next x-coordinate (blank to quit): 1 Enter the next y-coordinate: 0
// Enter the next x-coordinate (blank to quit): 0 Enter the next y-coordinate: 1
// Enter the next x-coordinate (blank to quit):
// The perimeter of that polygon is 3.414213562373095
// ```
// # Calcola il perimetro di un poligono

// Scrivi un programma che calcoli il perimetro di un poligono. 
// Inizia leggendo dall'utente le coordinate x e y per il primo punto sul perimetro del poligono. 
// Quindi continuare a leggere coppie di valori finché l'utente non inserisce una riga vuota per la coordinata x. 
// Ogni volta che leggi una coordinata aggiuntiva dovresti calcolare la distanza dal punto precedente e aggiungerla al perimetro. 
// Quando viene inserita una riga vuota per la coordinata x, il programma dovrebbe aggiungere la distanza dall'ultimo punto al primo punto al perimetro. 
// Quindi dovrebbe essere visualizzato il perimetro. I valori di input e output di esempio sono mostrati di seguito.
// I valori di input inseriti dall'utente sono mostrati in grassetto.

// ```
// Inserisci la prima coordinata x: 0
// Inserisci la prima coordinata y: 0
// Inserisci la prossima coordinata x (vuoto per uscire): 1 Inserisci la prossima coordinata y: 0
// Inserisci la prossima coordinata x (vuoto per uscire): 0 Inserisci la prossima coordinata y: 1
// Inserisci la prossima coordinata x (vuoto per uscire):
// Il perimetro di quel poligono è 3.414213562373095
// ```

let x =  +prompt(`enter the x coordinate for your polygon:`);
let y =  +prompt(`enter the y coordinate for your polygon:`);

let previousX = x;
let previousY = y;
let nextX;
let nextY = 0;
let perimeter = 0;
let side = 0;
let lastX = 0;




while (nextX != " ") {
    nextX = + prompt(`enter your next x coordinate, to exit this program leave empty:`);

    if (nextX >= 0 && nextX!="") {

        nextY = prompt(`enter your next y coordinate:`);

        let side = Math.sqrt(((nextX - previousX) ** 2) + ((nextY - previousY) ** 2));
        perimeter += side;

        previousX = nextX;
        previousY = nextY;
        lastX = previousX;

    } else {
        break;

    }

}

side = Math.sqrt(((lastX - x) ** 2) + ((nextY - y) ** 2));
perimeter += side;

alert(`The perimeter the your polygon is: ${perimeter.toFixed(2)}cm`);