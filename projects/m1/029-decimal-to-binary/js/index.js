do {
    let userInput = prompt("Inserisci un numero decimale");
    let binaryConvert = "";
    let userInput2;

    if (!isNaN(userInput) && userInput !== null && userInput !== '') {
        userInput = parseInt(userInput);
        userInput2 = userInput;

        while (userInput !== 0) {
            let r = userInput % 2;
            binaryConvert = r.toString() + binaryConvert;
            userInput = Math.floor(userInput / 2);
        }

        console.log(`La rappresentazione binaria di ${userInput2} è ${binaryConvert}`);
        break;
    } else {
        console.log(`Per favore, inserisci un numero valido.`);
    }
} while (true);

