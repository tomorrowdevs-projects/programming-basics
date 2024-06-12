const fs = require("fs");
const path = require("path");

namesThatReachedNumberOne("./names");

function namesThatReachedNumberOne(folderName = "") {
  if (fileExists(folderName)) {
    const lists = {
      F: [],
      M: [],
    };
    const info = {
      genders: ["F", "M"],
      rows: [],
    };
    // Files loop
    fs.readdirSync(folderName).forEach((file) => {
      if (path.extname(file) === ".txt") {
        info.year = /\d+/g.exec(file)[0];
        info.rows = readFileContent(`${folderName}/${file}`).split("\n");
        info.genders.forEach((gender) => {
          lists[gender] = addInfoToGenderList(gender, lists[gender], info);
        });
      }
    });
    displayLists(lists);
  }
}

function addInfoToGenderList(
  gender,
  genderList,
  { year, rows },
  firstNameIndex = 0,
  name = ""
) {
  try {
    firstNameIndex = rows.findIndex(
      (row) => row.split(",")[1].toUpperCase() === gender
    );
    name = rows[firstNameIndex].split(",")[0];
    const nameIndexInList = genderList.map(({ name }) => name).indexOf(name);
    // Is name already in gender list
    if (nameIndexInList === -1) {
      genderList = [...genderList, { name, years: [year] }];
    } else {
      genderList = [...genderList];
      genderList[nameIndexInList].years = [
        ...genderList[nameIndexInList].years,
        year,
      ];
    }
    return genderList;
  } catch (ex) {
    console.error(ex.message);
  } finally {
    return genderList;
  }
}

function displayLists(lists) {
  const [rankF, rankM] = [
    formatRankList(lists["F"]),
    formatRankList(lists["M"]),
  ];
  console.log("\n");
  console.log("-{Female ranking}-", rankF);
  console.log("\n\n\n");
  console.log("-{Male ranking}-", rankM);
}

function formatRankList(list) {
  return list
    .sort((a, b) => b.years.length - a.years.length)
    .map(
      (nameRank) =>
        `\n\n - The name "${nameRank.name}" was the most frequent in ${
          nameRank.years.length
        } years:\n   ${nameRank.years
          .map((year) => `${year}, `)
          .join("")
          .slice(0, -2)}`
    )
    .join("");
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

function isValidPath(path = "") {
  const regexValidPath =
    /^(?:[a-z]:)?[\/\\]{0,2}(?:[.\/\\ ](?![.\/\\\n])|[^<>:"|?*.\/\\ \n])+$/gim;
  if (regexValidPath.test(path)) {
    return true;
  }
  console.error(`[Error] Invalid path ${path}!`);
  return false;
}

module.exports = { addInfoToGenderList };
