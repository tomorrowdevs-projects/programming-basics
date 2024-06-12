const MIN_YEAR = 1900;
const MAX_YEAR = 2012;

document.getElementById("file-selector").addEventListener("change", main);

/**
 * Function that made a validation on the year inserted by the user
 * The year need to be a number in the range of MIN_YEAR - MAX_YEAR
 * @returns
 */
function getValidYear() {
  let year = "";

  let yearAsNumber = parseInt(year);

  let test =
    isNaN(yearAsNumber) || yearAsNumber < MIN_YEAR || yearAsNumber > MAX_YEAR;

  while (test) {
    year = prompt("Insert year: ");

    if (!year) {
      alert("The year is blank!");
      continue;
    }

    yearAsNumber = parseInt(year);
    test =
      isNaN(yearAsNumber) || yearAsNumber < MIN_YEAR || yearAsNumber > MAX_YEAR;

    if (test) {
      alert("The year is not valid!");
      continue;
    }
  }

  return yearAsNumber;
}

/**
 *
 * @param {File} file
 * @returns a promise that resolves with the content of file or
 * reject an error
 */
function getContent(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.readAsText(file);

    reader.onerror = (err) => reject(new Error(err.target.error.message));

    reader.onload = (evt) => resolve(evt.target.result);
  });
}

/**
 * Returns the most used name in array data
 * @param {array<string>} data
 * @returns {string} the most used name
 */

function getMostUsedName(data) {
  let mostUsed = data[0].split(",")[0];
  let timesNumber = Number(data[0].split(",")[2]);
  data.forEach((value) => {
    let arr = value.split(",");
    if (Number(arr[2]) > timesNumber) {
      mostUsed = arr[0];
    }
  });

  return mostUsed;
}

function main(evt) {
  let year1 = getValidYear();
  let year2 = getValidYear();

  //swap the two years if the first year is greater than second
  if (year1 > year2) {
    let tmp = year1;
    year1 = year2;
    year2 = tmp;
  }

  let files = [...evt.target.files];

  //get only the files in range year1 - year2 by checking the filename
  let filesInRange = [];
  for (let i = year1; i <= year2; i++) {
    filesInRange = [
      ...filesInRange,
      ...files.filter((f) => f.name.indexOf(i.toString()) > -1),
    ];
  }

  let filesContent = filesInRange.map((filename) => getContent(filename));

  Promise.all(filesContent)
    .then((filesContent) => {
      //get only first line from each file
      let firstLines = filesContent.map((content) => content.split("\r\n")[0]);
      //get two arrays
      let boysNames = firstLines.filter((value) => value.split(",")[1] === "M");
      let girlsNames = firstLines.filter(
        (value) => value.split(",")[1] === "F"
      );
      console.log(
        `Most used boy name in ${year1}-${year2}: ${getMostUsedName(
          boysNames
        )}`,
        `\nMost used girl name in ${year1}-${year2}: ${getMostUsedName(
          girlsNames
        )}`
      );
    })
    .catch(() => console.log("There was an error reading files"));
}
