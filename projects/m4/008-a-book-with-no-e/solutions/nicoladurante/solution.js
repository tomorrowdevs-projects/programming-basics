const a_ASCII_CODE = 97;
const z_ASCII_CODE = 122;

document.getElementById("file-selector").addEventListener("change", (ev) => {
  aBookWithNoE(ev.target.files[0]);
});

let aBookWithNoE = (file) => {
  let reader = new FileReader();
  reader.readAsText(file);

  reader.onload = (evt) => {
    let result = evt.target.result;

    let rows = result.split("\r\n").filter((v) => v != "");

    let words = rows.map((row) => row.split(" ")).flat();

    words = words
      .map((word) => word.toLowerCase())
      .filter((v) => new RegExp(/[a-z0-9]/gi).test(v));

    let charSet = new Set();

    for (let i = a_ASCII_CODE; i <= z_ASCII_CODE; i++) {
      let char = String.fromCharCode(i);
      let entry = { [char]: 0 };
      let wordsWithLetter = words.filter((w) => w.indexOf(char) > -1);
      if (wordsWithLetter.length > 0) {
        entry[char] = wordsWithLetter.length;
      }
      charSet.add(entry);
    }

    let setWithProportions = new Set();
    let proportionsArray = [];

    charSet.forEach((obj) => {
      for (const [key, value] of Object.entries(obj)) {
        let result = ((value * 100) / words.length).toFixed(2);
        let entry = { [key]: result };
        console.log(`Letter ${key} is in ${result}% of the words`);
        proportionsArray.push(parseFloat(result));
        setWithProportions.add(entry);
      }
    });

    let minValue = Math.min(...proportionsArray);
    let minLetters = [];

    for (let entry of setWithProportions) {
      let values = Object.entries(entry).flat();
      if (parseFloat(values[1]) === minValue) {
        minLetters.push(values[0]);
      }
    }

    console.log(
      `Letters used in the smallest proportion are ${minLetters.join()}. The percentage is ${minValue}%`
    );
  };
};
