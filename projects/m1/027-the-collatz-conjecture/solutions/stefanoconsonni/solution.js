let num = prompt("Please enter a positive integer:");

let counter = 0;
let numList = [];

if (num <= 0) {
	alert("Please reload the page and enter a positive integer");
}

while (num != 1 && num > 1) {
	if (num % 2 == 0) {
		num = num / 2;
	} else {
		num = num * 3 + 1;
	}
	numList[counter] = num;
	counter++;
}

alert(numList);
