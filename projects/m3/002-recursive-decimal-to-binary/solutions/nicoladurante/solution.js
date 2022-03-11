function convertToBinary(n) {
  if (n == 0 || n == 1) {
    return n + "";
  } else {
    return convertToBinary(Math.trunc(n / 2)) + (n % 2);
  }
}

function main() {
  while (true) {
    let number = prompt("Enter a number: ");
    if (number < 0) {
      alert("You must insert a non negative number!");
    } else {
      alert("The binary rappresention is: " + convertToBinary(number));
    }
  }
}

main();
