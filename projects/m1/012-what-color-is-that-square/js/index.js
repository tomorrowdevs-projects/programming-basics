
let positioninput = prompt("Please, enter your position on the board:");

let regexone = /[a-hA-H]/;
let regextwo = /[1-8]/;

let x = positioninput.slice(0, 1).toUpperCase();
let y = positioninput.slice(1);


if ((regexone.test(x) === true) && (regextwo.test(y) === true)) {

          switch (x) {
            case "A":
            case "C":
            case "E":
            case "G":
                if (y % 2 === 0) {
                    alert("Ther color of the square in your position is white.");

                } else {
                    alert("Ther color of the square in your position is black.");

               }
                break;
            case "B":
            case "D":
            case "F":
            case "H":
                if (y % 2 === 0) {
                    alert("Ther color of the square in your position is black.");

                } else {
                    alert("Ther color of the square in your position is white.");
                break;

            }

        }

        } else {
    alert("Please, enter a valid input!");
    location.reload();

}