const fileInput = document.getElementById("file-input");
const outputParagraph = document.getElementById("output-paragraph");
const fr = new FileReader();

fileInput.onchange = async (e) => {
  const files = e.target.files;
  // Check only if the file is selected
  // With HTML the path will be always correct
  // No need for regex path validation
  if (files && files[0]) {
    const file = files[0];
    const buffer = await file.arrayBuffer();
    const tailString = getTailStringFromBuffer(buffer);
    // Example of 12 lines of tail with reading length of 20 bytes
    //** getTailStringFromBuffer(buffer, 12, 20);
    outputParagraph.innerText = tailString;
  } else {
    alert("Choose a file!");
    outputParagraph.innerText = "No file selected.";
  }
};

// Is possible to modify
// 2nd argument => The length of tail
// 3rd argument => The length of buffer part
const getTailStringFromBuffer = (
  buffer,
  maxTailLine = 10,
  readLength = 10,
  tailString = "",
  lineCounter = 0,
  bufferPart = null
) => {
  const textDecoder = new TextDecoder();
  // Total length of buffer
  const bufferLength = buffer.byteLength;
  // Left length to read of buffer
  let bufferLeftLength = bufferLength;
  // Continue reading buffer until found more than 10 lines
  while (lineCounter < maxTailLine) {
    // Get last buffer part
    if (readLength > bufferLeftLength) {
      bufferPart = new Uint8Array(buffer, 0, bufferLeftLength);
      bufferLeftLength = 0;
      lineCounter = maxTailLine + 1;
    } else {
      // From buffer left length - read length => 200 - 10 = 190
      // To buffer left length => 200
      bufferPart = new Uint8Array(
        buffer,
        bufferLeftLength - readLength,
        readLength
      );
      bufferLeftLength -= readLength;
    }
    const readString = textDecoder.decode(bufferPart);
    // Count the number of lines only if there is at least one new line char
    if (readString.includes("\n")) {
      readString
        .split("")
        .forEach((char) => (char === "\n" ? lineCounter++ : null));
    }
    tailString = readString + tailString;
  }
  // Remove the part before first new line
  // This because there are more than 10 lines based on "while" condition
  tailString = tailString.split("\n").slice(1).join("\n");
  return tailString;
};
