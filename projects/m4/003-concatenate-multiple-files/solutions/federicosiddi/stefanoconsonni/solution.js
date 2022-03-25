// Unix-based operating systems typically include a tool named cat, which is short for concatenate.

// Its purpose is to display the concatenation of one or more files whose names are provided as command line arguments.

// The files are displayed in the same
// order that they appear on the command line.

// Create a program that performs this task. It should generate an appropriate
// error message for any file that cannot be displayed, and then proceed to the next file.

// Display an appropriate error message if your program is started without any command line arguments.

const fileInput = document.querySelector("#file-selector");

fileInput.addEventListener("input", () => {
	const files = fileInput.files;

	if (files) {
		Array.from(files).forEach((file) => {
			console.log(file.name);
			const reader = new FileReader();
			reader.readAsText(file);
			reader.onload = () => console.log(reader.result);
			reader.onerror = () => {
				console.log(reader.error);
			};
		});
	} else {
		console.log("File not supported! Please reload the page and upload a new file.");
	}
});
