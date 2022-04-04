let string = prompt("string?");
let stringTwo = prompt("string?");
string = string.split("").sort();
stringTwo = stringTwo.split("").sort();
let pal = "";
for (let letter of string) {
  if (letter === stringTwo[string.indexOf(letter)]) pal = "true"
  else {
    pal = "false";
    break
  }
}
  alert(pal)
