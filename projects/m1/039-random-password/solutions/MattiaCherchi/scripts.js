function getRandomPassword() {

    const passwordLength = Math.floor(Math.random() * (10 - 7 + 1) + 7);
    let randPassword = '';

    for (i = 0; i < passwordLength; i++) {
        randPassword += String.fromCharCode(Math.floor(Math.random() * (126 - 33 + 1) + 33))
    }

    return alert(`For more security use the following password \n${randPassword}`)
}



getRandomPassword()
