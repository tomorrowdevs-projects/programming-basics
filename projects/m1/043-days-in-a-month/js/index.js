const numberUnits = parseInt(prompt("Enter the number of units"))
const unitMeasure = prompt("Enter the unit of measure (accepted values: teaspoons, tablespoons, cups)")

const result = getMeasures(numberUnits, unitMeasure);

alert(result);

function getMeasures(number, unit){

    let teaspoons = 0;
    let tablespoons = 0;
    let cups = 0;

    if(unit === "teaspoons"){

        // Calculate the number of spoons
        tablespoons = Math.floor(number / 3);
        // Calculate the number of cups
        cups = Math.floor(tablespoons / 16);
        // Calculate the number of spoons remaining
        tablespoons -= (cups * 16);
        // Calculate the number of teaspoons remaining
        teaspoons = number % 3;

    } else if( unit === "tablespoons" ) {

        // Calculate the number of cups
        cups = Math.floor(number / 16);
        // Calculate the number of teaspoons remaining
        tablespoons = number % 16;

    } else if( unit === "cups" ){

        cups = number;

    } 
    
    return `
        The number of cups is equal to ${cups} 
        The number of tablespoons is equal to ${tablespoons} 
        The number of teaspoons is equal to ${teaspoons}
    `;

}
