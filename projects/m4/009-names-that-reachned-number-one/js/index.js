const fs = require('fs/promises')

const names = async (path) => {
    const male = []
    const female = []
    const getFiles = await fs.readdir(path)
    const files = getFiles.filter(file => file.endsWith(".txt"))
    for (const file of files) {
        const readFile = await fs.readFile(path + file, "utf8")
        const fileToArray = readFile.split("\n")
        const splitFirstFemale = fileToArray[0].split(",")

        for (const name of fileToArray) {
            const nameToArray = name.split(",")
            if (nameToArray[1] === "M") {
                if (!male.includes(nameToArray[0])) {
                    male.push(nameToArray[0])
                }
                break
            }
        }

        if (splitFirstFemale[1] === "F") {
            if (!female.includes(splitFirstFemale[0])) {
                female.push(splitFirstFemale[0])
            }
        }
    }
    return male + "\n" + female
}

names("../babynames/").then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})