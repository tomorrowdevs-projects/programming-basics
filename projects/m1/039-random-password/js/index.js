const passwordRandom = randomPassword();
alert("The password is " + passwordRandom.length + " characters long and is: " + passwordRandom);

function randomPassword(){

  const withPassword = Math.round(Math.random() * (10 - 7) + 7);
  let password = "";

  for(let i = 0; i < withPassword; i++){

    let numberTableAscii = Math.round(Math.random() * (126 - 33) + 33);
    password += String.fromCharCode(numberTableAscii);

  }
    
  return password;
  
}