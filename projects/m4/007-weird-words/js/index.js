const fs = require("fs");
const fileName = "input.txt";
const data = fs.readFileSync(fileName, { encoding: "utf8" });
const dataArray = getArray(data);

const rule = new Set();
const exception = new Set();

dataArray.forEach((data) => {
  if (data.includes("ie")) {
    if (data[data.indexOf("ie") - 1] !== "c") {
      rule.add(data);
    } else {
      exception.add(data);
    }
  } else if (data.includes("ei")) {
    if (data[data.indexOf("ei") - 1] === "c") {
      rule.add(data);
    } else {
      exception.add(data);
    }
  }
});

console.log("Rule:", rule, rule.size);
console.log("Exception:", exception, exception.size);

// FUNCTION

function getArray(input) {
  const array = input.toLowerCase().split(/[\r\n]+| /g);
  array.forEach((element, index) => {
    array[index] = element
      .replace(/^[^A-Za-z]+/g, "")
      .replace(/[^A-Za-z]+$/g, "");
    if (array[index] === "") {
      array.splice(index, 1);
    }
  });
  return array;
}
