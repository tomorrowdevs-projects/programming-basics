
let numberArray = [];

    function getValue () {
        let value;

        while (value !== 0) {
            value = parseInt(prompt("Please, enter a value: "));
            numberArray.push(value);
        }

        numberArray.pop();
    }

    function sortArray (array) {

        array.sort(function(a, b){return b - a})
    }

getValue();
sortArray(numberArray);
alert(numberArray.join("\n"));