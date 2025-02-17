const userPassword = prompt("Insert a Password. Your password must be at least 8 characters long and must contain at least one Uppercase letter, one Lowercase letter and a number")

function passwordValidation() {
    let containsUppercase = /[A-Z]/.test(userPassword);
    let containsLowercase = /[a-z]/.test(userPassword);
    let containsNumber  = /\d/.test(userPassword);
    if (userPassword.length >= 8 && containsUppercase == true && containsLowercase == true && containsNumber == true) {
        alert("Inserted password is good")
    } else (alert("Inserted password is not good"))
}

passwordValidation();