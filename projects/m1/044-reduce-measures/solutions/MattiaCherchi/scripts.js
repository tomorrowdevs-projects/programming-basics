let userUnits = prompt('Enter the unit of measure: Cup, Tablespoon or Teaspoon').toLowerCase();
let userNumber = parseInt(prompt(`Enter the number of ${userUnits}`));

if (/^[0-9]+$/.test(userNumber)) {

    function reduceMisures(number, unit) {
        let cup, tablespoon, teaspoon;
        let message = '';

        if (unit == 'cup' || unit == 'cups') {
            cup = number;
            message = `for the recipe you need; ${cup} cup\'s`;

        } else if (unit == 'tablespoon' || unit == 'tablespoons') {
            cup = Math.floor(number / 16);
            tablespoon = number % 16;
            message = `for the recipe you need; ${cup} cup/\'s + ${tablespoon} tablespoon/\'s`;

        } else if (unit == 'teaspoon' || unit == 'teaspoons') {
            cup = Math.floor(number / 48);
            teaspoon = number % 48;
            tablespoon = Math.floor(teaspoon / 3);
            teaspoon = teaspoon % 3;
            message = `for the recipe you need; ${cup} cup/\'s + ${tablespoon} tablespoon/\'s + ${teaspoon} teaspoon/\'s`;

        } else {
            message = 'Error! enter the correct unit o measure';
        }
        return alert(message);
    }

    reduceMisures(userNumber, userUnits);

} else {
    alert('Error! you entered an invalid number');
}