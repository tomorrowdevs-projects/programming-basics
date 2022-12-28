const fs = require("fs");
const path = require("path");

const argsFilePath = process.argv.slice(2);

if (checkArgsLength(argsFilePath, 2)) {
  namesThatReachedNumberOne("./names", argsFilePath);
}

function namesThatReachedNumberOne(folderName = "", inputYears = [0, 0]) {
  if (fileExists(folderName)) {
    const [startYear, endYear] = [
      parseInt(inputYears[0]),
      parseInt(inputYears[1]),
    ];
    if (startYear <= endYear) {
      const files = fs
        .readdirSync(folderName)
        .filter((file) => path.extname(file) === ".txt");
      const firstYear = getFileYear("first", files);
      const lastYear = getFileYear("last", files);
      const info = { rows: [], genders: ["F", "M"] };
      if (startYear >= firstYear && startYear <= lastYear) {
        let fileYear = 0;
        const totalBirthsNames = files
          // Exclude the files outside the range
          .filter((file) => {
            fileYear = extractNumberFromString(file);
            return fileYear >= startYear && fileYear <= endYear;
          })
          // Sum the births for most popular names
          .reduce(
            (genderObj, file) => {
              info.rows = readFileContent(`${folderName}/${file}`).split("\n");
              info.genders.forEach((gender) => {
                genderObj[gender] = calculateBirthNumber(
                  gender,
                  genderObj[gender],
                  info.rows
                );
              });
              return genderObj;
            },
            {
              F: {},
              M: {},
            }
          );
        // For each gender get the name with more births and display in a message
        info.genders.forEach((gender) =>
          displayMostBirthsNames(
            getMostBirthsName(totalBirthsNames[gender]),
            gender,
            startYear,
            endYear
          )
        );
      } else {
        startYear < firstYear ? displayYearError("start-less-first") : null;
        startYear > lastYear ? displayYearError("start-greater-last") : null;
      }
    } else {
      displayYearError("end-less-start");
    }
  }
}

function getFileYear(type = "", files = ["0"]) {
  files.sort(
    (fileA, fileB) =>
      extractNumberFromString(fileA) - extractNumberFromString(fileB)
  );
  try {
    switch (type) {
      case "first":
        return extractNumberFromString(files[0]);
      case "last":
        return extractNumberFromString(files[files.length - 1]);
      default:
        return 0;
    }
  } catch (ex) {
    console.error(ex.message);
    return 0;
  }
}

function extractNumberFromString(text) {
  return parseInt(/\d+/g.exec(text)[0]);
}

function calculateBirthNumber(
  gender,
  subGenderObj,
  rows,
  firstNameIndex = 0,
  name = "",
  births = 0
) {
  try {
    firstNameIndex = rows.findIndex(
      (row) => row.split(",")[1].toUpperCase() === gender
    );
    name = rows[firstNameIndex].split(",")[0];
    births = parseInt(rows[firstNameIndex].split(",")[2]);
    // Is name already in gender obj
    if (subGenderObj[name]) {
      subGenderObj[name] += births;
    } else {
      subGenderObj = { ...subGenderObj, [name]: births };
    }
  } catch (ex) {
    console.error(ex.message);
  } finally {
    return subGenderObj;
  }
}

function getMostBirthsName(namesWithBirths) {
  return Object.entries(namesWithBirths).reduce(
    (maxBirths, nameBirths) =>
      nameBirths[1] > maxBirths ? nameBirths : maxBirths,
    0
  );
}

// Display functions

function displayMostBirthsNames([name, births], gender, startYear, endYear) {
  console.log(
    `\n[Result] The ${
      gender === "F" ? "female" : "male"
    } name with the most births between the years ${startYear} and ${endYear} is "${name}" with ${births} births.\n`
  );
}

function displayYearError(type = "") {
  const message = { text: "" };
  switch (type) {
    case "end-less-start":
      message.text = "The end year is less than the initial year!";
      break;
    case "start-less-first":
      message.text = "The starting year is less than that of the last file!";
      break;
    case "start-greater-last":
      message.text = "The starting year is greater than that of the last file!";
      break;
  }
  console.error(message.text);
}

function fileExists(path = "") {
  try {
    const exists = fs.existsSync(path);
    if (exists) {
      return true;
    }
    console.error(`[Error] File "${path}" doesn't exists!`);
    return false;
  } catch (err) {
    console.error(`[Error] File "${path}" doesn't exists!`);
    return false;
  }
}

function readFileContent(path) {
  try {
    const fileContent = fs.readFileSync(path, "utf8");
    if (fileContent.trim() === "") {
      console.error(`[Error] The file "${path}" is empty!`);
      return false;
    }
    return fileContent;
  } catch (err) {
    console.error(`[Error] Cannot read the file "${path}"!`);
    return false;
  }
}

function checkArgsLength(argsFilePath = "", requiredLength = 1) {
  const length = argsFilePath.length;
  if (length === requiredLength) {
    return true;
  }
  console.error(
    `[Error] You have provided ${length} arguments, you must provide only one path!`
  );
  return false;
}

module.exports = {
  calculateBirthNumber,
  getMostBirthsName,
};
