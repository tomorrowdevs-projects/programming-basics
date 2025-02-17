const fs = require("fs");
const fsPromises = fs.promises;
const path = require("path");
const data = path.join(__dirname, "data");

// MAIN FUNCTION
// Read all the files from a directory and print all the unique popular names (female and male)
fs.readdir(data, (err, files) => {
  createObjectNames(files).then((object) => {
    getNames(object.femaleNames).then((names) =>
      console.log("Popular female names", names)
    );
    getNames(object.maleNames).then((names) =>
      console.log("Popular male names", names)
    );
  });
});

// HELPER FUNCTIONS

// Create an object that divides the lists of male and female names
const createObjectNames = (files) => {
  return new Promise((resolve, reject) => {
    const names = {
      femaleNames: [],
      maleNames: [],
    };

    files.forEach((file) => {
      if (file.split(/_|\./gm)[1] === "F") {
        names.femaleNames.push(file);
      } else {
        names.maleNames.push(file);
      }
    });

    resolve(names);
  });
};

// Get a unique list of many from multiples lists, removing duplicates
const getNames = (list) => {
  return new Promise((resolve, reject) => {
    const popularNames = new Set();

    list.forEach((file, index) => {
      list[index] = fsPromises.readFile(path.join(data, file), {
        encoding: "utf8",
      });
    });

    Promise.all(list).then((values) => {
      values.forEach((value) => {
        const names = value.replaceAll(/[0-9]| /gm, "").split("\n");

        popularNames.add(names[0]);
      });

      resolve(popularNames);
    });
  });
};
