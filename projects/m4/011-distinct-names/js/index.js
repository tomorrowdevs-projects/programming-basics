const fs = require('fs/promises')

const readFile = async (path) => {
    const maleNames = new Set();
    const femaleNames = new Set();
    const getFiles = await fs.readdir(path)
    const files = getFiles.filter((file) => file.endsWith(".txt"))
    for (const file of files) {
        const readFile = await fs.readFile(path + "/" + file, "utf-8")
        const fileToArray = readFile.split("\n")
       
        for (const line of fileToArray) {
            const [name, gender] = line.split(",");
            if (gender === "M") {
                maleNames.add(name);
            } else if (gender === "F") {
                femaleNames.add(name);
            }
            

        }


    }

    console.log("Female names:", [...femaleNames]);
    console.log("Male names:", [...maleNames]);
}


readFile("../../009-names-that-reachned-number-one/babynames")