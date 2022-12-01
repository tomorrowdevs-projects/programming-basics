
let numberInput = prompt("Please, enter a number: ");
let baseFrom = prompt("Please, enter the base of the number: ");
let baseTo =  prompt("Please, enter the base you'd like to convert you number to: ");


function convertBase (numberInput, baseFrom, baseTo) {
        let newNumber;

        if ((baseFrom && baseTo >= 2) && (baseFrom && baseTo <= 16))  {
            let newNumber = parseInt(numberInput, baseFrom);
            newNumber = newNumber.toString(baseTo);
            alert(newNumber);
        } else {
            alert("Invalid base, please enter a valide base: ");
            location.reload();
        }


}

convertBase(numberInput, baseFrom, baseTo);