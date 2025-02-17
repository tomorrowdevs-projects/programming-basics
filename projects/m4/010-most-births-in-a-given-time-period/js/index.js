const fs = require('fs/promises')
const prompt = require('prompt-sync')()

const startYear = prompt("from year: ")
const endYear = prompt("to year: ")

const getYears = async (array) => {
    const newArray = []
    firstYear = "yob" + startYear + ".txt"
    lastYear = "yob" + endYear + ".txt"
    if (array.includes(firstYear) && array.includes(lastYear)) {
        for (let i = parseInt(startYear); i <= parseInt(endYear); i++) {
            newArray.push("yob" + i + ".txt")
        }
        return newArray
    } else {
        return `Year not available on the folder`
    }
}


const main = async (path) => {
    const male = []
    const female = []
    const getFolder = await fs.readdir(path)
    const clearFile = getFolder.filter((file) => file.endsWith(".txt"))
    const newArrayOfYears = await getYears(clearFile)

    for (const file of newArrayOfYears) {
        const readFile = await fs.readFile(path + file, "utf-8")
        const readFileToArray = readFile.split('\n')
        const splitFirstFemale = readFileToArray[0].split(",")

        for (const name of readFileToArray) {
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

main("../../009-names-that-reachned-number-one/babynames/").then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})