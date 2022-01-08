function checkPassword(password) {
	let hasUppercase = /[A-Z]/.test(password);
	let hasLowercase = /[a-z]/.test(password);
	let hasNumber = /\d/.test(password);

	if (password == "") {
		alert("Please reload the page and enter a valid password");
		return false;
	} else if (password.length < 8) {
		alert("The password must contain at least 8 characters!");
		return false;
	} else if (password.length >= 8 && hasUppercase && hasLowercase && hasNumber) {
		alert("The password is valid!");
		return true;
	} else {
		alert("The password you entered does not meet the requirements!");
		return false;
	}
}

let input = prompt(
	"Please enter a valid password:\n(it should include at least 8 characters, at least 1 uppercase letter, at least 1 lowercase letter, and at least 1 number)"
);
checkPassword(input);
