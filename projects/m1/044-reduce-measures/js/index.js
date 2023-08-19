// // # Reduce Measures

// // Many recipe books still use cups, tablespoons and teaspoons to describe the volumes of ingredients used when cooking or baking. 
// While such recipes are easy enough to follow if you have the appropriate measuring cups and spoons, 
// they can be difficult to double, triple or quadruple when cooking Christmas dinner for the entire extended family. 
// For example, a recipe that calls for 4 tablespoons of an ingredient requires 16 tablespoons when quadrupled. 
// However, 16 tablespoons would be better expressed (and easier to measure) as 1 cup.
// // Write a function that expresses an imperial volume using the largest units possible. 
// // The function will take the number of units as its first parameter, and the unit of measure (cup, tablespoon or teaspoon) as its second parameter. 
// // It will return a string representing the measure using the largest possible units as its only result. 
// // For example, if the function is provided with parameters representing 59 teaspoons then it should return the string “1 cup, 3 tablespoons, 2 teaspoons”.

// // # Riduce le misure

// // Molti libri di ricette usano ancora tazze, cucchiai e cucchiaini per descrivere i volumi degli ingredienti usati durante la cottura o la cottura al forno.
// Mentre queste ricette sono abbastanza facili da seguire se hai i misurini e i cucchiai appropriati,
// possono essere difficili da raddoppiare, triplicare o quadruplicare quando si cucina la cena di Natale per l'intera famiglia allargata.
// Ad esempio, una ricetta che richiede 4 cucchiai di un ingrediente ne richiede 16 quando quadruplicata.
// Tuttavia, 16 cucchiai sarebbero meglio espressi (e più facili da misurare) come 1 tazza.
// // Scrivi una funzione che esprima un volume imperiale utilizzando le unità più grandi possibili.
// // La funzione prenderà il numero di unità come primo parametro e l'unità di misura (tazza, cucchiaio o cucchiaino) come secondo parametro.
// // Restituirà una stringa che rappresenta la misura utilizzando le unità più grandi possibili come unico risultato.
// // Ad esempio, se la funzione è dotata di parametri che rappresentano 59 cucchiaini, dovrebbe restituire la stringa "1 tazza, 3 cucchiai, 2 cucchiaini".




let userNumber = +prompt("Ienter the number of your unit of measure: ");
let parameter = prompt("enter the parameter, which can be a cup, tablespoon, or teaspoon ").toUpperCase();

if(userNumber <=0 || isNaN(userNumber)){
    alert('repeat, please');
} else{
    function imperialVolume(userNumber, parameter){
        let cup = 0;
        let tablespoon = 0;
        let teaspoon = 0;
        let restParameters = 0;
        

        if(parameter === 'CUP'){
            cup += userNumber
        }else if(parameter === 'TABLESPOON'){
            cup += Math.floor(userNumber/16);
            restParameters = userNumber % 16;
            tablespoon += Math.floor(restParameters / 3);
            restParameters %= 3;
            teaspoon += restParameters;
        }else if(parameter === 'TEASPOON'){
            cup += Math.floor(userNumber / 48);
            restParameters = userNumber % 48;
            tablespoon += Math.floor(restParameters / 3);
            teaspoon += restParameters % 3
        }else{
            alert('repeat, please');
        }
        return console.log(`for your recipe you need: ${cup} cup, ${tablespoon} tablespoon, ${teaspoon} teaspoon`)
    }
}

imperialVolume(userNumber, parameter)
 
