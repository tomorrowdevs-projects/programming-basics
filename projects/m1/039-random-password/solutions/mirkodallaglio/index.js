function rndPassword (){
    let rndLength = Math.floor(Math.random() * 4)+ 7;
    let password = '';
    for (i= 0; i<rndLength; i++){
        password += String.fromCharCode(Math.floor(Math.random() * 94)+33);
    };
    return password;
};

console.log(`Password:  ${rndPassword()}    Password length: ${rndPassword().length}`);