let fileSelector = document.getElementById("file-selector");

fileSelector.addEventListener("change", printLists);

/**
 * Use Promise.all to resolve all the promise at the
 * same time. Then creates two arrays filtering the
 * original by gender, one for the boy and
 * one for girls and print out them.
 * @param {*} event
 */
function printLists(event) {
  let files = event.target.files;
  Promise.all(getArrayOfEntries(files))
    .then((values) => {
      let _boys = values.filter((v) => v[1] === "M");
      let _girls = values.filter((v) => v[1] === "F");
      printUniqueNames(_boys, "Most popular boys names: ");
      printUniqueNames(_girls, "Most popular girls names: ");
    })
    .catch(() => {
      console.log("There was an error!");
    });
}

/**
 * Print the names list with a label
 * @param {Array<string, string>} array - array of couples {name, gender}
 * @param {string} label - label to print in console
 */
function printUniqueNames(array, label) {
  /*remove duplicates */
  let names_with_duplicates = array.map((res) => res[0]).flat();
  let names = [];
  for (let name of names_with_duplicates) {
    if (!names.includes(name)) {
      names.push(name);
    }
  }
  console.log(label, names.join());
}

/**
 * Read each file and returns an array of promise
 * When a promise resolves, the result is a couple [name, gender]
 * @param {Array<File>} files - an array of files
 * @returns {Array<Promise>} promises - an array of promise
 */
function getArrayOfEntries(files) {
  let promises = [];

  for (let file of files) {
    let promise = new Promise(function (resolve, reject) {
      let fileReader = new FileReader();

      fileReader.readAsText(file);

      fileReader.onerror = (err) => {
        reject(err);
      };

      fileReader.onload = (ev) => {
        let result = ev.target.result;

        //take first row
        let first = result.split("\r\n")[0];
        //convert to array
        let entry = first.split(",");

        resolve([entry[0], entry[1]]);
      };
    });

    promises.push(promise);
  }

  return promises;
}
