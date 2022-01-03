function centerString(str, width) {
	if (str.length >= width) {
		alert(str);
	} else if (str.length < width) {
		let extraSpace = width - str.length;
		let blankSpace = " ";
		let spaceAtTheStart = Math.floor(extraSpace / 2);
		let finalStr = blankSpace.repeat(spaceAtTheStart) + str;
		alert(finalStr);
	}
}

const enteredString = prompt("Please enter a string:");
const enteredWidth = prompt("Please enter the width of the terminal window (as number from 1 to 100):");

centerString(enteredString, enteredWidth);
