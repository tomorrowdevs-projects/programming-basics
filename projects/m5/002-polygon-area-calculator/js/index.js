const readline = require('readline');
const { Rectangle, Square } = require('./functions');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log("\nSeleziona un'opzione:");
    console.log("1. Crea un rettangolo");
    console.log("2. Crea un quadrato");
    console.log("3. Operazioni con il rettangolo o quadrato esistente");
    console.log("4. Esci");
    rl.question("Scegli un'opzione (1/2/3/4): ", handleMenuChoice);
}

function handleMenuChoice(choice) {
    switch (choice) {
        case '1':
            createRectangle();
            break;
        case '2':
            createSquare();
            break;
        case '3':
            shapeOperations();
            break;
        case '4':
            console.log("Arrivederci!");
            rl.close();
            break;
        default:
            console.log("Scelta non valida. Riprova.");
            menu();
    }
}

let currentShape;

function createRectangle() {
    rl.question("Inserisci la larghezza del rettangolo: ", width => {
        rl.question("Inserisci l'altezza del rettangolo: ", height => {
            currentShape = new Rectangle(parseInt(width), parseInt(height));
            console.log("Rettangolo creato:", currentShape.toString());
            menu();
        });
    });
}

function createSquare() {
    rl.question("Inserisci il lato del quadrato: ", side => {
        currentShape = new Square(parseInt(side));
        console.log("Quadrato creato:", currentShape.toString());
        menu();
    });
}

function shapeOperations() {
    if (!currentShape) {
        console.log("Nessuna forma esistente. Crea prima un rettangolo o un quadrato.");
        menu();
        return;
    }
    console.log("\nSeleziona un'opzione:");
    console.log("1. Ottieni l'area");
    console.log("2. Ottieni il perimetro");
    console.log("3. Ottieni la diagonale");
    console.log("4. Ottieni l'immagine");
    console.log("5. Torna al menu principale");
    rl.question("Scegli un'opzione: ", choice => {
        switch (choice) {
            case '1':
                console.log("Area:", currentShape.get_area());
                shapeOperations();
                break;
            case '2':
                console.log("Perimetro:", currentShape.get_perimeter());
                shapeOperations();
                break;
            case '3':
                console.log("Diagonale:", currentShape.get_diagonal());
                shapeOperations();
                break;
            case '4':
                console.log("Immagine:\n", currentShape.get_picture());
                shapeOperations();
                break;
            case '5':
                menu();
                break;
            default:
                console.log("Scelta non valida. Riprova.");
                shapeOperations();
        }
    });
}

menu();
