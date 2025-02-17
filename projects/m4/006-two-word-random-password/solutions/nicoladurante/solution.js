document.getElementById("pwd-form").reset();

document
  .getElementById("generate-pwd")
  .addEventListener("click", generatePassword);

let file = document.getElementById("file-selector").files[0];
let passwordContainer = document.getElementById("password");

document.getElementById("file-selector").addEventListener("change", (ev) => {
  file = ev.target.files[0];
});

/**
 * Returns a random word from an array of words
 * @param {Array<string>} words
 * @returns {string} a random word
 */
function selectWord(words) {
  let index = Math.floor(Math.random() * words.length);
  return words[index];
}

/**
 * Returns a boolean that represents if a password is valid or not.
 * A password is valid if each word has a length of 3 at least and the combination of
 * the two words has a length between 8 and 10 characters.
 * @param  {Array<string>} words
 * @returns {boolean}
 */
function passwordValidation(...words) {
  let passwordLength = 0;
  words.forEach((word) => {
    if (word.length < 3) {
      return false;
    }

    passwordLength += word.length;
  });

  return passwordLength >= 8 && passwordLength <= 10;
}

/**
 * Generate a new password and print on the screen
 * @returns
 */
function generatePassword() {
  if (!file) {
    passwordContainer.innerText = "";
    return;
  }

  let fr = new FileReader();
  fr.readAsText(file);

  fr.onload = function (event) {
    let result = event.target.result;

    if (result) {
      let rows = result.split("\r\n");
      //filter non empty rows
      rows = rows.filter((row) => row);

      //convert in array of words
      rows = rows.map((row) => row.split(" ")).flat();

      //select two random word
      let firstWord = selectWord(rows);
      let secondWord = selectWord(rows);

      let password =
        firstWord[0].toUpperCase() +
        firstWord.slice(1, firstWord.length) +
        secondWord[0].toUpperCase() +
        secondWord.slice(1, secondWord.length);

      //password validation test
      let passwordValidated = passwordValidation(firstWord, secondWord);
      let color = "black";

      if (passwordValidated) {
        passwordContainer.innerText = `The generated password is ${password}`;
      } else {
        passwordContainer.innerText = `Password ${password} is not valid! Generate another one`;
        color = "red";
      }

      passwordContainer.style.color = color;
    } else {
      passwordContainer.innerText = "";
    }
  };
}
