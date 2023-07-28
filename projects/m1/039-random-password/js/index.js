
alert("Press any key to generate a random password.");

function passwordGenerator() {

    let passwordLength = Math.floor(Math.random() * (10 - 7) + 7);

    let password  = [];

    for (let i = 0; i < passwordLength; i++) {

        let passwordAsciiChar = Math.floor(Math.random() * (126 - 33) + 33);
        let passwordChar = String.fromCharCode(passwordAsciiChar);
        password.push(passwordChar);
    } 

    alert(password.join(''));
}

passwordGenerator();
