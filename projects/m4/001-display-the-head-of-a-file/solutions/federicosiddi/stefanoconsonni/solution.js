const fileInput = document.querySelector("#file-selector");

fileInput.addEventListener("input", function () {
	const file = fileInput.files[0];
	const textType = /.*/;

	if (file.type.match(textType)) {
		const reader = new FileReader();
		reader.onload = function () {
			alert(reader.result);
		};
		reader.readAsText(file);
	} else {
		alert("File not supported! Please reload the page and enter a new file.");
	}
});
