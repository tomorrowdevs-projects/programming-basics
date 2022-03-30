let fileSelector = document.getElementById("file-selector");
fileSelector.addEventListener("change", getWordThatOccursMost);

/**
 *
 * @param {*} occurencies
 * @returns max value of occurencies
 */
function getMaxOccurency(occurencies) {
  let arrayOfValues = Object.entries(occurencies).map((value) => {
    return value[1];
  });

  return Math.max(...arrayOfValues);
}

/**
 *
 * @param {*} evt
 */
function getWordThatOccursMost(evt) {
  let file = evt.target.files[0];

  let reader = new FileReader();
  reader.readAsText(file, "utf-8");

  reader.onload = function (evt) {
    let wordsOccurencies = {};
    try {
      if (evt.target.error) {
        throw evt.target.error;
      }

      let rows = [...evt.target.result.split("\n")];

      //remove empty rows
      rows = rows.filter((row) => row !== "" && row != "\r");

      rows.forEach((row) => {
        let words = row.split(" ");

        words.forEach((word) => {
          word = word.toLowerCase().replace(/[^a-z0-9]/gi, "");
          wordsOccurencies.hasOwnProperty(word)
            ? wordsOccurencies[word]++
            : (wordsOccurencies[word] = 1);
        });
      });

      //getMaxOccurencyValue
      let maxOccurencies = getMaxOccurency(wordsOccurencies);

      //filter words by the maxOccurency value
      let wordsMostOccured = Object.keys(wordsOccurencies).filter(
        (key) => wordsOccurencies[key] === maxOccurencies
      );

      let wordsParagraph = document.getElementsByTagName("p")[0];

      //print result
      wordsParagraph.innerText = wordsMostOccured.join(", ");

      if (maxOccurencies > 0) {
        wordsParagraph.innerText += `\n occurs ${maxOccurencies} times`;
      } else {
        wordsParagraph.innerText = `File is empty!`;
      }
    } catch (err) {
      console.log(`${err.name}: ${err.message}`);
    }
  };
}
