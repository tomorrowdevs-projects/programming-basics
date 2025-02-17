function generatePass(){
    let passLenght = Math.floor(Math.random() * (10 - 7 + 1) + 7);
    let minAscii = 33;
    let maxAscii = 126;
    const newPass = [];
    for (i=0; i<passLenght;i++){
        let asciiCode = Math.floor(Math.random() * (maxAscii - minAscii + 1)) + minAscii;
        let character = String.fromCharCode(asciiCode);
        newPass.push(character)
    }
    console.log(newPass.join(""));
}

generatePass();