const fileInput = document.getElementById("file-input");
const outputParagraph = document.getElementById("output-paragraph");
const fr = new FileReader();

fr.onload = () => {
  // Read all file text and remove the text above the 10th line
  const fileText = fr.result
    .split("\n")
    .filter((line, index) => index < 10)
    .join("\n");
  outputParagraph.innerText = fileText;
};

fileInput.onchange = (e) => {
  const files = e.target.files;
  // Check only if the file is selected
  // With HTML the path will be always correct
  // No need for rexex path validation
  if (files && files[0]) {
    fr.readAsText(files[0]);
  } else {
    alert("Choose a file!");
    outputParagraph.innerText = "No file selected.";
  }
};
