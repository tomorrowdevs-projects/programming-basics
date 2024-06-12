/*Write a function that generates a random password. 
The password should have a random length of between 7 and 10 characters. 
Each character should be randomly selected from positions 33 to 126 in the ASCII table. 
Your function will not take any parameters. 
It will return the randomly generated password as its only result. 
Display the randomly generated password in your file’s main program.
*/

prompt("Ready to generate your own random password?\n(Press enter to proceed)");

function randomPassword() {
  let password = "";
  // random number algorithm between minimum and maximum
  const totCharacterPass = Math.floor(Math.random()*(10-7+1)+7);

  for (i = 0; i < totCharacterPass; i++) {
    const randomAscii = Math.floor(Math.random()*(126-33+1)+33);
    // String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.
    password += String.fromCharCode(randomAscii);
    
  } return password
}

alert(randomPassword())