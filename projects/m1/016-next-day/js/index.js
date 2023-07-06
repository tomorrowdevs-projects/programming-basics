
const YEARINPUT = parseInt(prompt("Please enter a valid year, in the format YYYY (e.g 1924, 1723, 2017):"));
const MONTHINPUT = prompt("Please enter a valid month, in the format MM (e.g 01, 11, 05):");
const DAYINPUT = parseInt(prompt("Please enter a valid day, in the format DD (e.g 07, 30, 19):"));

const MONTHINT = parseInt(MONTHINPUT);
const REGEX =  /[0-9]/;


if ( (REGEX.test(YEARINPUT) === true) && (REGEX.test(MONTHINPUT) === true) && (REGEX.test(DAYINPUT) === true) ) {

    if ((YEARINPUT % 400 === 0) || ( (YEARINPUT % 4 === 0) && (YEARINPUT % 100 != 0) )) {
        switch (MONTHINPUT) {
            case "01":
            case "03":
            case "05":
            case "07":
            case "08":
            case "10":
                if ((DAYINPUT + 1) <= 31) {
                    alert("The day after your input is " + YEARINPUT + "-" + MONTHINPUT + "-" + (DAYINPUT + 1) + " !");

                } else {
                    alert("The day after your input is " + YEARINPUT + "-" + (MONTHINT + 1) + "-01 !")


                }
                break;

            case "12":
                if ((DAYINPUT + 1) <= 31) {
                    alert("The day after your input is  " + YEARINPUT + "-" + MONTHINPUT + "-" + (DAYINPUT + 1) + " !");

                } else {
                    alert("The day after your input is  " + (YEARINPUT + 1) + "-01-01 !")
                }
                break;

            case "02":
                if ((DAYINPUT + 1) <= 29) {
                    alert("The day after your input is " + YEARINPUT + "-" + MONTHINPUT + "-" + (DAYINPUT + 1) + " !");

                } else {
                    alert("The day after your input is " + YEARINPUT + "-" + (MONTHINT + 1) + "-01 !")
                }
                break;

            default:
                alert("Please, enter a valid input!");
                location.reload();


        }

    } else {

        switch (MONTHINPUT) {
            case "01":
            case "03":
            case "05":
            case "07":
            case "08":
            case "10":
                if ((DAYINPUT + 1) < 31) {
                    alert("The day after your input is " + YEARINPUT + "-" + MONTHINPUT + "-" + (DAYINPUT + 1) + " !");

                } else {
                    alert("The day after your input is " + YEARINPUT + "-" + (MONTHINT + 1) + "-01 !")


                }
                break;

            case "12":
                if ((DAYINPUT + 1) <= 31) {
                    alert("The day after your input is " + YEARINPUT + "-" + MONTHINPUT + "-" + (DAYINPUT + 1) + " !");

                } else {
                    alert("The day after your input is " + (YEARINPUT + 1) + "-01-01 !")
                }
                break;

            case "02":
                if ((DAYINPUT + 1) <= 28) {
                        alert("The day after your input is " + YEARINPUT + "-" + MONTHINPUT + "-" + (DAYINPUT + 1) + " !");

                    } else {
                        alert("The day after your input is " + YEARINPUT + "-" + (MONTHINT + 1) + "-01 !")
                    }
                    break;

                default:
                    alert("Please, enter a valid input!");
                    location.reload();
                }

        }


} else {
    alert("Please, enter a valid input!");
    location.reload();

}