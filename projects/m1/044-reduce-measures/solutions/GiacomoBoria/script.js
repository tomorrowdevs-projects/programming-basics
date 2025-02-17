/*Many recipe books still use cups, tablespoons and teaspoons to describe the volumes of ingredients used when cooking or baking. While such recipes are easy enough to follow if you have the appropriate measuring cups and spoons, they can be difficult to double, triple or quadruple when cooking Christmas dinner for the entire extended family. For example, a recipe that calls for 4 tablespoons of an ingredient requires 16 tablespoons when quadrupled. However, 16 tablespoons would be better expressed (and easier to measure) as 1 cup. Write a function that expresses an imperial volume using the largest units possible. The function will take the number of units as its first parameter, and the unit of measure (cup, tablespoon or teaspoon) as its second parameter. It will return a string representing the measure using the largest possible units as its only result. For example, if the function is provided with parameters representing 59 teaspoons then it should return the string “1 cup, 3 tablespoons, 2 teaspoons”.*/


/* convert units 
cup;
tablespoons 16 cup, 
3 teaspoons in tablespoons
teaspoons 48 cup*/

function getQuantityUnits(userQuantity, userMeasure) {

    let cup;
    let tablespoons;
    let teaspoons;
      
    if (userMeasure === "C") {
      cup = userQuantity;
      alert(`For your recipe you need: ${Math.floor(cup)} Cup.`);
      
    } else if (userMeasure === "T") {
      cup = userQuantity / 16;
      tablespoons = userQuantity % 16;
      alert(`For your recipe you need: ${Math.floor(cup)} Cup, ${Math.floor(tablespoons)} Tablespoons.`);
      
    } else if (userMeasure === "TE") {
      cup = userQuantity / 48;
      tablespoons = (userQuantity / 3) % 16;
      teaspoons = userQuantity % 3;
      alert(`For your recipe you need: ${Math.floor(cup)} Cup, ${Math.floor(tablespoons)} Tablespoons, ${Math.floor(teaspoons)} Teaspoons.`)
    }
    
    }
    const userQuantity = Number(prompt("Type in the measurement quantity"))
    const userMeasure = prompt("Type in the unit of measurement\nDigit C, if tablespoons type T and if teaspoons type TE").toUpperCase();
    
    
    alert(getQuantityUnits(userQuantity, userMeasure))