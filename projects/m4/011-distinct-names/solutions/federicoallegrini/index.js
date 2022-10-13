const fs = require("fs");
const path = require("path");

// distinctNames("./names");
distinctNames(
  "C:\\Users\\federicoa\\Desktop\\programming-basics\\projects\\m4\\011-distinct-names\\solutions\\federicoallegrini\\names",
  2009,
  2010
);

function distinctNames(folderName = "", startYear = 0, endYear = 0) {
  if (fileExists(folderName)) {
    let [lists, year] = [
      {
        F: [],
        M: [],
      },
      0,
    ];
    // Files loop
    fs.readdirSync(folderName).forEach((file) => {
      if (path.extname(file) === ".txt") {
        year = parseInt(/\d+/g.exec(file)[0]);
        if (year >= startYear && year <= endYear) {
          lists = addNameToGenderLists(
            lists,
            readFileContent(`${folderName}/${file}`).split("\n")
          );
        }
      }
    });
    displayLists(lists);
  }
}

function addNameToGenderLists(lists, rows, name = "", gender = "") {
  try {
    // Rows loop
    rows.forEach((row) => {
      if (row.trim() !== "") {
        name = row.split(",")[0];
        gender = row.split(",")[1].toUpperCase();
        if (!lists[gender].includes(name)) {
          lists[gender] = [...lists[gender], name];
        }
      }
    });
  } catch (ex) {
    console.error(ex.message);
  } finally {
    return lists;
  }
}

function displayLists({ F, M }) {
  F.sort((a, b) => a.localeCompare(b));
  M.sort((a, b) => a.localeCompare(b));
  console.log("\n");
  console.log("-{Female names}-\n", F.join(" - "));
  console.log("\n\n\n");
  console.log("-{Male names}-\n", M.join(" - "));
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
