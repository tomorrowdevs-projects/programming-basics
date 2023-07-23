
let integerInput = parseInt(prompt("Please, enter a umber (from 1 to 12) to see its ordinal:"))

let ordinals = ["1 = First", "2 = Second", "3 = Third", "4 = Fourth", "5 = Fifth", "6 = Sixth", "7 = Seventh", "8 = Eighth", "9 = Ninth", "10 = Tenth", "11 = Eleventh", "12 = Twelfth"];
let i = 0;

function print_array_element(ordinals, i) {
    alert(ordinals[i + (integerInput - 1)]);
    alert(ordinals.join("\n"));
  }

print_array_element(ordinals, i);