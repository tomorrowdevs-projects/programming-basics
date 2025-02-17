
const YEARINPUT = parseInt(prompt('Please, enter your year:'));
const REGEX = /[0-9]/;


if (REGEX.test(YEARINPUT)) {
    if (YEARINPUT % 400 === 0) {
        alert("Is a leap year!");

    } else if (YEARINPUT % 100 === 0) {
        alert("Is not a leap year!");

    } else if (YEARINPUT % 4 === 0) {
        alert("Is a leap year!");

    } else {
        alert("Is not a leap year!");
    }

} else {
    alert("Please, enter a valid input.");
    location.reload();

}