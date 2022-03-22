const fileInput = document.querySelector("#file-selector");

fileInput.addEventListener("input", () => {
	const file = fileInput.files[0];
	const textType = /.*/;

	if (file.type.match(textType)) {
		const reader = new FileReader();
		reader.onload = () => {
			const lines = reader.result.split("\n");
			const finalArr = lines.filter((line, index) => index >= lines.length - 10);
			console.log(finalArr);
		};
		reader.readAsText(file);
	} else {
		console.log("File not supported! Please reload the page and upload a new file.");
	}
});
