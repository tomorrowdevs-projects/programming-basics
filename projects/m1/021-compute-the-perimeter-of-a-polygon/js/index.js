
let point = [];

let x = prompt("Inserisci la prima coordinata x:");
let y = prompt("Inserisci la prima coordinata y:");

point.push([parseFloat(x), parseFloat(y)]);

do {
    x = prompt("Inserisci la successiva coordinata x (lascia vuoto per uscire):");
    if(x !== '') { 
        y = prompt("Inserisci la successiva coordinata y:");
        point.push([parseFloat(x), parseFloat(y)]);
    }
} while(x !== ''); 


let perimeter = 0;

for (let i = 0; i < point.length; i++) {
    let nextPoint = point[(i+1) % point.length]; 
    let dx = point[i][0] - nextPoint[0]; 
    let dy = point[i][1] - nextPoint[1]; 
    let distance = Math.sqrt(dx * dx + dy * dy); 
    perimeter += distance; 
}

if (point.length <= 2) {
    console.log ("Non hai inserito un numero sufficiente di dati per calcolare il perimetro di un poligono")
} else (console.log(perimeter))


