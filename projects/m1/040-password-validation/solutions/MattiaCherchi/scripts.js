const userPassword = prompt(`
Enter a password between 8 and 15 characters long that contains:
-a capital letter
-a lowercase letter
-a number
-a special character
`);


function checkPassword(password) {
    if (/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,15})/.test(password)) {
        return true
    } else {
        return false
    }

}

checkPassword(userPassword);

if (checkPassword(userPassword)) {
    alert(`Your password ${userPassword} is a good password`)
} else {
    alert('Please enter a password respecting the indicated criteria')
}