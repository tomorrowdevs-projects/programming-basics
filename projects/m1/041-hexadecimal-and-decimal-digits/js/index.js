// convert a string containing a single hexadecimal digit to a base 10 integer
function hex2int(string) {
  const convertSting = "0x" + string;
  alert("0x" + string + ": " + parseInt(convertSting));
}
// convert integer to a single hexadecimal digit
function int2hex(number) {
  if (number >= 0 && number <= 15) {
    const convertInteger = number.toString(16);
    alert(number + ": " + convertInteger);
  } else {
    // Display an error message if the parameter’s value is outside of the range.
    alert("Invalid value");
  }
}
hex2int(prompt("Enter letter between A and F"));
int2hex(parseInt(prompt("Enter number between 0 and 15")));
