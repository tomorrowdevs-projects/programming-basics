const prompt = require("prompt-sync")();
const fs = require("fs/promises");

const displayFileHead = async function (fileName) {
    try {
        // if the fileName is empty throw an error
        if (!fileName) {
            throw new Error("The file name cannot be omitted")
        }

        // read file 
        const result = await fs.readFile(fileName);
        const data = result.toString();
        const formattedData = data.split('\n');

        // displays the first 10 lines
        for (let i = 0; (i < 10) && (i < formattedData.length); i++) {
            console.log(formattedData[i])
        }

    } catch (err) {
        // customize the error message
        if (err.code === "ENOENT") err.message = "file does not exist"
        console.log(err.message)
    }
}

const fileName = prompt("Enter the file name: ");
displayFileHead(fileName);
