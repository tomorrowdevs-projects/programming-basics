let fileSystem = require("fs");
let filesDirectory = "names/";

const MIN_YEAR = 1900;
const MAX_YEAR = 2012;

/**
 * Returns a promise with the content of a file is fulfilled
 * If the promise rejected, returns an empty string
 * @param {string} filename
 * @returns a promise
 */
function getContent(filename) {
  return new Promise((resolve, reject) => {
    fileSystem.readFile(filename, "utf-8", (err, data) => {
      if (err) reject("");

      resolve(data);
    });
  });
}

//construct the array of promise
let filesContents = [];
for (let index1 = MIN_YEAR; index1 <= MAX_YEAR; index1++) {
  filesContents = [
    ...filesContents,
    getContent(`${filesDirectory}f${index1}.txt`),
    getContent(`${filesDirectory}m${index1}.txt`),
  ];
}

Promise.allSettled(filesContents).then((values) => {
  let contents = [];
  let boysNames = [],
    girlsNames = [];
  /* take the value of only promises that resolves without errors */
  contents = values
    .filter((content) => content.status === "fulfilled")
    .map((entry) => entry.value);

  contents.forEach((content) => {
    let rows = content.split("\r\n");
    rows.forEach((row) => {
      let r = row.split(",");
      if (r[1] == "M" && !boysNames.includes(r[0])) {
        boysNames.push(r[0]);
      }

      if (r[1] == "F" && !girlsNames.includes(r[0])) {
        girlsNames.push(r[0]);
      }
    });
  });

  console.log(`Distinct boys names: ${boysNames.join(", ")}`);
  console.log("\n");
  console.log(`Distinct girls names: ${girlsNames.join(", ")}`);
});
