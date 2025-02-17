
let numberInput;

while (numberInput != 0){

    numberInput = prompt('Please enter an integer:');

    if (numberInput === 0) {

        alert("The users has quitted the software!");
        break;


    } else if (numberInput !== 0) {

        let lastTerm = 0;
        let nextTerm = 0;
        let prevTerm = numberInput;
        let termArray = [];

        while (prevTerm !== 1) {
            if (prevTerm % 2 === 0) {
                nextTerm = prevTerm / 2;
                termArray.push(nextTerm);

            } else {
                nextTerm = (prevTerm * 3) + 1;
                termArray.push(nextTerm);
            }

            prevTerm = nextTerm;
        }

        alert("The sequence is: " + numberInput + ", " + termArray.join(", ") + "!");
    }

}