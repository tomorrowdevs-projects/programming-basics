
let string = prompt("Please, enter a string: ");
let nonSpace = /\S/;

function capitalize(string) {


    let stringArray = string.split("");

    i = 0;
    while (nonSpace.test(stringArray[i]) === false) {
        i++;
    }
    stringArray[i] = stringArray[i].toUpperCase();


        for (let i = 0; i <= stringArray.length; i++) {

            if (stringArray[i] === "?" || stringArray[i] === "." || stringArray[i] === "!" && i < stringArray.length - 1) {

                while (nonSpace.test(stringArray[i + 1]) === false) {
                    i++;
                }

            stringArray[i + 1] = stringArray[i + 1].toUpperCase();

            } else if (stringArray[i] === "i" && stringArray[i - 1] ===  " ") {
                stringArray[i] = stringArray[i].toUpperCase();
            }

        }

alert(stringArray.join(""));}



capitalize(string);