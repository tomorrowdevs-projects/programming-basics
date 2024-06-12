function generatePassword(){
    // generate password length between 7 and 10 characters
    const passwordLength =Math.floor(Math.random() * (10 - 7 + 1) ) + 7
    let password = ""
    for(let i = 1; i <= passwordLength; i++){
        // Each character should be randomly selected from positions 33 to 126 in the ASCII table
        const randomValue = Math.floor(Math.random() * (126 - 33 +1) + 33)
        password += String.fromCharCode(randomValue)
    }
    return password
}
alert('Password: ' + generatePassword())