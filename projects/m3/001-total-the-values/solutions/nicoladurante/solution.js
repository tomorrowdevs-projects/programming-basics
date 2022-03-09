function getTotalOfValues() {
  let value = prompt("Insert a value: ");

  if (value.trim() === "") {
    return 0.0;
  }

  value = Number(value);

  if (isNaN(value)) {
    alert("You must insert a numeric value!");
    return getTotalOfValues();
  }

  return value + getTotalOfValues();
}

function display() {
  let total = getTotalOfValues();
  alert("The total is: " + total);
}

display();
