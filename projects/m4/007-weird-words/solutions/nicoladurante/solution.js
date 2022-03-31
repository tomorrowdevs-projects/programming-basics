let fileSelector = document.getElementById("file-selector");
let okList = document.querySelector("#ok-list");
let badList = document.querySelector("#bad-list");

fileSelector.addEventListener("change", (event) => {
  okList.innerHTML = "";
  badList.innerHTML = "";
  printWeirdWords(event.target.files[0]);
});

function checkWord(word) {
  let index1 = word.indexOf("ie");
  let index2 = word.indexOf("ei");

  while (index1 !== -1) {
    let car = index1 - 1;
    if (car === "c") {
      return false;
    } else {
      index1 = word.indexOf("ie", index1 + 1);
    }
  }

  while (index2 !== -1) {
    let car = index2 - 1;
    if (car !== "c") {
      return false;
    } else {
      index2 = word.indexOf("ei", index2 + 1);
    }
  }

  return true;
}

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

    rows = rows.filter((row) => row);

    let words = rows.map((row) => row.split(" ")).flat();

    words = words.map((word) => word.toLowerCase());

    let wordsOk = [];
    let wordsWrong = [];

    for (let word of words) {
      if (wordsOk.find((w) => w === word)) {
        continue;
      }

      let index1 = word.indexOf("ie");
      let index2 = word.indexOf("ei");

      if (index1 > -1 || index2 > -1) {
        let test = checkWord(word);
        test ? wordsOk.push(word) : wordsWrong.push(word);
      }
    }

    wordsOk.forEach((value) => {
      let listElement = document.createElement("li");
      listElement.innerText = value;
      okList.append(listElement);
    });

    wordsWrong.forEach((value) => {
      let listElement = document.createElement("li");
      listElement.innerText = value;
      badList.append(listElement);
    });

    document.getElementsByTagName(
      "p"
    )[0].innerText = `Length of "ok words" list: ${wordsOk.length}, Length og "wrong words" list: ${wordsWrong.length}`;
  };
}
