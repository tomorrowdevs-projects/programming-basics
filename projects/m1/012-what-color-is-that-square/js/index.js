let position_Input_User, position_Input_Letter, position_Input_Number, position_Validate;

do {
  position_Input_User = prompt("Please insered the position").toUpperCase();

  position_Validate = /^[A-H][1-8]$/;
  position_Validate = position_Validate.test(position_Input_User);

  if (position_Validate) {

    position_Letter = position_Input_User.slice(0, 1);
    position_Number = position_Input_User.slice(1, 2);
  } else {
    alert("\nError! --> You have insered numbers sate not valide. \u{1F648}\n");
  }
}
while (!position_Validate)

if (position_Letter == "A" || position_Letter == "C" || position_Letter == "E" || position_Letter == "G") {
  if (position_Number % 2 == 0) {
    alert(`\nThe position "${position_Input_User}" is a WHITE Square.\n`);
  }
  else {
    alert(`\nThe position "${position_Input_User}" is a BLACK Square.\n`);
  }
} else if (position_Letter == "B" || position_Letter == "D" || position_Letter == "F" || position_Letter == "H") {
  if (position_Number % 2 == 0) {
    alert(`\nThe position "${position_Input_User}" is a BLACK Square.\n`);
  }
  else {
    alert(`\nThe position "${position_Input_User}" is a WHITE Square.\n`);
  }
}