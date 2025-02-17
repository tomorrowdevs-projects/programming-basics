
// i  declare my two main arrays;
let numberInputArray = [];
let numberNewArray = [];


// then i create a function "getValue" to get the values for my main array "numberInputArray" till the user enter a "0";
    function getValue () {

        let value;

        while (value !== 0 ) {
            value = parseInt(prompt("Please, enter a value: "))
            numberInputArray.push(value);
        }

        numberInputArray.pop();

    }

// here i've created a function to stop the script and show an error if the user enter less than 4 entries;
    function showError (arrayLength) {

        if (arrayLength < 4){
            alert("Please, enter more than 3 values!")
            confirm("Would you like to retry?");

            if (confirm) {
                location.reload();
            } else {
                throw new Error('This is not an error. This is just to abort javascript')
            }
        }

    }

// here's the funtion that with the use of pop and shift methods delete the highest and the lowest element in the array;
    function reduceArray () {
        numberNewArray = [...numberInputArray];
        numberNewArray.pop();
        numberNewArray.shift();
    }


getValue();
showError(numberInputArray.length);
reduceArray();
alert(numberInputArray.join(" - ") + "\n\n\n" + numberNewArray.join(" - "));