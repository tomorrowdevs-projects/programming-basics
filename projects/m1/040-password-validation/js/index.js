
let inputPassword = prompt('Please, enter your password:');

let passwordReg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})")
let spaceRegex =  /^[^-\s]/;

function passwordTest(inputPassword) {

    if (passwordReg.test(inputPassword) === true && spaceRegex.test(inputPassword) === true) {
        alert("Your password is strong!");

    } else { 
        alert("Please, enter another password!");
        location.reload();

    }}



passwordTest(inputPassword);