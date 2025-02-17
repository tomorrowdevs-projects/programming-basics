/* Get references to file selector and the two lists in the DOM*/

let fileSelector = document.getElementById("file-selector");
let okList = document.querySelector("#ok-list");
let badList = document.querySelector("#bad-list");

/* every time that a new file is selected, I reset the two list
and I call the function to get new list*/

fileSelector.addEventListener("change", (event) => {
  okList.innerHTML = "";
  badList.innerHTML = "";
  printWeirdWords(event.target.files[0]);
});

/**
 * Returns a boolean that represent if a word with adiacent "ei" follow the rule
 * "I before E except after C"
 * @param {string} word - a single word
 * @param {string} pattern - the pattern to search (ie or ei)
 * @callback test
 * @param {string} car character to test
 * @returns {boolean}
 */
function checkWord(word, pattern, test) {
  let index = word.indexOf(pattern);
  while (index !== -1) {
    let carIndex = index - 1;
    if (test(word[carIndex])) {
      index = word.indexOf(pattern, index + 1);
    } else {
      return false;
    }
  }

  return true;
}

/**
 * Given a text file, print two lists: one with words that follow
 * the "I before E, except after C" rule and another that doesn't follow
 * this rule
 * @param {File} file
 */
function printWeirdWords(file) {
  let fileReader = new FileReader();
  fileReader.readAsText(file);

  fileReader.onerror = (evt) => {
    if (evt.target.error) {
      console.log("There was an errore during reading phase!");
    }
  };

  fileReader.onload = (evt) => {
    let rows = evt.target.result.split("\r\n");

    //filter non empty words
    rows = rows.filter((row) => row);

    //get words and convert to lowercase
    let words = rows.map((row) => row.split(" ")).flat();

    words = words.map((word) => word.toLowerCase());

    let validWords = [];

    for (let word of words) {
      //if I've just inserted a word, skip to next: I don't want to have duplicates.
      if (validWords.find((w) => w === word)) {
        continue;
      }

      validWords.push(word);

      let indexIe = word.indexOf("ie");
      let indexEi = word.indexOf("ei");

      //I the word doesn't contain neither of the two pattern, go to next
      if (indexIe == -1 && indexEi == -1) {
        continue;
      }

      let test;
      let testIe = checkWord(word, "ie", (car) => car != "c");
      let testEi = checkWord(word, "ei", (car) => car == "c");

      if (indexIe > -1 && indexEi > -1) {
        test = testIe && testEi;
      } else {
        if (indexIe > -1) {
          test = testIe;
        }

        if (indexEi > -1) {
          test = testEi;
        }
      }

      let listElement = document.createElement("li");
      listElement.innerText = word;

      test ? okList.append(listElement) : badList.append(listElement);
    }

    let container = document.getElementsByTagName("p")[0];
    container.innerText = `Length of "ok words" list: ${okList.children.length}, Length of "wrong words" list: ${badList.children.length}`;
  };
}
