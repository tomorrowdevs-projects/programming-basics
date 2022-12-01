
let unitNumber = parseInt(prompt("Please, enter the unit number:"));
let unitMeasure = parseInt(prompt("Please, enter the unit of measure ('1' for 'teaspoons', '2' for 'teablespoons', '3' for 'cups'):"));


function getUnit(unitNumber, unitMeasure) {

    let cups;
    let tablespoons;
    let teaspoons;


    if        (unitMeasure == 3) {

        cups = unitNumber;
        tablespoons = 0;
        teaspoons = 0;



    } else if (unitMeasure == 2) {

        let teaspoonsCount = unitNumber * 3;

        cups = (teaspoonsCount / 48);
        tablespoons = (teaspoonsCount % 48) / 3;
        teaspoons = ((teaspoonsCount % 48) % 3);



    } else if (unitMeasure == 1) {

        cups = (unitNumber / 48);
        tablespoons = (unitNumber % 48) / 3;
        teaspoons = (unitNumber % 48) % 3;



    }

    alert( Math.floor(cups) + " cups, " + Math.floor(tablespoons) + " tablespoons, and " + Math.floor(teaspoons) + " teaspoons!" )

}

getUnit(unitNumber, unitMeasure);