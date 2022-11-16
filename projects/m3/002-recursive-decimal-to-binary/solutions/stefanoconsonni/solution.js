let str = "";
function decimalToBinary(num) {
	if (num == 0) {
		return (str += 0);
	} else if (num == 1) {
		return (str += 1);
	} else if (num > 1) {
		decimalToBinary(Math.floor(num / 2));
	}
	return (str += num % 2);
}

//Main program
const decimalNum = prompt("Please enter a positive number:");

if (decimalNum < 0) {
	alert("Please reload the page and enter a positive number!");
} else {
	alert(decimalToBinary(decimalNum));
}
