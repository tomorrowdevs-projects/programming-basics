const fsPromises = require("fs").promises;
const path = require("path");
const data = path.join(__dirname, "data");

/**
 * Reads all the files from a directory,
 * extracts the names from each file,
 * and returns all the uniques names diveded by genre.
 *
 * @param {string} directoryPath - The path to the directory that contains the files to be read
 * @returns {Promise} - Object containing sets of unique female and male names
 */
async function getDistinctNames(directoryPath) {
  const fileList = await fsPromises.readdir(directoryPath);

  const [femaleNames, maleNames] = await Promise.all([
    getNamesFromLists(fileList, "F"),
    getNamesFromLists(fileList, "M"),
  ]);

  return {
    femaleUniqueNames: new Set(femaleNames),
    maleUniqueNames: new Set(maleNames),
  };
}

/**
 * Extracts all the names from the lists that are filtered by genre
 *
 * @param {array} arrayOfLists - Array containing each a list of names
 * @param {string} genre - The genre, 'M' for male and 'F' for female
 * @returns {Promise} - Array of names cleaned from any number or special character
 */

function getNamesFromLists(arrayOfLists, genre) {
  const arrayOfPromises = arrayOfLists
    .filter((file) => file.includes(genre))
    .map((file) =>
      fsPromises.readFile(path.join(data, file), { encoding: "utf8" })
    );

  return Promise.all(arrayOfPromises).then((values) =>
    values.flatMap((x) => x.replaceAll(/[^a-zA-Z\n]/g, "").split("\n"))
  );
}

getDistinctNames(data)
  .then((object) => console.log(object))
  .catch((error) => console.log(error));
