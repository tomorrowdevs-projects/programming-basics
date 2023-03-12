const fs = require("fs");
const fsPromises = fs.promises;
const path = require("path");
const data = path.join(__dirname, "data");
const enteredDates = [2000, 2001]; // filter the years

// MAIN FUNCTION
// Read all the files from a directory and print all the unique popular names (female and male)
fs.readdir(data, (err, files) => {
  createObjectNames(files, enteredDates).then((object) => {
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
const createObjectNames = (files, dates) => {
  return new Promise((resolve, reject) => {
    const names = {
      femaleNames: [],
      maleNames: [],
    };

    files.forEach((file) => {
      const currentDate = file.split(/_|\./gm)[0];
      const isIncluded = currentDate >= dates[0] && currentDate <= dates[1];
      const genre = file.split(/_|\./gm)[1];

      if (genre === "F" && isIncluded) {
        names.femaleNames.push(file);
      } else if (genre === "M" && isIncluded) {
        names.maleNames.push(file);
      } else {
        return;
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
